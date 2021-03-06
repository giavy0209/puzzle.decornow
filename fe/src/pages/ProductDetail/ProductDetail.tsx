import { Image } from "antd";
import { FC, useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { toast } from "react-toastify";
import { actionChangeCart } from "store/actions";
interface ProductDetail {
    pageData: {
        [k: string]: any
    },
}
const ProductDetail: FC<ProductDetail> = ({ pageData }) => {
    const dispatch = useDispatch()
    const cart = useSelector((state: any) => state.cart)
    const [Visible, setVisible] = useState(false)

    const [Quantity, setQuantity] = useState(1)
    const [MainImage, setMainImage] = useState(pageData.thumbnail)
    const handleQuantity = (e?: any, add?: number) => {
        if (e) {
            let value = Number(e.target.value)
            if (!value || value < 1) value = 1
            setQuantity(value)
        } else {
            let value = Quantity + (add || 0)
            if (!value || value < 1) value = 1
            setQuantity(value)
        }
    }

    const handleAddToCart = () => {
        const isHaveInCart = cart.find(o => o._id === pageData._id)
        if (isHaveInCart) {
            isHaveInCart.quantity += Quantity
        } else {
            cart.push({
                ...pageData,
                quantity: Quantity
            })
        }
        dispatch(actionChangeCart([...cart]))
        toast(`Đã thêm ${Quantity} sản phẩm vào giỏ hàng`)
    }

    return (
        <>
            <div className="product-detail">
                <div className="container">
                    <div className="flexbox">
                        <div className="col-4 md-col-6 sm-col-12">
                            <div className="image-slice">
                                <div className="main">
                                    <Image
                                        preview={{ visible: false }}
                                        src={MainImage}
                                        onClick={() => setVisible(true)}
                                    />
                                    <div className="hidden-zoom" style={{ display: 'none' }}>
                                        <Image.PreviewGroup preview={{ visible: Visible, onVisibleChange: vis => setVisible(vis) }}>
                                            <Image src={pageData.thumbnail} />
                                            {
                                                pageData.images?.map((o, index) => <Image key={o + index} src={o} />)
                                            }
                                        </Image.PreviewGroup>
                                    </div>
                                </div>
                                <div className="slider">

                                    <Slider infinite={false} speed={500} slidesToShow={3.5} slidesToScroll={3}>
                                        <div className="slide">
                                            <div onClick={() => setMainImage(pageData.thumbnail)} className="img">
                                                <img src={pageData.thumbnail} className="cover" alt="" />
                                            </div>
                                        </div>
                                        {
                                            pageData.images?.map((o, index) => <div key={o + index} className="slide">
                                                <div onClick={() => setMainImage(o)} className="img">
                                                    <img className="cover" src={o} alt="" />
                                                </div>
                                            </div>)
                                        }
                                    </Slider>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 md-col-6 sm-col-12">
                            <div className="detail">
                                <h1 className="name">{pageData.name}</h1>
                                <div className="description">
                                    {pageData.description}
                                </div>
                                <div className="quantity mt-20">
                                    <div className="flexbox center">
                                        <div className="col-4 lg-col-12">
                                            <div className="input">
                                                <div onClick={() => handleQuantity(null, -1)} className="change"><FaMinus /></div>
                                                <input value={Quantity} onChange={handleQuantity} type="number" name="" id="" />
                                                <div onClick={() => handleQuantity(null, 1)} className="change"><FaPlus /></div>
                                            </div>
                                        </div>
                                        <div className="col-4 lg-col-12">
                                            <div className="add">
                                                <div onClick={handleAddToCart} className="button">Thêm vào giỏ hàng</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="price">{pageData.price.toLocaleString()}đ</div>

                            </div>
                        </div>
                        <div className="col-12">
                            <div dangerouslySetInnerHTML={{ __html: pageData.content }} className="content ql-editor"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail