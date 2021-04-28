import { FC } from 'react'
import '../styles/globals.css'

interface AppProps {
  Component: FC
  pageProps: any
}

export const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Component {...pageProps} />
)

export default App
