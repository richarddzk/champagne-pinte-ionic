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
          <meta name='description' content="Née en 1990, la maison de Champagne Pinte est le produit d'un travail construit sur 3
                  générations. Située à Lisse-en-Champagne, le cépage chardonnay est la signature de
                  la Maison."/>
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