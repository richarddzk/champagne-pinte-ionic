import React from 'react'
import Page from '@/Main/Page'
import dynamic from 'next/dynamic'

const ChangePassword = dynamic(() => import('./ChangePassword'), {
  loading: () => <>...</>
})

const Index: React.FC = () => (
  <Page>
    <ChangePassword />
  </Page>
)

export default Index
