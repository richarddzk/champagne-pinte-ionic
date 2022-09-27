import React from 'react'
import Page from '@/Main/Page'
import { Main } from '@/Main'

import Panier from './Panier'

const MainPanier: React.FC = () => (
  <Page>
    <Main>
      <Panier />
    </Main>
  </Page>
)

export default MainPanier
