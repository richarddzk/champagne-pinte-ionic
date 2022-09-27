import React from 'react'
import Page from '@/Main/Page'

import { Main } from '@/Main'
import dynamic from 'next/dynamic'

const SavoirFaire = dynamic(() => import('./SavoirFaire'), {
  loading: () => <>...</>
})

const Savoir: React.FC = () => (
  <Page>
    <Main>
      <SavoirFaire />
    </Main>
  </Page>
)
export default Savoir
