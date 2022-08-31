import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import Layout from '../components/Layout'

import { QueryClientProvider, QueryClient } from 'react-query'

const queryclient = new QueryClient()

function MyApp ({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <QueryClientProvider client={queryclient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}

export default MyApp
