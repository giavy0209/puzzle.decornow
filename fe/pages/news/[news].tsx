import callAPI from 'call'
import type { NextPage } from 'next'
import Head from 'next/head'
import { News, Product} from 'pages'

const App: NextPage<News> = ({pageData, items}) => {
  return (
    <>
    <Head>
      <title>{pageData.nameSeo}</title>
      <meta name="description" content={pageData.description} />
      <meta name="og:image" content={pageData.thumbnail} />
    </Head>
    <News pageData={pageData} items={items}/>
    </>
  )
}

export default App

export async function getServerSideProps({params,query}) {
  const res = await callAPI.get(`/categories/${params.news}`)
  
  const page = Number(query.page) || 1
  const limit = 12
  const skip = (page-1) * limit
  const items = await callAPI.get(`/product?category=${res.data._id}&skip=${skip}&limit=${limit}`)

  if(res.data) {
    return {props : {
      pageData : res.data,
      items : {
        ...items,
        current : page,
        pageSize : limit,
      },
    }}
  }else {
    return {
      notFound : true
    }
  }
}
