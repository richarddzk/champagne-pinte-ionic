import React from 'react'
import Page from '@/Main/Page'
import dynamic from 'next/dynamic'

const ConditionsGeneral = dynamic(() => import('./ConditionsGeneral'), {
  loading: () => <>...</>
})

const Index: React.FC = () => (
  <Page>
    <ConditionsGeneral />
  </Page>
)

export default Index
