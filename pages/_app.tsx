import React, { FC } from 'react'
import Layout from '../components/Layout'
import '../styles/globals.css'
interface AppProps {
  Component: FC
  pageProps: any
}

export const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default App
