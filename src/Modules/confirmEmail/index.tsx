import React from 'react'
import Page from '@/Main/Page'

import dynamic from 'next/dynamic'

const ConfirmEmail = dynamic(() => import('./ConfirmEmail'), {
  loading: () => <>...</>
})

const Index: React.FC = () => (
  <Page>
    <ConfirmEmail />
  </Page>
)

export default Index
