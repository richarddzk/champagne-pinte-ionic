import { gql } from '@apollo/client'

const UPD_CUSTOMER = gql`
  mutation updateCustomer(
    $where: CustomerWhereUniqueInput!
    $data: CustomerUpdateInput!
  ) {
    data: updateCustomer(where: $where, data: $data) {
      comments
      panier
      createdAt
      email
      firstName
      id
      lastName
      phone
      updatedAt
      addresses {
        id
        __typename
      }
      orders {
        id
        __typename
      }
      user {
        id
        __typename
      }
      __typename
    }
  }
`
export default UPD_CUSTOMER
