import 'assets/scss/styles.scss'
import 'react-toastify/dist/ReactToastify.css';
import { Provider, useDispatch } from 'react-redux';
import store from 'store';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import AOS from 'aos'
import 'aos/dist/aos.css'

import 'antd/dist/antd.css';
import { FC, useEffect } from 'react';
import callAPI from 'call';
import { Footer, Header } from 'components';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head';

import "react-quill/dist/quill.core.css";
import storage from 'helpers/storage';
import { asyncGetUser } from 'store/initActions';
let navigationPropsCache;

const WrapperProvider = ({Component, pageProps, navigationProps }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    const token = storage.getToken()
    if (token) {
      dispatch(asyncGetUser())
    }
  }, [])
  useEffect(() => {
    AOS.init()
    navigationPropsCache = navigationProps
  }, [])
  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
      </Head>
      <ToastContainer />
      <Header menu={navigationProps} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

function MyApp({ Component, pageProps, navigationProps }) {
  
  return <Provider store={store}>
    <WrapperProvider Component={Component} pageProps={pageProps} navigationProps={navigationProps}/>
  </Provider>
}

MyApp.getInitialProps = async () => {
  if (navigationPropsCache) {
    return { navigationProps: navigationPropsCache }
  }

  const res = await callAPI.get('/categories_nested')

  return { navigationProps: res.data }
}


export default MyApp
