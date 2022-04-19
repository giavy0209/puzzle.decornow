import type { AppProps } from 'next/app'
import 'assets/scss/styles.scss'
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from 'store';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import AOS from 'aos'
import 'aos/dist/aos.css'

import 'antd/dist/antd.css';
import { useEffect } from 'react';
import callAPI from 'call';
import { Footer, Header } from 'components';
import { ToastContainer } from 'react-toastify';


let navigationPropsCache;

function MyApp({ Component, pageProps,navigationProps }) {
  useEffect(() => {
    AOS.init()
    navigationPropsCache = navigationProps
  }, [])
  return <Provider store={store}>
    <ToastContainer />
    <Header menu={navigationProps} />
    <Component {...pageProps} />
    <Footer />
  </Provider>
}

MyApp.getInitialProps = async () => {
  if(navigationPropsCache) {
    return {navigationProps: navigationPropsCache}
  }

  const res = await callAPI.get('/categories_nested')
  
  return {navigationProps : res.data}
}


export default MyApp
