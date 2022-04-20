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
    console.log(router);
    
    return (
        <>
            <div className="products">
                <div className="container">
                    <div className="title">{pageData.name}</div>
                    <div className="row">
                        {items?.data.map(o => <div className="item">
                            <Link href={`/product-detail/${o.slug}`}>
                                <a className="product">
                                    <div className="img">
                                        <img className="cover" src={o.thumbnail} alt="" />
                                    </div>
                                    <div className="name">
                                        {o.name}
                                    </div>
                                </a>
                            </Link>
                        </div>)}
                    </div>
                    <Pagination onChange={(page) => router.push(`/product/${router.query.product}?page=${page}`)} current={items.current} pageSize={items.pageSize} total={items.total} />
                </div>
            </div>
        </>

    )
}

export default Product