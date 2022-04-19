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

export async function getServerSideProps({params}) {
  const res = await callAPI.get(`/categories/${params.product}`)
  const items = await callAPI.get(`/products?category=${params.product}`)
  if(res.data) {
    return {props : {
      pageData : res.data,
      items,
    }}
  }else {
    return {
      notFound : true
    }
  }
}
