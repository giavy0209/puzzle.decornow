import { NextPage } from "next";
import { Banner, Layout } from 'components'
import Link from "next/link";
interface Home {
    newProduct: { [k: string]: any },
    categories: { [k: string]: any }
}
const Home: NextPage<Home> = ({ newProduct, categories }) => {
    return (
        <>
            <div className="home">
                <Banner dots={false} items={[{ img: '/images/banner.jpg' }]} />
                <section className="ss_1">
                    <div className="container">
                        <iframe width="100%" style={{ aspectRatio: '16 / 9' }} src="https://www.youtube.com/embed/1-MYTQKIC-8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <Link href='/upload'><div className="button">Bắt đầu thiết kế</div></Link>
                    </div>
                </section>
                <section className="ss_2">
                    <div className="container">
                        <div className="title">SẢN PHẨM MỚI</div>
                        <div className="flexbox flex6 lg-flex4 md-flex3 sm-flex2 xs-flex2 mt-30 center ">
                        {
                                newProduct?.data?.map(o => <div key={o._id} className="item">
                                    <Link href={`/product-detail/${o.slug}`}>
                                        <a href={`/product-detail/${o.slug}`}>
                                            <div className="img">
                                                <img className="cover" src={o.thumbnail} alt="" />
                                            </div>
                                            <div className="name">
                                                {o.name}
                                            </div>
                                            <div suppressHydrationWarning className="price">
                                                {o.price.toLocaleString()}đ
                                            </div>
                                        </a>
                                    </Link>
                                </div>)
                            }
                            {
                                newProduct?.data?.map(o => <div key={o._id} className="item">
                                    <Link href={`/product-detail/${o.slug}`}>
                                        <a href={`/product-detail/${o.slug}`}>
                                            <div className="img">
                                                <img className="cover" src={o.thumbnail} alt="" />
                                            </div>
                                            <div className="name">
                                                {o.name}
                                            </div>
                                            <div suppressHydrationWarning className="price">
                                                {o.price.toLocaleString()}đ
                                            </div>
                                        </a>
                                    </Link>
                                </div>)
                            }
                            {
                                newProduct?.data?.map(o => <div key={o._id} className="item">
                                    <Link href={`/product-detail/${o.slug}`}>
                                        <a href={`/product-detail/${o.slug}`}>
                                            <div className="img">
                                                <img className="cover" src={o.thumbnail} alt="" />
                                            </div>
                                            <div className="name">
                                                {o.name}
                                            </div>
                                            <div suppressHydrationWarning className="price">
                                                {o.price.toLocaleString()}đ
                                            </div>
                                        </a>
                                    </Link>
                                </div>)
                            }
                            {
                                newProduct?.data?.map(o => <div key={o._id} className="item">
                                    <Link href={`/product-detail/${o.slug}`}>
                                        <a href={`/product-detail/${o.slug}`}>
                                            <div className="img">
                                                <img className="cover" src={o.thumbnail} alt="" />
                                            </div>
                                            <div className="name">
                                                {o.name}
                                            </div>
                                            <div suppressHydrationWarning className="price">
                                                {o.price.toLocaleString()}đ
                                            </div>
                                        </a>
                                    </Link>
                                </div>)
                            }
                            {
                                newProduct?.data?.map(o => <div key={o._id} className="item">
                                    <Link href={`/product-detail/${o.slug}`}>
                                        <a href={`/product-detail/${o.slug}`}>
                                            <div className="img">
                                                <img className="cover" src={o.thumbnail} alt="" />
                                            </div>
                                            <div className="name">
                                                {o.name}
                                            </div>
                                            <div suppressHydrationWarning className="price">
                                                {o.price.toLocaleString()}đ
                                            </div>
                                        </a>
                                    </Link>
                                </div>)
                            }
                            {
                                newProduct?.data?.map(o => <div key={o._id} className="item">
                                    <Link href={`/product-detail/${o.slug}`}>
                                        <a href={`/product-detail/${o.slug}`}>
                                            <div className="img">
                                                <img className="cover" src={o.thumbnail} alt="" />
                                            </div>
                                            <div className="name">
                                                {o.name}
                                            </div>
                                            <div suppressHydrationWarning className="price">
                                                {o.price.toLocaleString()}đ
                                            </div>
                                        </a>
                                    </Link>
                                </div>)
                            }
                            {
                                newProduct?.data?.map(o => <div key={o._id} className="item">
                                    <Link href={`/product-detail/${o.slug}`}>
                                        <a href={`/product-detail/${o.slug}`}>
                                            <div className="img">
                                                <img className="cover" src={o.thumbnail} alt="" />
                                            </div>
                                            <div className="name">
                                                {o.name}
                                            </div>
                                            <div suppressHydrationWarning className="price">
                                                {o.price.toLocaleString()}đ
                                            </div>
                                        </a>
                                    </Link>
                                </div>)
                            }
                            {
                                newProduct?.data?.map(o => <div key={o._id} className="item">
                                    <Link href={`/product-detail/${o.slug}`}>
                                        <a href={`/product-detail/${o.slug}`}>
                                            <div className="img">
                                                <img className="cover" src={o.thumbnail} alt="" />
                                            </div>
                                            <div className="name">
                                                {o.name}
                                            </div>
                                            <div suppressHydrationWarning className="price">
                                                {o.price.toLocaleString()}đ
                                            </div>
                                        </a>
                                    </Link>
                                </div>)
                            }

                        </div>
                    </div>
                </section>
                <section className="ss_3">
                    <div className="container">
                        <div className="title">PLUZZLE{`'`}S MESSAGE</div>
                        <p>Chất liệu gỗ khiến cho sản phẩm trở nên độc đáo và sang trọng hơn. Đặc biệt, việc sử dụng công nghệ in UV với mực cao cấp tạo nên độ bền màu cao. Sản phẩm của Pluzzle được thiết kế và sản xuất tại Việt Nam. Sản phẩm gửi tới bạn chứa đựng tình yêu và tâm huyết của chúng mình. Hy vọng các bạn luôn hài lòng khi trải nghiệm sản phẩm của chúng mình.Pluzzle.vn</p>
                    </div>
                </section>
                <section className="ss_4 mt-30">
                    <div className="container">
                        <div className="title">COLLECTION LIST</div>
                        <div className="flexbox flex6 lg-flex4 md-flex3 sm-flex2 xs-flex2 mt-30">
                        {
                                categories?.data?.map(o => <div key={o._id} className="item">
                                    <Link href={`/product/${o.slug}`}>
                                        <a href={`/product/${o.slug}`}>
                                            <div className="img">
                                                <img className="cover" src={o.thumbnail} alt="" />
                                            </div>
                                            <div className="name">
                                                {o.name}
                                            </div>
                                        </a>
                                    </Link>
                                </div>)
                            }
                            {
                                categories?.data?.map(o => <div key={o._id} className="item">
                                    <Link href={`/product/${o.slug}`}>
                                        <a href={`/product/${o.slug}`}>
                                            <div className="img">
                                                <img className="cover" src={o.thumbnail} alt="" />
                                            </div>
                                            <div className="name">
                                                {o.name}
                                            </div>
                                        </a>
                                    </Link>
                                </div>)
                            }
                            {
                                categories?.data?.map(o => <div key={o._id} className="item">
                                    <Link href={`/product/${o.slug}`}>
                                        <a href={`/product/${o.slug}`}>
                                            <div className="img">
                                                <img className="cover" src={o.thumbnail} alt="" />
                                            </div>
                                            <div className="name">
                                                {o.name}
                                            </div>
                                        </a>
                                    </Link>
                                </div>)
                            }
                            {
                                categories?.data?.map(o => <div key={o._id} className="item">
                                    <Link href={`/product/${o.slug}`}>
                                        <a href={`/product/${o.slug}`}>
                                            <div className="img">
                                                <img className="cover" src={o.thumbnail} alt="" />
                                            </div>
                                            <div className="name">
                                                {o.name}
                                            </div>
                                        </a>
                                    </Link>
                                </div>)
                            }
                            {
                                categories?.data?.map(o => <div key={o._id} className="item">
                                    <Link href={`/product/${o.slug}`}>
                                        <a href={`/product/${o.slug}`}>
                                            <div className="img">
                                                <img className="cover" src={o.thumbnail} alt="" />
                                            </div>
                                            <div className="name">
                                                {o.name}
                                            </div>
                                        </a>
                                    </Link>
                                </div>)
                            }
                            {
                                categories?.data?.map(o => <div key={o._id} className="item">
                                    <Link href={`/product/${o.slug}`}>
                                        <a href={`/product/${o.slug}`}>
                                            <div className="img">
                                                <img className="cover" src={o.thumbnail} alt="" />
                                            </div>
                                            <div className="name">
                                                {o.name}
                                            </div>
                                        </a>
                                    </Link>
                                </div>)
                            }

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home