import { Button, Image, Input, Modal, Select, Table } from "antd";
import callAPI from "callAPI";
import renderDate from "helpers/renderDate";
import { FC, useCallback, useEffect, useState } from "react";

const Order: FC = () => {
    const [Data, setData] = useState<any[]>([])
    const [Detail, setDetail] = useState<any>(null)
    const [Pagin, setPagin] = useState({ total: 0, skip: 0, limit: 10, current: 1 })
    const [Status, setStatus] = useState(-1)
    const [Sort, setSort] = useState(1)
    const [SearchItem, setSearchItem] = useState('')

    const getdata = useCallback(async () => {
        const res = await callAPI.get(`/order?skip=${Pagin.skip}&limit=${Pagin.limit}&status=${Status}&sort=${Sort}&item=${SearchItem}`)
        setData([...res.data])
        setPagin(prev => ({ ...prev, total: res.total }))
    }, [Pagin.skip, Pagin.limit,Status,Sort,SearchItem])
    
    useEffect(() => {
        getdata()
    }, [getdata])

    const patchStatus = useCallback(async (status, _id) => {
        await callAPI.patch(`/order?_id=${_id}` , {status})
        getdata()
    },[getdata])

    const column = [
        {
            key: '_id',
            dataIndex: '_id',
            title: 'Hành động',
            render: (_id, data) => <>
                <Button onClick={() => setDetail(data)} > Xem chi tiết </Button><br />
                <Button onClick={()=>patchStatus(2, _id)}>Đã chuyển</Button><br />
                <Button onClick={()=>patchStatus(1, _id)}>Hoàn tất</Button><br />
                <Button onClick={()=>patchStatus(3, _id)}>Hủy</Button>
            </>
        },
        {
            key: 'status',
            dataIndex: 'status',
            title: 'Trạng thái',
            render: status => status === 0 ? 'Chờ giao' : status === 1 ? 'Đã giao' : status === 2 ? 'Đang giao' : 'Đã hủy'
        },
        {
            key: 'name',
            dataIndex: 'name',
            title: 'Tên KH'
        },
        {
            key: 'phone',
            dataIndex: 'phone',
            title: 'SĐT'
        },
        {
            key: 'address',
            dataIndex: 'address',
            title: 'Địa chỉ'
        },
        {
            key: 'province',
            dataIndex: 'province',
            title: 'Tỉnh/thành',
        },
        {
            key: 'district',
            dataIndex: 'district',
            title: 'Quận huyện',
        },
        {
            key: 'ward',
            dataIndex: 'ward',
            title: 'Phường/xã',
        },
        {
            key: 'shippingFee',
            dataIndex: 'shippingFee',
            title: 'Tiền shipping',
            render: shippingFee => Number(shippingFee).toLocaleString()
        },
        {
            key: 'sum',
            dataIndex: 'sum',
            title: 'Tổng tiền',
            render: sum => Number(sum).toLocaleString()
        },
        {
            key: 'createdAt',
            dataIndex: 'createdAt',
            title: 'Thời gian đặt hàng',
            render: date => renderDate({ date })
        },
    ]
    return (
        <>
            <Select onChange={setStatus} value={Status} style={{width : '50%'}} placeholder="Trạng thái">
                <Select.Option value={-1}>Tất cả</Select.Option>
                <Select.Option value={0}>Chưa xử lý</Select.Option>
                <Select.Option value={2}>Đã giao</Select.Option>
                <Select.Option value={3}>Đã hủy</Select.Option>
                <Select.Option value={1}>Đã hoàn tất</Select.Option>
            </Select>
            <Select onChange={setSort} style={{width : '50%'}} placeholder="Sắp xếp">
                <Select.OptGroup label="Ngày tạo">
                    <Select.Option value="1">Mới nhất</Select.Option>
                    <Select.Option value="2">Cũ nhất</Select.Option>
                </Select.OptGroup>
                <Select.OptGroup label="Giá tiền đơn hàng">
                    <Select.Option value="3">Cao nhất</Select.Option>
                    <Select.Option value="4">Thấp nhất</Select.Option>
                </Select.OptGroup>
            </Select>
            <Input placeholder="Tìm sản phẩn trong đơn hàng" onChange={e => setSearchItem(e.target.value)}/>
            <Table
                dataSource={Data}
                columns={column}
                scroll={{ x: 1600 }}
                pagination={{
                    current: Pagin.current,
                    pageSize: Pagin.limit,
                    total: Pagin.total,
                    onChange: page => setPagin(prev => ({ ...prev, current: page, skip: (page - 1) * Pagin.limit }))
                }} />


            <Modal width={'80%'} visible={!!Detail} onCancel={()=>setDetail(null)} footer={false}>
                <p>Tên KH : {Detail?.name}</p>
                <p>SDT : {Detail?.phone}</p>
                <p>Địa chỉ:{Detail?.address}</p>
                <p>Tỉnh/thành: {Detail?.province}</p>
                <p>Quận/huyện: {Detail?.district}</p>
                <p>Phường/xã: {Detail?.ward}</p>
                <p>Phí shipping: {Detail?.shippingFee}</p>
                <p>Tổng tiền: {Detail?.sum}</p>
                <p>Ngày đặt hàng: {renderDate({date : Detail?.createdAt})}</p>
                <p>Sản phẩm :</p>
                <Table 
                dataSource={Detail?.items}
                columns={[
                    {
                        key: 'name',
                        dataIndex: 'name',
                        title: 'Tên SP',
                    },
                    {
                        key: 'price',
                        dataIndex: 'price',
                        title: 'Giá',
                        render : price => Number(price).toLocaleString()
                    },
                    {
                        key: 'quantity',
                        dataIndex: 'quantity',
                        title: 'Số lượng',
                    },
                    {
                        key: 'sum',
                        dataIndex: 'sum',
                        title: 'Tổng tiền',
                        render : price => Number(price).toLocaleString()
                    },
                    {
                        key: 'thumbnail',
                        dataIndex: 'thumbnail',
                        title: 'Hình ảnh',
                        render : (img) => <Image src={img} />,
                        width : 120
                    },
                    {
                        key: 'baseImage',
                        dataIndex: 'baseImage',
                        title: 'Hình Gốc',
                        render : (baseImage) => baseImage ? <Image src={baseImage} /> : 'Không',
                        width : 120
                    },
                ]}
                />
            </Modal>
        </>
    )
}

export default Order