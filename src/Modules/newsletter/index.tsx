import React from 'react'
import Page from '@/Main/Page'
import dynamic from 'next/dynamic'

const Newsletter = dynamic(() => import('./Newsletter'), {
  loading: () => <>...</>
})

const Index: React.FC = () => (
  <Page>
    <Newsletter />
  </Page>
)

export default Index
