import callAPI from 'call'
import type { NextPage } from 'next'
import Head from 'next/head'
import { NewsDetail } from 'pages'

const App: NextPage<NewsDetail> = ({ pageData }) => {
    return (
        <>
            <Head>
                <title>{pageData.nameSeo}</title>
                <meta name="description" content={pageData.description} />
                <meta name="og:image" content={pageData.thumbnail} />
            </Head>
            <NewsDetail pageData={pageData}/>
        </>
    )
}

export default App

export async function getServerSideProps({ params, query }) {
    const res = await callAPI.get(`/product/${params['news-detail']}`)
    if (!res.data) return { notFound: true }

    return {
        props: {
            pageData: res.data,
        }
    }
}
