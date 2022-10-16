import React from 'react'
import Head from 'next/head'

import withDarkMode from 'next-dark-mode'
import type { AppProps } from 'next/app'

import dynamic from 'next/dynamic'

import '../public/css/slick-theme.css'
import '../public/css/App.css'

React.useLayoutEffect = React.useEffect

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <></>
})

const SEO = dynamic(() => import('@/Main/SEO'), {
  loading: () => <Loading />
})

const ProgressBar = dynamic(() => import('@/Utils/ProgressBar'), {
  loading: () => <Loading />
})

const CssBaseline = dynamic(() => import('@mui/material/CssBaseline'), {
  loading: () => <Loading />
})

// export function reportWebVitals(metric: { name: any }) {
//   console.log('name  : **********************', metric.name)
//   console.log(metric)
// }

const App = ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Suspense fallback={<Loading />}>
      <Head>
        <title>Champagne Pinte </title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <SEO
          url="www.champagne-pinte.com"
          schemaType="App"
          title="Pinte Champagne House"
          description="The only direct storefront of the Pinte Champagne house"
          image="/favicon.webp"
        />
        {/* <meta name="theme-color" content={theme.primary?.main} /> */}
      </Head>
      <CssBaseline />

      <ProgressBar color="#CCBF90" options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </React.Suspense>
  )
}

// export async function getServerSideProps(props: { res: any }) {
//   const { res } = props
//   res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')

//   return {
//     props: {
//       time: new Date().toISOString()
//     }
//   }
// }
export default withDarkMode(App)
