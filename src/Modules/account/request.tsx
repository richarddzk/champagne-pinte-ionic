import { gql } from '@apollo/client'

const GET_ACCOUNT_INFO = gql`
  query user($where: UserWhereUniqueInput!) {
    data: user(where: $where) {
      createdAt
      firstName
      id
      lastName
      roles
      updatedAt
      username
      email
      stripeCustomerId
      customers {
        id
        comments
        phone
        panier
        addresses {
          id
          address_1
          address_2
          city
          country
          createdAt
          firstName
          isDefault
          lastName
          phone
          zip
          state
        }
        orders {
          createdAt
          comments
          id
          totalPrice
          lineItems {
            price
            quantity
            product {
              price
              title
              description
              images {
                src
                title
              }
            }
          }
          address {
            id
            address_1
            address_2
            city
            country
            createdAt
            firstName
            isDefault
            lastName
            phone
            zip
            state
          }
          facturation {
            id
            address_1
            address_2
            city
            country
            createdAt
            firstName
            isDefault
            lastName
            phone
            zip
            state
          }
        }
        __typename
      }
      __typename
    }
  }
`

export const UPD_USER = gql`
  mutation updateUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {
    data: updateUser(where: $where, data: $data) {
      firstName
      lastName
      username
      email
      customers {
        id
        __typename
      }
      __typename
    }
  }
`

export default GET_ACCOUNT_INFO
