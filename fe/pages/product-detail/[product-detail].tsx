import callAPI from 'call'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ProductDetail } from 'pages'

const App: NextPage<ProductDetail> = ({ pageData }) => {
    return (
        <>
            <Head>
                <title>{pageData.nameSeo}</title>
                <meta name="description" content={pageData.description} />
                <meta name="og:image" content={pageData.thumbnail} />
            </Head>
            <ProductDetail pageData={pageData}/>
        </>
    )
}

export default App

export async function getServerSideProps({ params, query }) {
    const res = await callAPI.get(`/product/${params['product-detail']}`)
    if (!res.data) return { notFound: true }

    return {
        props: {
            pageData: res.data,
        }
    }
}
