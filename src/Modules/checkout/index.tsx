import React from 'react'
import Page from '@/Main/Page'
import dynamic from 'next/dynamic'

const InitCheckout = dynamic(() => import('./InitCheckout'), {
  loading: () => <>...</>
})

const Index: React.FC = () => (
  <Page>
    <InitCheckout />
  </Page>
)

export default Index
