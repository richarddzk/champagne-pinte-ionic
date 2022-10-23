import React from 'react'
import Page from '@/Main/Page'
import dynamic from 'next/dynamic'

const NousContacter = dynamic(() => import('./NousContacter'), {
  loading: () => <>...</>
})

const Index: React.FC = () => (
  <Page>
    <NousContacter />
  </Page>
)

export default Index
