import React, { useState, useCallback, useEffect } from 'react'

import { Button, Pagination, Upload, message } from 'antd'
import { DOMAIN ,STORAGE} from 'constant'
import callAPI from 'callAPI'
import { UploadOutlined } from '@ant-design/icons';
import storage from 'helpers/storage';

export default function App() {
    const token = storage.getToken()
    const [ListImages, setListImages] = useState<any>([])
    const [Pagin, setPagin] = useState({skip : 0 , limit : 10, current : 1, total : 0})

    const getListImage = useCallback(async () => {
        var res = await callAPI.get(`/upload?skip=${Pagin.skip}&limti=${Pagin.limit}`)
        setListImages([...res.data])
        setPagin(prev => ({...prev , total : res.total}))
    }, [Pagin.skip, Pagin.limit])

    useEffect(() => {
        getListImage()
    },[getListImage])

    const props = {
        name: 'file',
        action: `${DOMAIN}/upload`,
        multiple: true,
        onChange(info) {
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
                getListImage()
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };


    const handleCopy = useCallback(e => {
        var input = document.createElement('input');
        document.querySelector('body')?.append(input);
        input.value = e.target.innerText;
        input.select();
        document.execCommand("copy");
        input.remove();
        message.success(`copied ${e.target.innerText} `);
    }, [])

    return (
        <>
            <Upload headers={{authorization : token}} {...props}>
                <Button>
                    <UploadOutlined /> Tải ảnh mới
                </Button>
            </Upload>
            <div className="row column-4">
                <Pagination pageSize={Pagin.limit} total={Pagin.total} current={Pagin.current} onChange={(page)=>setPagin({...Pagin, current : page, skip: Pagin.limit * (page-1)})}/>
                {
                    ListImages.map(image => {
                        return (
                            <div className="item" key={image.path}>
                                <div style={{ border: '1px solid #000' }}>
                                    <div style={{ backgroundColor: '#ccc' }} className="list-img img img-1-1">
                                        <img
                                            className={`cur-p`}
                                            alt=""
                                            src={`${STORAGE}${image.path}`} />
                                    </div>
                                    <p onClick={handleCopy} style={{ cursor: 'pointer', fontSize: 20, wordBreak : 'break-all' }}>{`${STORAGE}${image.path}`}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>

    )
}