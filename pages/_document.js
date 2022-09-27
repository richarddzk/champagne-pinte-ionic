import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { withEmotionCache } from '@/Main/AsgardThemeProvider'

class MyDocument extends Document {
  render() {
    return (
      <Html lang={this.props.lang ?? 'fr'}>
        <Head>
          <link rel="icon" href="/favicon.webp" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <meta name='description' content="Author: Richard Duzanski, Web application for Pinte Champagne store front"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default withEmotionCache(MyDocument)