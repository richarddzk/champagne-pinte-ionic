import React from 'react'
import Page from '@/Main/Page'
import Product from './Product'
import { ProductProps } from './interfaces'

const Index: React.FC<ProductProps> = ({ id }) => (
  <Page>
    <Product id={id} />
  </Page>
)

export default Index
