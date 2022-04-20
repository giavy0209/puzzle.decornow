import callAPI from 'call'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Product} from 'pages'

const App: NextPage<Product> = ({pageData, items}) => {
  return (
    <>
    <Head>
      <title>{pageData.nameSeo}</title>
    </Head>
    <Product pageData={pageData} items={items}/>
    </>
  )
}

export default App

export async function getServerSideProps({params,query}) {
  const res = await callAPI.get(`/categories/${params.product}`)
  const page = Number(query.page) || 1
  const limit = 2
  const skip = (page-1) * limit
  const items = await callAPI.get(`/product?category=${params.product}&skip=${skip}&limit=${limit}`)

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
