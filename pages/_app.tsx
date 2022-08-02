import { AppProps } from 'next/app'
import { FC } from 'react'
import { reduxWrapper } from 'store'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default reduxWrapper.withRedux(MyApp)
