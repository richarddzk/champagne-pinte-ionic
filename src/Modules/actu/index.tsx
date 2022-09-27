import React from 'react'
import { Main } from '@/Main'
import dynamic from 'next/dynamic'
import Page from '@/Main/Page'

const Actualite = dynamic(() => import('./Actu'), {
  loading: () => <>...</>
})

const Actu: React.FC = () => (
  <Page>
    <Main>
      {' '}
      <Actualite />
    </Main>
  </Page>
)
export default Actu
