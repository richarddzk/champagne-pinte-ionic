import React from 'react'
import Page from '@/Main/Page'
import Account from './Account'
import AddressForm from './AddressForm'

const Index: React.FC<{
  id: string
}> = ({ id }) => (
  <Page>
    <Account id={id} />
  </Page>
)

export default Index
export { AddressForm }
