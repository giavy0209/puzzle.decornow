import { NextPage } from "next";
import { Banner, Layout } from 'components'
const Home: NextPage = () => {
    return (
        <>
            <Layout>
                <div className="home">
                    <Banner dots={false} items={[{ img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' }]} />
                    <section className="ss_1">
                        <div className="container">
                            <iframe width="100%" style={{ aspectRatio: '16 / 9' }} src="https://www.youtube.com/embed/_0NrayhpdA0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <div className="button">Bắt đầu thiết kế</div>
                        </div>
                    </section>
                    <section className="ss_2">
                        <div className="container">
                            <div className="title">BEST SELLER</div>
                            <div className="row column-6">
                                <div className="item">
                                    <div className="img">
                                        <img className="cover" src="https://cdn.shopify.com/s/files/1/0108/2153/3753/products/4_bc1c8905-3c7c-4642-b168-ba20c85a4e43_200x.png?v=1637989309" alt="" />
                                    </div>
                                    <div className="name">
                                        THIẾT KẾ BỘ XẾP HÌNH GỖ CỦA RIÊNG BẠN
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="img">
                                        <img className="cover" src="https://cdn.shopify.com/s/files/1/0108/2153/3753/products/4_bc1c8905-3c7c-4642-b168-ba20c85a4e43_200x.png?v=1637989309" alt="" />
                                    </div>
                                    <div className="name">
                                        THIẾT KẾ BỘ XẾP HÌNH GỖ CỦA RIÊNG BẠN
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="img">
                                        <img className="cover" src="https://cdn.shopify.com/s/files/1/0108/2153/3753/products/4_bc1c8905-3c7c-4642-b168-ba20c85a4e43_200x.png?v=1637989309" alt="" />
                                    </div>
                                    <div className="name">
                                        THIẾT KẾ BỘ XẾP HÌNH GỖ CỦA RIÊNG BẠN
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="img">
                                        <img className="cover" src="https://cdn.shopify.com/s/files/1/0108/2153/3753/products/4_bc1c8905-3c7c-4642-b168-ba20c85a4e43_200x.png?v=1637989309" alt="" />
                                    </div>
                                    <div className="name">
                                        THIẾT KẾ BỘ XẾP HÌNH GỖ CỦA RIÊNG BẠN
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="img">
                                        <img className="cover" src="https://cdn.shopify.com/s/files/1/0108/2153/3753/products/4_bc1c8905-3c7c-4642-b168-ba20c85a4e43_200x.png?v=1637989309" alt="" />
                                    </div>
                                    <div className="name">
                                        THIẾT KẾ BỘ XẾP HÌNH GỖ CỦA RIÊNG BẠN
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="img">
                                        <img className="cover" src="https://cdn.shopify.com/s/files/1/0108/2153/3753/products/4_bc1c8905-3c7c-4642-b168-ba20c85a4e43_200x.png?v=1637989309" alt="" />
                                    </div>
                                    <div className="name">
                                        THIẾT KẾ BỘ XẾP HÌNH GỖ CỦA RIÊNG BẠN
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="ss_3">
                        <div className="container">
                            <div className="title">PLUZZLE{`'`}S MESSAGE</div>
                            <p>Chất liệu gỗ khiến cho sản phẩm trở nên độc đáo và sang trọng hơn. Đặc biệt, việc sử dụng công nghệ in UV với mực cao cấp tạo nên độ bền màu cao. Sản phẩm của Pluzzle được thiết kế và sản xuất tại Việt Nam. Sản phẩm gửi tới bạn chứa đựng tình yêu và tâm huyết của chúng mình. Hy vọng các bạn luôn hài lòng khi trải nghiệm sản phẩm của chúng mình.Pluzzle.vn</p>
                        </div>
                    </section>
                    <section className="ss_4">
                        <div className="container">
                            <div className="title">COLLECTION LIST</div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}

export default Home