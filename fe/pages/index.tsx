import callAPI from 'call'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Home } from 'pages'
const App: NextPage<Home> = ({ newProduct,categories }) => {

  return (
    <>
      <Home newProduct={newProduct} categories={categories}/>
    </>
  )
}
export async function getServerSideProps({ params, query }) {
  const newProduct = await callAPI.get(`/product?limit=12&type=1`)
  const categories = await callAPI.get('/categories?type=1')
  
  return {
    props: {
      newProduct,
      categories
    }
  }
}
export default App