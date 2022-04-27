import { faEdit, faTrash, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Layout, Modal } from "components";
import readFile from "helpers/readFile";
import { ChangeEvent, CSSProperties, FunctionComponent, useCallback, useEffect, useRef, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaArrowAltCircleDown, FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowAltCircleUp, FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { actionChangeCart } from "store/actions";
import { v4 as uuidv4 } from 'uuid';

const slice = [
    {
        slice: '/images/slice_1.png',
        sliceIcon: '/images/slice_icon_1.png',
    },
    {
        slice: '/images/slice_2.png',
        sliceIcon: '/images/slice_icon_2.png',
    },
    {
        slice: '/images/slice_3.png',
        sliceIcon: '/images/slice_icon_3.png',
    },
    {
        slice: '/images/slice_4.png',
        sliceIcon: '/images/slice_icon_4.png',
    },
]

const Upload: FunctionComponent = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state : any) => state.cart)
    const [SelectedSlice, setSelectedSlice] = useState(slice[0])
    const [SelectedFrame, setSelectedFrame] = useState(1)
    const [Size, setSize] = useState({ w: 3000, h: 3000 })
    const [ImagePos, setImagePos] = useState({ x: 0, y: 0 })
    const [ImageRatio, setImageRatio] = useState<number | null>(null)

    const [ImageSrc, setImageSrc] = useState<null | string>(null)
    const initialRatio = useRef<number | null>(null)
    const canvas = useRef<HTMLCanvasElement>(null)
    const ctx = useRef<CanvasRenderingContext2D | null>()
    useEffect(() => {
        if (canvas.current && !ctx.current) {
            ctx.current = canvas.current.getContext('2d')
        }
        if (canvas.current) {
            canvas.current.width = Size.w
            canvas.current.height = Size.h
        }
    }, [Size])

    const loadImage = useCallback((): Promise<HTMLImageElement> => new Promise(r => {
        if (ImageSrc) {
            const img = new Image();
            img.src = ImageSrc
            img.onload = () => {
                r(img)
            }
        }
    }),[ImageSrc])
    
    const createPattern = useCallback(async () => {
        const img = await loadImage()
        const imgW = img.width;
        const imgH = img.height
        const canvasPtrn = document.createElement('canvas')
        canvasPtrn.width = Size.w
        canvasPtrn.height = Size.h
        const ctxPtrn = canvasPtrn.getContext('2d')
        const percentX = Size.w / imgW;
        const percentY = Size.h / imgH
        const ratio = Math.min(percentX, percentY)

        if (!initialRatio.current) initialRatio.current = ratio
        if (ImageRatio === null) {
            setImageRatio(initialRatio.current)
            ctxPtrn?.drawImage(
                img,
                0, 0,
                imgW, imgH,
                ImagePos.x, ImagePos.y,
                Size.w * initialRatio.current, Size.h * initialRatio.current
            )
        } else {
            ctxPtrn?.drawImage(
                img,
                0, 0,
                imgW, imgH,
                ImagePos.x, ImagePos.y,
                Size.w * ImageRatio, Size.h * ImageRatio
            )
        }
        return canvasPtrn
    },[loadImage,Size,ImagePos,ImageRatio])

    const drawSlice = useCallback((): Promise<any> => new Promise(r => {
        const img = new Image()
        img.src = SelectedSlice.slice
        console.log(Size);
        
        img.onload = () => {
            const canvasPtrn = document.createElement('canvas')
            canvasPtrn.width = Size.w
            canvasPtrn.height = Size.h
            const ctxPtrn = canvasPtrn.getContext('2d')
            ctxPtrn?.drawImage(img, 0, 0, img.width, img.height, 0, 0, Size.w, Size.h)
            r(canvasPtrn)
        }
    }),[SelectedSlice,Size])

    useEffect(() => {
        if (ctx.current) {
            ctx.current.clearRect(0, 0, Size.w, Size.h)
            ctx.current.fillStyle = '#ccc'
            ctx.current.beginPath();
            if (SelectedFrame === 0 || SelectedFrame === 1) {
                ctx.current.fillRect(0, 0, Size.w, Size.h)
                if (ImageSrc) {
                    createPattern()
                        .then(cP => {
                            if (ctx.current) {
                                const pattern: any = ctx.current.createPattern(cP, 'no-repeat')
                                ctx.current.fillStyle = pattern
                                ctx.current.fillRect(0, 0, Size.w, Size.h)
                            }
                            drawSlice()
                                .then(cP => {
                                    if (ctx.current) {
                                        const pattern: any = ctx.current.createPattern(cP, 'no-repeat')
                                        ctx.current.fillStyle = pattern
                                        ctx.current.fillRect(0, 0, Size.w, Size.h)
                                    }
                                })
                        })
                }
            }
            if (SelectedFrame === 2) {
                ctx.current.arc(
                    Size.w / 2,
                    Size.h / 2,
                    Size.w / 2,
                    0,
                    Math.PI * 2
                )
                ctx.current.fill()

                if (ImageSrc) {
                    createPattern()
                        .then(cP => {
                            if (ctx.current) {
                                const pattern: any = ctx.current.createPattern(cP, 'no-repeat')
                                ctx.current.fillStyle = pattern
                                ctx.current.fill()
                            }
                            drawSlice()
                                .then(cP => {
                                    if (ctx.current) {
                                        const pattern: any = ctx.current.createPattern(cP, 'no-repeat')
                                        ctx.current.fillStyle = pattern
                                        ctx.current.fill()
                                    }
                                })
                        })
                }
            }
            if (SelectedFrame === 3) {
                const x = Size.w / 2
                const y = Size.h / 4;
                const xPadding = x / 50
                ctx.current.lineWidth = 10
                ctx.current.moveTo(x, y)
                ctx.current.bezierCurveTo(x, 0, xPadding, 0, xPadding, y);
                ctx.current.bezierCurveTo(0, Size.h / 2, x / 4, y * 2, x, Size.h)
                ctx.current.bezierCurveTo(Size.w - x / 4, y * 2, Size.w, Size.h / 2, Size.w - xPadding, y);
                ctx.current.bezierCurveTo(Size.w - xPadding, 0, x, 0, x, y);
                ctx.current.strokeStyle = '#000';
                ctx.current.fill()

                if (ImageSrc) {
                    createPattern()
                        .then(cP => {
                            if (ctx.current) {
                                const pattern: any = ctx.current.createPattern(cP, 'no-repeat')
                                ctx.current.fillStyle = pattern
                                ctx.current.fill()
                            }
                            drawSlice()
                                .then(cP => {
                                    if (ctx.current) {
                                        const pattern: any = ctx.current.createPattern(cP, 'no-repeat')
                                        ctx.current.fillStyle = pattern
                                        ctx.current.fill()
                                    }
                                })
                        })
                }
            }
            ctx.current.closePath();
        }


    }, [Size, SelectedFrame, drawSlice,createPattern])

    const handleChangeFrame = useCallback((value) => {
        setImageRatio(null)
        initialRatio.current = null
        if (value === 0) {
            setSize({
                w: 2100,
                h: 3000
            })
        }
        if (value === 1) {
            setSize({
                w: 3000,
                h: 3000
            })
        }
        if (value === 2) {
            setSize({
                w: 3000,
                h: 3000
            })
        }
        if (value === 3) {
            setSize({
                w: 2700,
                h: 3000
            })
        }
        setSelectedFrame(value)
    },[])

    const downSize = useCallback(() => {
        if (ImageRatio && initialRatio.current) {
            setImageRatio(ImageRatio - initialRatio.current / 50)
        }
    },[ImageRatio])

    const upSize = useCallback(() => {
        if (ImageRatio && initialRatio.current) {
            setImageRatio(ImageRatio + initialRatio.current / 50)
        }
    },[ImageRatio])

    const handleX = useCallback(value => {
        
        const x = Size.w / 100 * value
        console.log(Size);
        setImagePos({ ...ImagePos, x: ImagePos.x + x })
    },[ImagePos])
    
    const handleY = useCallback(value => {
        const y = Size.h / 100 * value
        setImagePos({ ...ImagePos, y: ImagePos.y + y })
    },[ImagePos])

    const handleChangeImage = async (event: ChangeEvent<HTMLInputElement>) => {
        event.persist()
        const file = event?.target?.files?.[0]
        if (!file) return
        const url: string = (await readFile(file)) as string
        setImageSrc(url)
        setImageRatio(null)
        initialRatio.current = null
    }

    const handleChangeSlide = (o) => {
        setSelectedSlice(o)
        initialRatio.current = null
        setImageRatio(null)
    }

    useEffect(() => {
        const handleKey = e => {
            e.preventDefault()
            const keyCode = e.keyCode

            if (keyCode === 189) {
                downSize()
            }

            if (keyCode === 187) {
                upSize()
            }
            if (keyCode === 39) {
                handleX(1)
            }
            if (keyCode === 37) {
                handleX(-1)
            }
            if (keyCode === 40) {
                handleY(1)
            }
            if (keyCode === 38) {
                handleY(-1)
            }
        }
        document.addEventListener('keydown', handleKey)
        return () => {
            document.removeEventListener('keydown', handleKey)
        }
    }, [downSize, upSize, handleX, handleY])

    const handleAddToCart = () => {
        if (!ImageSrc) return toast('Bạn chưa chọn hình ảnh')
        const url = canvas.current?.toDataURL()
        if (url) {
            const splitDataURI = url.split(',')
            const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
            const mimeString = splitDataURI[0].split(':')[1].split(';')[0]

            const ia = new Uint8Array(byteString.length)
            for (let i = 0; i < byteString.length; i++)
                ia[i] = byteString.charCodeAt(i)

            const file = new Blob([ia], { type: mimeString })
            const blobURL = URL.createObjectURL(file)
            
            cart.push({
                _id : uuidv4(),
                thumbnail : blobURL,
                file,
                price : 500000,
                quantity : 1
            })
            dispatch(actionChangeCart([...cart]))
            toast('Đã thêm vào giỏ hàng')
            setImageSrc(null)
        }
    }
    return (
        <>
            <div className="upload">
                <div className="container">
                    <div className="title">THIẾT KẾ BỘ XẾP HÌNH GỖ CỦA RIÊNG BẠN</div>
                    <div className="flexbox mt-30">
                        <div className="col-6">
                            <div id="canvas">
                                <canvas ref={canvas}></canvas>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="upload">
                                <label htmlFor="upload">
                                    Tải hình lên
                                </label>
                                <input onChange={handleChangeImage} type="file" name="" id="upload" />
                            </div>
                            <div className="controls">
                                <div onClick={upSize} className="control"><FaPlus /></div>
                                <div onClick={downSize} className="control"><FaMinus /></div>
                                <div onClick={() => handleY(-1)} className="control"><FaArrowAltCircleUp /></div>
                                <div onClick={() => handleY(1)} className="control"><FaArrowAltCircleDown /></div>
                                <div onClick={() => handleX(-1)} className="control"><FaArrowAltCircleLeft /></div>
                                <div onClick={() => handleX(1)} className="control"><FaArrowAltCircleRight /></div>
                                <p>Hoặc dùng phím +,- và mũi tên trên bàn phím để điều chỉnh</p>
                            </div>

                            <div className="frame">
                                <div className="title">Khung hình</div>
                                <div onClick={() => handleChangeFrame(0)} className={`frame_1 ${SelectedFrame === 0 ? 'selected' : ''}`}>
                                    <span>Hình chữ nhật 21x30</span>
                                </div>
                                <div onClick={() => handleChangeFrame(1)} className={`frame_2 ${SelectedFrame === 1 ? 'selected' : ''}`}>Hình vuông 30x30</div>
                                <div onClick={() => handleChangeFrame(2)} className={`frame_3 ${SelectedFrame === 2 ? 'selected' : ''}`}>Hình tròn 30x30</div>
                                <div onClick={() => handleChangeFrame(3)} className={`frame_4 ${SelectedFrame === 3 ? 'selected' : ''}`}>
                                    <AiFillHeart />
                                    <span>Trái tim 27x30</span>
                                </div>
                            </div>
                            <div className="slices">
                                <div className="title">Đường cắt</div>

                                {
                                    slice.map(o => <div onClick={() => handleChangeSlide(o)} key={o.slice} className={`slice ${SelectedSlice.slice === o.slice ? 'selected' : ''}`}>
                                        <img src={o.sliceIcon} alt="" />
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                    <div onClick={handleAddToCart} className="button mt-20">Thêm vào giỏ hàng</div>
                </div>
            </div>
        </>
    )
}

export default Upload