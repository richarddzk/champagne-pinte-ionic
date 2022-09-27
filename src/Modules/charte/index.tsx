import React from 'react'
import Page from '@/Main/Page'
import dynamic from 'next/dynamic'

const CharteDonnees = dynamic(() => import('./CharteDonnees'), {
  loading: () => <>...</>
})

const Index: React.FC = () => (
  <Page>
    <CharteDonnees />
  </Page>
)

export default Index
