import type { NextPage } from 'next'
import Head from 'next/head'
import {Home, Upload} from 'pages'
const App: NextPage = () => {
  return (

    <>
    <Head>
      <title>Giỏ hàng</title>
    </Head>
    <Upload />
    </>
  )
}

export default App
