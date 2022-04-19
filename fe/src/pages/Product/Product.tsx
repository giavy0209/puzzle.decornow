import { useRouter } from "next/router";
import { FC } from "react";
interface Product {
    pageData: {
        [k: string]: any
    },
    items: { [k: string]: any }[]
}
const Product: FC<Product> = ({ pageData,items }) => {

    return (
        <>
            <div className="product">
                <div className="container">
                    <div className="title">{pageData.name}</div>
                    <div className="row">
                        <div className="items">
                            {items?.map(o => <div className="item">
                                <div className="product">
                                    
                                </div>
                            </div>)}
                            
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Product