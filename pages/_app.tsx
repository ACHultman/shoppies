import React, { FC } from 'react'
import Layout from '../components/Layout'
import { wrapper } from '../store/store'
import { useStore } from 'react-redux'

import '../styles/globals.css'
import { PersistGate } from 'redux-persist/integration/react'
interface AppProps {
  Component: FC
  pageProps: any
}

export const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const store = useStore()
  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading...</div>}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PersistGate>
  )
}

export default wrapper.withRedux(App)
