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
    <PersistGate
      persistor={
        // TODO find alternative to this hack
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        store.__persistor
      }
      loading={<div>Loading...</div>}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PersistGate>
  )
}

export default wrapper.withRedux(App)
