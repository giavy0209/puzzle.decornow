import renderDate from "helpers/renderDate";
import { FC } from "react";
interface NewsDetail {
    pageData: {
        [k: string]: any
    },
}
const NewsDetail: FC<NewsDetail> = ({ pageData }) => {
    return (
        <>
            <div className="news-detail">
                <div className="container">
                    <h1 className="title">{pageData.name}</h1>
                    <div className="create-date">{renderDate({ date: pageData.createdAt })}</div>
                    <div className="col-12">
                        <div dangerouslySetInnerHTML={{ __html: pageData.content }} className="content"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsDetail