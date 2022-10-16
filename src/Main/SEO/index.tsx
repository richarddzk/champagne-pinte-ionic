import React from 'react'
import Head from 'next/head'

interface SeoProps {
  title: string
  description: string
  image: string
  url: string
  schemaType: string
}
const settings = {
  graphql: {
    uri: 'https://pinte.dev/graphql'
  },
  meta: {
    rootUrl: 'httpq://champagne-pinte.com',
    title: 'Maison Pinte Champagne',
    description:
      'Pinte est une Maison de champagne construite sur 3 générations. Située à Lisse-en-Champagne, le cépage chardonnay est la signature de la Maison Pinte. Son raisin, issu principalement du Vitryat et de la Côte des Blancs est au cœur de toutes ses cuvées.',
    social: {
      graphic: '/favicon.webp',
      twitter: '@Champagne_Pinte'
    }
  },
  routes: {
    authenticated: {
      pathAfterFailure: '/connexion'
    },
    public: {
      pathAfterFailure: '/documents'
    }
  }
}
const socialTags = ({ url, title, description, image }: SeoProps) => {
  const metaTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:site',
      content: settings && settings.meta && settings.meta.social && settings.meta.social.twitter
    },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    {
      name: 'twitter:creator',
      content: settings && settings.meta && settings.meta.social && settings.meta.social.twitter
    },
    { name: 'twitter:image:src', content: image },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'og:title', content: title },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: url },
    { name: 'og:image', content: image },
    { name: 'og:description', content: description },
    {
      name: 'og:site_name',
      content: settings && settings.meta && settings.meta.title
    },
    {
      name: 'og:published_time',
      content: new Date().toISOString()
    },
    {
      name: 'og:modified_time',
      content: new Date().toISOString()
    }
  ]

  return metaTags
}

const SEO: React.FC<SeoProps> = (props) => {
  const { url, title, description, image, schemaType } = props
  return (
    <Head>
      <title>{title} | App</title>
      <meta name="description" content={description} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />
      {socialTags(props).map(({ name, content }) => (
        <meta key={name} name={name} content={content} />
      ))}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'http://schema.org',
            '@type': schemaType,
            name: title,
            about: description,
            url
          })
        }}
      />
    </Head>
  )
}
export default SEO
