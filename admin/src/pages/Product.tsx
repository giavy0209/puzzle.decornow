import { FC, useCallback, useEffect, useRef, useState } from "react";
import { Form, Input, Select, Button, Table, Modal, message, InputNumber } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import ReactQuill from 'react-quill';

import callAPI from "callAPI";
import { toast } from "react-toastify";

const List: FC = () => {
    return <Form.List
        name="images"
        initialValue={[' ']}
    >
        {(fields, { add, remove }, { errors }) => (
            <>
                {fields.map((field, index) => (
                    <Form.Item
                        label='Hình sản phẩm'
                        required={false}
                        key={field.key}
                    >
                        <Form.Item
                            {...field}
                            validateTrigger={['onChange', 'onBlur']}
                            rules={[
                                {
                                    required: true,
                                    whitespace: true,
                                    message: "Nhập url hình ảnh hoặc xóa",
                                },
                            ]}
                            noStyle
                        >
                            <Input placeholder="URL hình ảnh" style={{ width: '60%' }} />
                        </Form.Item>
                        {fields.length > 1 ? (
                            <MinusCircleOutlined
                                className="dynamic-delete-button"
                                onClick={() => remove(field.name)}
                            />
                        ) : null}
                    </Form.Item>
                ))}
                <Form.Item>
                    <Button
                        type="dashed"
                        onClick={() => add()}
                        style={{ width: '60%' }}
                        icon={<PlusOutlined />}
                    >
                        Thêm hình sản phẩm
                    </Button>
                    <Form.ErrorList errors={errors} />
                </Form.Item>
            </>
        )}
    </Form.List>
}

const Order: FC = () => {
    const [Pagin, setPagin] = useState({ total: 0, skip: 0, limit: 10, current: 1 })
    const [Data, setData] = useState<any[]>([])
    const [Categories, setCategories] = useState<any[]>([])
    const quillRefCreate = useRef<any>()
    const quillRefEdit = useRef<any>()
    const [Edit, setEdit] = useState<null | string>(null)
    const [form] = Form.useForm()
    const getdata = useCallback(async () => {
        const res = await callAPI.get(`/product?skip=${Pagin.skip}&limit=${Pagin.limit}&category=1`)
        setData([...res.data])
        setPagin(prev => ({ ...prev, total: res.total }))

        const cat = await callAPI.get('/categories?limit=9999&category=1')
        setCategories([...cat.data])
    }, [Pagin.skip, Pagin.limit])

    useEffect(() => {
        getdata()
    }, [getdata])

    const handleSubmit = async value => {
        console.log(value);

        await callAPI.post(`/product`, value)
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
                    form.setFieldsValue({ ...data, content : data?.content || '',category: data?.category?._id || null })
                    console.log(form.getFieldsValue());

                }}
                type="primary">Sửa</Button>

                <Button onClick={() => Modal.confirm({
                    title: 'Xác nhận xóa?', onOk() {
                        callAPI.delete(`/product?_id=${_id}`)
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
            key: 'thumbnail',
            dataIndex: 'thumbnail',
            title: 'Ảnh bìa',
            width: 100,
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
        await callAPI.put(`/product?_id=${Edit}`, value)
        message.success('Đã sửa')
        getdata()
    }
    function imageHandler() {
        const quill = quillRefCreate.current.getEditor();
        const range = quill.getSelection();
        const value = prompt('What is the image URL');

        if (value) {
            quill.insertEmbed(range.index, 'image', value,);
        }
    }
    function imageHandlerEdit() {
        const quill = quillRefEdit.current.getEditor();
        const range = quill.getSelection();
        const value = prompt('What is the image URL');

        if (value) {
            quill.insertEmbed(range.index, 'image', value,);
        }
    }
    return (
        <>
            <div className="container">

                <Form initialValues={{ images: [''] }} onFinish={handleSubmit}>
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

                    <Form.Item label="Giá" name='price'>
                        <InputNumber style={{width : '100%'}}/>
                    </Form.Item>

                    <List />
                    <Form.Item label="Danh mục" name="category">
                        <Select>
                            {
                                Categories.map(o => <Select.Option value={o._id} key={o._id}>{o.name}</Select.Option>)
                            }

                        </Select>
                    </Form.Item>
                    <Form.Item initialValue='' label="Nội dung" name="content">
                        <ReactQuill ref={quillRefCreate} theme="snow" modules={{
                            toolbar: {
                                handlers: {
                                    image: imageHandler
                                },
                                container: [
                                    [{ 'header': [1, 2, false] }],
                                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                                    ['link', 'image'],
                                    ['clean']
                                ]
                            },

                        }} />
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
                    <Form.Item label="Giá" name='price'>
                        <InputNumber style={{width : '100%'}}/>
                    </Form.Item>

                    <List />
                    <Form.Item label="Danh mục" name="category">
                        <Select>
                            <Select.Option value={null} >Không chọn</Select.Option>
                            {
                                Categories.map(o => <Select.Option value={o._id} key={o._id}>{o.name}</Select.Option>)
                            }

                        </Select>
                    </Form.Item>
                    <Form.Item label="Nội dung" name="content">
                        <ReactQuill ref={quillRefEdit} theme="snow" modules={{
                            toolbar: {
                                handlers: {
                                    image: imageHandlerEdit
                                },
                                container: [
                                    [{ 'header': [1, 2, false] }],
                                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                                    ['link', 'image'],
                                    ['clean']
                                ]
                            },

                        }} />
                    </Form.Item>
                    <Button htmlType="submit" type="primary">Sửa</Button>
                </Form>
            </Modal>
        </>
    )
}

export default Order