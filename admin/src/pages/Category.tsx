import { FC, useCallback, useEffect, useState } from "react";
import { Form, Input, Select, Button, Table, Modal, message } from 'antd'
import callAPI from "callAPI";
import { toast } from "react-toastify";
const Order: FC = () => {
    const [Pagin, setPagin] = useState({ total: 0, skip: 0, limit: 10, current: 1 })
    const [Data, setData] = useState<any[]>([])
    const [Categories, setCategories] = useState<any[]>([])

    const [Edit, setEdit] = useState<null | string>(null)
    const [form] = Form.useForm()
    const getdata = useCallback(async () => {
        const res = await callAPI.get(`/categories?skip=${Pagin.skip}&limit=${Pagin.limit}&category=1`)
        setData([...res.data])
        setPagin(prev => ({ ...prev, total: res.total }))

        const cat = await callAPI.get('/categories?limit=9999')
        setCategories([...cat.data])
    }, [Pagin.skip, Pagin.limit])

    useEffect(() => {
        getdata()
    }, [getdata])

    const handleSubmit = async value => {
        await callAPI.post(`/categories`, value)
        toast('Tạo thành công')
        getdata()
    }

    const column = [
        {
            key: '_id',
            dataIndex: '_id',
            title: 'Hành động',
            render: (_id, data) => <><Button
                onClick={() => {
                    setEdit(_id)
                    form.setFieldsValue({...data , category : data?.category?._id || null})
                    console.log(form.getFieldsValue());
                    
                }}
                type="primary">Sửa</Button>
                
                <Button onClick={() => Modal.confirm({
                    title: 'Xác nhận xóa?', onOk() {
                        callAPI.delete(`/categories?_id=${_id}`)
                            .then(() => {
                                getdata()
                                message.success('Đã xóa')
                            })
                    }
                })} type="default">Xóa</Button></>
        },
        {
            key: 'name',
            dataIndex: 'name',
            title: 'Tên'
        },
        {
            key: 'description',
            dataIndex: 'description',
            title: 'Mô tả'
        },
        {
            key: 'type',
            dataIndex: 'type',
            title: 'Loại danh mục',
            render: type => type === 1 ? 'Sản phẩm' : 'Bài viết'
        },
        {
            key: 'thumbnail',
            dataIndex: 'thumbnail',
            title: 'Ảnh bìa',
            width : 100,
            render: thumbnail => thumbnail ? <div><img src={thumbnail} alt="" /></div> : null
        },
        {
            key: 'category',
            dataIndex: 'category',
            title: 'Danh mục cha',
            render: category => category?.name
        },
    ]

    const handleEdit = async value => {
        await callAPI.put(`categories?_id=${Edit}`, value)
        message.success('Đã sửa')
        getdata()
    }
    return (
        <>
            <div className="container">
                <Form onFinish={handleSubmit}>
                    <Form.Item label="Tên" name='name'>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Tên SEO" name='nameSeo'>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Mô tả ngắn(SEO)" name='description'>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Thumbnail" name='thumbnail'>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Loại danh mục" name='type'>
                        <Select>
                            <Select.Option value="1">Danh mục sản phẩm</Select.Option>
                            <Select.Option value="2">Danh mục bài viết</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Danh mục cha" name="category">
                        <Select>
                            <Select.Option selected>Không chọn</Select.Option>
                            {
                                Categories.map(o => <Select.Option value={o._id} key={o._id}>{o.name}</Select.Option>)
                            }

                        </Select>
                    </Form.Item>
                    <Button htmlType="submit" type="primary">Tạo</Button>
                </Form>
                <Table dataSource={Data} columns={column} pagination={{ current: Pagin.current, pageSize: Pagin.limit, total: Pagin.total, onChange: page => setPagin(prev => ({ ...prev, current: page, skip: (page - 1) * Pagin.limit })) }} />
            </div>

            <Modal footer={false} title="sửa" visible={!!Edit} onCancel={() => setEdit(null)}>
                <Form form={form} onFinish={handleEdit}>
                    <Form.Item label="Tên" name='name'>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Tên SEO" name='nameSeo'>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Mô tả ngắn(SEO)" name='description'>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Thumbnail" name='thumbnail'>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Loại danh mục" name='type'>
                        <Select>
                            <Select.Option value="1">Danh mục sản phẩm</Select.Option>
                            <Select.Option value="2">Danh mục bài viết</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Danh mục cha" name="category">
                        <Select>
                            <Select.Option value={null} >Không chọn</Select.Option>
                            {
                                Categories.map(o => <Select.Option value={o._id} key={o._id}>{o.name}</Select.Option>)
                            }

                        </Select>
                    </Form.Item>
                    <Button htmlType="submit" type="primary">Sửa</Button>
                </Form>
            </Modal>
        </>
    )
}

export default Order