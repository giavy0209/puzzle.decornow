import { Button, Form, Input, Select } from "antd";
import Link from "next/link";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchDistricts, fetchProvinces, fetchWards } from "services/GHNService";
import { actionChangeCart } from "store/actions";

const Cart: FC = () => {
    const formRef = useRef<any>()
    const [Provinces, setProvinces] = useState<any[]>([])
    const [ProvinceSelected, setProvinceSelected] = useState<any>(null)
    const [Districts, setDistricts] = useState<any[]>([])
    const [DistrictsSelected, setDistrictsSelected] = useState<any>(null)
    const [Wards, setWards] = useState<any[]>([])

    useEffect(() => {
        fetchProvinces().then(res => setProvinces([...res.data]))
    }, [])

    useEffect(() => {
        if (ProvinceSelected) {
            fetchDistricts(ProvinceSelected).then(res => {

                setDistricts([...res.data])
            })

        }
    }, [ProvinceSelected])

    useEffect(() => {
        if (DistrictsSelected) {
            fetchWards(DistrictsSelected).then(res => {
                console.log(res);

                setWards([...res.data])
            })

        }
    }, [DistrictsSelected])

    const cart = useSelector((state: any) => state.cart)
    const dispatch = useDispatch()
    const handleQuantity = (o, add?: number) => {
        let quantity = o.quantity + add
        if (quantity < 1) quantity = 1
        o.quantity = quantity
        dispatch(actionChangeCart([...cart]))
    }
    const handleDelete = data => {
        const index = cart.findIndex(o => o._id === data._id)
        cart.splice(index, 1)
        dispatch(actionChangeCart([...cart]))
    }
    const handleChangeQuantity = (e, o) => {
        let value = Number(e.target.value)
        if (!value || value < 1) value = 1
        o.quantity = value
        dispatch(actionChangeCart([...cart]))
    }
    const onChangeProvince = value => {
        setProvinceSelected(value)
        formRef.current.setFieldsValue({
            ...formRef.current.getFieldsValue(),
            district : null
        })
    }   

    const onChangeDistrict = value => {
        setDistrictsSelected(value)
        formRef.current.setFieldsValue({
            ...formRef.current.getFieldsValue(),
            ward : null
        })
    }   

    const handleFormDone = value => {
        console.log(value);
        
    }
    return (
        <>
            <div className="cart mt-30">
                <div className="container">
                    <div className="title pb-20">Giỏ hàng</div>
                    <div className="flexbox mt-30">
                        <div className="col-8">
                            <div className="cart-items">
                                {
                                    cart.map(o => <div className="item">
                                        <div className="flexbox">
                                            <div className="col-4">
                                                <div className="img">
                                                    <img src={o.thumbnail} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-8">
                                                <div className="info">
                                                    <div onClick={() => handleDelete(o)} className="delete"><FaTrash /> </div>
                                                    <div className="name">
                                                        {
                                                            o.slug ? <Link href={`/product-detail/${o.slug}`}>{o.name}</Link>
                                                                :
                                                                'Ghép hình tranh gỗ'
                                                        }
                                                    </div>
                                                    <div className="price">{o.price.toLocaleString()}đ</div>
                                                    <div className="quantity">
                                                        <div className="input">
                                                            <div onClick={() => handleQuantity(o, -1)} className="change"><FaMinus /></div>
                                                            <input onChange={e => handleChangeQuantity(e, o)} value={o.quantity} type="number" name="" id="" />
                                                            <div onClick={() => handleQuantity(o, 1)} className="change"><FaPlus /></div>
                                                        </div>
                                                    </div>
                                                    <div className="sum">Tổng : {(o.quantity * o.price).toLocaleString()}đ</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }

                            </div>
                        </div>
                        <div className="col-4">
                            <div className="check-out">
                                <div className="sum">Tạm tính: <span>{cart.reduce((prev, curr) => ({ sum: prev.sum + (curr.quantity * curr.price) }), { sum: 0 }).sum.toLocaleString()}đ</span></div>
                                <div className="button">Thanh toán</div>
                                <div className="return">
                                    <Link href={'/'}>Tiếp tục mua sắm</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="title">Thông tin vận chuyển</div>
                    <Form onFinish={handleFormDone} ref={formRef}>
                        <Form.Item rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]} name={"phone"}>
                            <Input placeholder="Điện thoại" />
                        </Form.Item>
                        <Form.Item rules={[{ required: true, message: 'Vui lòng nhập tên' }]} name={"name"}>
                            <Input placeholder="Họ tên" />
                        </Form.Item>

                        <Form.Item rules={[{ required: true, message: 'Vui lòng chọn tỉnh/thành' }]} name={"province"}>
                            <Select
                                showSearch
                                optionFilterProp="ProvinceName"
                                placeholder="Tỉnh / thành phố"
                                onChange={onChangeProvince}
                                filterOption={(input, option) => !!option?.children?.toString().toLowerCase().includes(input.toLowerCase())}
                            >
                                {
                                    Provinces.map(o => <Select.Option value={o.ProvinceID} >{o.ProvinceName}</Select.Option>)
                                }
                            </Select>
                        </Form.Item>

                        {ProvinceSelected && <Form.Item dependencies={['province']} rules={[ { required: true, message: 'Vui lòng chọn quận/huyện' }, ]} name={"district"}>
                            <Select
                                showSearch
                                optionFilterProp="DistrictName"
                                placeholder="Quận/Huyện"
                                filterOption={(input, option) => !!option?.children?.toString().toLowerCase().includes(input.toLowerCase())}
                                onChange={onChangeDistrict}
                            >
                                {
                                    Districts.map(o => <Select.Option value={o.DistrictID} >{o.DistrictName}</Select.Option>)
                                }
                            </Select>
                        </Form.Item>}

                        {DistrictsSelected && <Form.Item rules={[{ required: true, message: 'Vui lòng chọn phường/xã' }]} name={"ward"}>
                            <Select
                                showSearch
                                optionFilterProp="DistrictName"
                                placeholder="Phường/Xã"
                                filterOption={(input, option) => !!option?.children?.toString().toLowerCase().includes(input.toLowerCase())}
                            >
                                {
                                    Wards.map(o => <Select.Option value={o.WardCode} >{o.WardName}</Select.Option>)
                                }
                            </Select>
                        </Form.Item>}

                        <Form.Item rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]} name={"address"}>
                            <Input placeholder="Địa chỉ cụ thể" />
                        </Form.Item>
                        <Button htmlType="submit">Đặt hàng</Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Cart