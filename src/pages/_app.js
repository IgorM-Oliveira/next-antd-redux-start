import 'antd/dist/antd.css'
import '../styles/vars.css'
import '../styles/global.css'

import Head from 'next/head'
import {Provider} from "react-redux";
import store from "../store/storeConfig";
import LayoutComponent from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Template</title>

        {/*Colocar favicon na pagina*/}
        {/*<link rel="shortcut icon" href="/_static/favicon.ico" />*/}

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Provider store={store}>
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      </Provider>
    </div>
  )
}

export default MyApp