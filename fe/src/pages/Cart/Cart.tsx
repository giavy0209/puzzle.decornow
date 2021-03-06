import { Button, Empty, Form, Input, Select } from "antd";
import callAPI from "call";
import { DOMAIN, STORAGE } from "constant";
import Link from "next/link";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { calculateFee, fetchDistricts, fetchProvinces, fetchServices, fetchWards } from "services/GHNService";
import { actionChangeCart } from "store/actions";

const Cart: FC = () => {
    const formRef = useRef<any>()
    const [IsLoading, setIsLoading] = useState(false)
    const [Provinces, setProvinces] = useState<any[]>([])
    const [ProvinceSelected, setProvinceSelected] = useState<any>(null)
    const [Districts, setDistricts] = useState<any[]>([])
    const [DistrictsSelected, setDistrictsSelected] = useState<any>(null)
    const [Wards, setWards] = useState<any[]>([])
    const [WardSelected, setWardSelected] = useState<any>(null)
    const [Fee, setFee] = useState<any>(0)

    const user = useSelector((state: any) => state.user)

    useEffect(() => {
        if (user) {
            
            setProvinceSelected(user.province?.id)
            setDistrictsSelected(user.district?.id)
            setWardSelected(user.ward?.id)
            if(formRef.current) {
                formRef.current.setFieldsValue({
                    ...user,
                    province: user.province?.id,
                    district: user.district?.id,
                    ward: user.ward?.id,
                })
            }
        }
    }, [user])

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
        setDistrictsSelected(null)


        formRef.current.setFieldsValue({
            ...formRef.current.getFieldsValue(),
            district: null
        })
    }

    const onChangeDistrict = value => {
        setDistrictsSelected(value)
        setWardSelected(null)

        fetchServices(value)
            .then(res => {
            })
        formRef.current.setFieldsValue({
            ...formRef.current.getFieldsValue(),
            ward: null
        })
    }

    useEffect(() => {
        if (ProvinceSelected && DistrictsSelected && WardSelected) {
            calculateFee(Number(DistrictsSelected), WardSelected)
                .then(res => {
                    setFee(res.data.total)
                })
        }
    }, [ProvinceSelected, DistrictsSelected, WardSelected])



    const handleFormDone = async value => {
        const items: any[] = []
        setIsLoading(true)
        for (let index = 0; index < cart.length; index++) {
            const item = cart[index];
            if (item.file) {
                const form = new FormData()
                form.append('file', item.file)
                const resThumnail = await callAPI.post('upload', form)
                const thumbnail = `${STORAGE}${resThumnail.data.path}`
                item.thumbnail = thumbnail

                const form2 = new FormData()
                form2.append('file', item.baseImage)
                const resBaseImage = await callAPI.post('upload', form2)
                const baseImage = `${STORAGE}${resBaseImage.data.path}`

                item.baseImage = baseImage
            }
            items.push({
                product: item._id || null,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                thumbnail: item.thumbnail,
                baseImage: item.baseImage
            })

        }

        const res = await callAPI.post('/order', {
            ...value,
            items
        })
        dispatch(actionChangeCart([]))
        setIsLoading(false)

        toast('?????t h??ng th??nh c??ng, nh??n vi??n s??? li??n h??? v???i b???n s???m nh???t.')
    }
    return (
        <>
            <div className="cart mt-30">
                {cart?.length ? <div className="container">
                    <div className="title pb-20">Gi??? h??ng</div>
                    <div className="flexbox mt-30 ">
                        <div className="col-12 md-col-12">
                            <div className="cart-items">
                                {
                                    cart.map(o => <div key={o._id} className="item">
                                        <div className="flexbox md-gap15 sm-gap8">
                                            <div className="col-4 sm-col-6 ">
                                                <div className="img">
                                                    <img src={o.thumbnail} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-8 sm-col-6 ">
                                                <div className="info">
                                                    <div onClick={() => handleDelete(o)} className="delete"><FaTrash /> </div>
                                                    <div className="name">
                                                        {
                                                            o.slug ? <Link href={`/product-detail/${o.slug}`}>{o.name}</Link>
                                                                :
                                                                'Gh??p h??nh tranh g???'
                                                        }
                                                    </div>
                                                    <div className="price">{o.price.toLocaleString()}??</div>
                                                    <div className="quantity">
                                                        <div className="input">
                                                            <div onClick={() => handleQuantity(o, -1)} className="change"><FaMinus /></div>
                                                            <input onChange={e => handleChangeQuantity(e, o)} value={o.quantity} type="number" name="" id="" />
                                                            <div onClick={() => handleQuantity(o, 1)} className="change"><FaPlus /></div>
                                                        </div>
                                                    </div>
                                                    <div className="sum">T???ng : {(o.quantity * o.price).toLocaleString()}??</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }

                            </div>
                        </div>
                        {/* <div className="col-4 md-col-12">
                            <div className="check-out">
                                <div className="sum">T???m t??nh: <span>{cart.reduce((prev, curr) => ({ sum: prev.sum + (curr.quantity * curr.price) }), { sum: 0 }).sum.toLocaleString()}??</span></div>
                                <div className="sum">Ph?? v???n chuy???n: <span>{Fee.toLocaleString()}??</span></div>
                                <div className="button">Thanh to??n</div>
                                <div className="return">
                                    <Link href={'/'}>Ti???p t???c mua s???m</Link>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="title">Th??ng tin v???n chuy???n</div>
                    <Form onFinish={handleFormDone} ref={formRef}>
                        <Form.Item rules={[{ required: true, message: 'Vui l??ng nh???p s??? ??i???n tho???i' }]} name={"phone"}>
                            <Input placeholder="??i???n tho???i" />
                        </Form.Item>
                        <Form.Item rules={[{ required: true, message: 'Vui l??ng nh???p t??n' }]} name={"name"}>
                            <Input placeholder="H??? t??n" />
                        </Form.Item>

                        <Form.Item rules={[{ required: true, message: 'Vui l??ng ch???n t???nh/th??nh' }]} name={"province"}>
                            <Select
                                showSearch
                                optionFilterProp="ProvinceName"
                                placeholder="T???nh / th??nh ph???"
                                onChange={onChangeProvince}
                                filterOption={(input, option) => !!option?.children?.toString().toLowerCase().includes(input.toLowerCase())}
                            >
                                {
                                    Provinces.map(o => <Select.Option key={o.ProvinceID} value={o.ProvinceID.toString()} >{o.ProvinceName}</Select.Option>)
                                }
                            </Select>
                        </Form.Item>

                        {ProvinceSelected && <Form.Item dependencies={['province']} rules={[{ required: true, message: 'Vui l??ng ch???n qu???n/huy???n' },]} name={"district"}>
                            <Select
                                showSearch
                                optionFilterProp="DistrictName"
                                placeholder="Qu???n/Huy???n"
                                filterOption={(input, option) => !!option?.children?.toString().toLowerCase().includes(input.toLowerCase())}
                                onChange={onChangeDistrict}
                            >
                                {
                                    Districts.map(o => <Select.Option key={o.DistrictID} value={o.DistrictID.toString()} >{o.DistrictName}</Select.Option>)
                                }
                            </Select>
                        </Form.Item>}

                        {DistrictsSelected && <Form.Item rules={[{ required: true, message: 'Vui l??ng ch???n ph?????ng/x??' }]} name={"ward"}>
                            <Select
                                showSearch
                                optionFilterProp="DistrictName"
                                placeholder="Ph?????ng/X??"
                                filterOption={(input, option) => !!option?.children?.toString().toLowerCase().includes(input.toLowerCase())}
                                onChange={value => setWardSelected(value)}
                            >
                                {
                                    Wards.map(o => <Select.Option value={o.WardCode} key={o.WardCode} >{o.WardName}</Select.Option>)
                                }
                            </Select>
                        </Form.Item>}

                        <Form.Item rules={[{ required: true, message: 'Vui l??ng nh???p ?????a ch???' }]} name={"address"}>
                            <Input placeholder="?????a ch??? c??? th???" />
                        </Form.Item>
                        <Button type="primary" loading={IsLoading} htmlType="submit">?????t h??ng</Button>
                    </Form>
                </div> : null}
                {!cart?.length && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="B???n ch??a c?? s???n ph???m trong gi??? h??ng"> <Button type="primary"><Link href="/">Ti???p t???c mua h??ng</Link></Button> </Empty>}
            </div>
        </>
    )
}

export default Cart