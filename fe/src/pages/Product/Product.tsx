import { Pagination } from "components";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
interface Product {
    pageData: {
        [k: string]: any
    },
    items: { [k: string]: any }
}
const Product: FC<Product> = ({ pageData, items }) => {
    const router = useRouter()

    return (
        <>
            <div className="products">
                <div className="container">
                    <h1 className="title">{pageData.name}</h1>
                    <div className="flexbox flex6 lg-flex4 md-flex3 sm-flex2 xs-flex1 mt-30">
                        {items?.data.map(o => <div key={o._id} className="item">
                            <Link href={`/${o.type === 1 ? 'product-detail' : 'news-detail'}/${o.slug}`}>
                                <a className="product">
                                    <div className="img">
                                        <img className="cover" src={o.thumbnail} alt="" />
                                    </div>
                                    <div className="name">
                                        {o.name}
                                    </div>
                                    <div className="price">{o.price.toLocaleString()}đ</div>
                                </a>
                            </Link>
                        </div>)}

                    </div>
                    <div className="row">
                    </div>
                    <Pagination
                        onChange={(page) => router.push(`/product/${router.query.product}?page=${page}`)}
                        current={items.current}
                        pageSize={items.pageSize}
                        total={items.total} />
                </div>
            </div>
        </>

    )
}

export default Product