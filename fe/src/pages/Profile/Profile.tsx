import { Button, Form, Input, Radio, Select } from "antd";
import callAPI from "call";
import { FC, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetchDistricts, fetchProvinces, fetchServices, fetchWards } from "services/GHNService";
import { asyncGetUser } from "store/initActions";

const Profile: FC = () => {
    const dispatch = useDispatch()
    const formRef = useRef<any>()
    const [IsLoading, setIsLoading] = useState(false)
    const [Provinces, setProvinces] = useState<any[]>([])
    const [ProvinceSelected, setProvinceSelected] = useState<any>(null)
    const [Districts, setDistricts] = useState<any[]>([])
    const [DistrictsSelected, setDistrictsSelected] = useState<any>(null)
    const [Wards, setWards] = useState<any[]>([])
    const [WardSelected, setWardSelected] = useState<any>(null)

    const user = useSelector((state: any) => state.user)
    useEffect(() => {
        if (user) {
            setProvinceSelected(user.province?.id)
            setDistrictsSelected(user.district?.id)
            setWardSelected(user.ward?.id)
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

        formRef.current.setFieldsValue({
            ...formRef.current.getFieldsValue(),
            ward: null
        })
    }

    const handleSubmitForm = async (value) => {
        setIsLoading(true)
        const province = Provinces.find(o => o.ProvinceID.toString() === value.province)
        console.log(province);

        value.province = {
            name: province.ProvinceName,
            id: province.ProvinceID
        }


        const district = Districts.find(o => o.DistrictID.toString() === value.district)
        value.district = {
            name: district.DistrictName,
            id: district.DistrictID
        }

        const ward = Wards.find(o => o.WardCode.toString() === value.ward)
        value.ward = {
            name: ward.WardName,
            id: ward.WardCode
        }

        const res = await callAPI.patch('/user', value)
        if (res.status === 1) {
            dispatch(asyncGetUser())
        }
        toast("Đã cập nhật thông tin")
        setIsLoading(false)
    }
    useEffect(() => {
        if(user) {
            formRef.current.setFieldsValue({
                ...user,
                province: user.province?.id,
                district: user.district?.id,
                ward: user.ward?.id,
            })
        }
    },[user])
    return (
        <>
            <div className="profile mt-30">
                <div className="container">
                    <div className="title">Thông tin</div>
                    <Form labelCol={{ sm: { span: 6 }, md: { span: 4 } }} wrapperCol={{ sm: { span: 18 }, md: { span: 20 } }} onFinish={handleSubmitForm} ref={formRef}>
                        <Form.Item label="Số điện thoại" rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]} name={"phone"}>
                            <Input placeholder="Điện thoại" />
                        </Form.Item>
                        <Form.Item label="Họ tên" rules={[{ required: true, message: 'Vui lòng nhập tên' }]} name={"name"}>
                            <Input placeholder="Họ tên" />
                        </Form.Item>

                        <Form.Item label="Giới tính" rules={[{ required: true, message: 'Vui lòng chọn giới tính' }]} name={"gender"}>
                            <Radio.Group
                                options={[
                                    { label: 'Nam', value: 'nam' },
                                    { label: 'Nữ', value: 'nu' },
                                ]}
                                optionType="button"
                                buttonStyle="solid"
                            />
                        </Form.Item>

                        <Form.Item label="Tỉnh/thành" rules={[{ required: true, message: 'Vui lòng chọn tỉnh/thành' }]} name={"province"}>
                            <Select
                                showSearch
                                optionFilterProp="ProvinceName"
                                placeholder="Tỉnh / thành phố"
                                onChange={onChangeProvince}
                                filterOption={(input, option) => !!option?.children?.toString().toLowerCase().includes(input.toLowerCase())}
                            >
                                {
                                    Provinces.map(o => <Select.Option key={o.ProvinceID} value={o.ProvinceID.toString()} >{o.ProvinceName}</Select.Option>)
                                }
                            </Select>
                        </Form.Item>

                        {ProvinceSelected && <Form.Item label="Quận/huyện" dependencies={['province']} rules={[{ required: true, message: 'Vui lòng chọn quận/huyện' },]} name={"district"}>
                            <Select
                                showSearch
                                optionFilterProp="DistrictName"
                                placeholder="Quận/Huyện"
                                filterOption={(input, option) => !!option?.children?.toString().toLowerCase().includes(input.toLowerCase())}
                                onChange={onChangeDistrict}
                            >
                                {
                                    Districts.map(o => <Select.Option key={o.DistrictID} value={o.DistrictID.toString()} >{o.DistrictName}</Select.Option>)
                                }
                            </Select>
                        </Form.Item>}

                        {DistrictsSelected && <Form.Item label="Phường/xã" rules={[{ required: true, message: 'Vui lòng chọn phường/xã' }]} name={"ward"}>
                            <Select
                                showSearch
                                optionFilterProp="DistrictName"
                                placeholder="Phường/Xã"
                                filterOption={(input, option) => !!option?.children?.toString().toLowerCase().includes(input.toLowerCase())}
                                onChange={value => setWardSelected(value)}
                            >
                                {
                                    Wards.map(o => <Select.Option value={o.WardCode} key={o.WardCode} >{o.WardName}</Select.Option>)
                                }
                            </Select>
                        </Form.Item>}

                        <Form.Item label="Địa chỉ" rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]} name={"address"}>
                            <Input placeholder="Địa chỉ cụ thể" />
                        </Form.Item>
                        <Button style={{ display: 'block', margin: '0 auto' }} type="primary" loading={IsLoading} htmlType="submit">Cập nhật</Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Profile