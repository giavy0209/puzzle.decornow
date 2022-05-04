import { Image } from "antd";
import callAPI from "call";
import { Pagination } from "components";
import renderDate from "helpers/renderDate";
import Link from "next/link";
import { FC, useCallback, useEffect, useState } from "react";

const History: FC = () => {
    const [Data, setData] = useState<any[]>([])
    const [Pagin, setPagin] = useState({ total: 0, skip: 0, limit: 10, current: 1 })
    const getData = useCallback(async () => {
        const res = await callAPI.get(`/order?skip=${Pagin.skip}&limit=${Pagin.limit}`)
        setData([...res.data])
        setPagin(prev => ({ ...prev, total: res.total }))
        console.log(res);

    }, [Pagin.skip, Pagin.limit])

    useEffect(() => {
        getData()
    }, [getData])
    return (
        <>
            <div className="history mt-30">
                <div className="container">
                    <div className="title">Đơn hàng</div>

                    <div className="orders">
                        {
                            Data.map(o => <div key={o._id} className="order">
                                <div className="status">Ngày đặt hàng: {renderDate({ date: o.createdAt })} </div>
                                <div className="status">Trạng thái thanh toán : {o.isPay ? 'Đã thanh toán' : "Chưa thanh toán"}</div>
                                <div className="status">Trạng thái giao hàng : {o.status === 0 ? 'Chờ giao' : o.status === 1 ? 'Đã giao' : o.status === 2 ? 'Đang giao' : 'Đã hủy'}</div>
                                <div className="status">Địa chỉ : {o.province}, {o.district}, {o.ward}</div>
                                <div className="status">Địa chỉ cụ thể : {o.address}</div>
                                <div className="title">Danh sách đơn hàng</div>
                                <div className="flexbox flex4 center">
                                    {
                                        o.items.map(o => <div key={o._id} className="item">
                                            <div className="list">
                                                <div className="img">
                                                    <Image src={o.thumbnail} />
                                                </div>
                                                <div className="name">
                                                    {o.product ? <Link href={`/product-detail/${o.product}`}>{o.name}</Link>
                                                        :
                                                        <Link href={'/upload'}>{o.name}</Link>
                                                    }
                                                </div>
                                                <div className="price">{o.price.toLocaleString()}đ</div>
                                                <div className="quantity">Số lượng : {o.quantity}</div>
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </div>)
                        }
                    </div>

                    <Pagination current={Pagin.current} pageSize={Pagin.limit} total={Pagin.total} onChange={page => setPagin(prev => ({ ...prev, current: page, skip: (page - 1) * Pagin.limit }))} />
                </div>
            </div>
        </>
    )
}

export default History