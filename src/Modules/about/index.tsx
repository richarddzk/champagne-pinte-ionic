import React from 'react'
import Page from '@/Main/Page'
import About from './About'
import useStyles from './style'

const Index: React.FC = () => (
  <Page>
    <About />
  </Page>
)

export default Index
export { useStyles }
