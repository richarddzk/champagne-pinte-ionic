import { gql } from '@apollo/client'

export const UPD_ADDRESS = gql`
  mutation updateAddress(
    $where: AddressWhereUniqueInput!
    $data: AddressUpdateInput!
  ) {
    data: updateAddress(where: $where, data: $data) {
      address_1
      address_2
      city
      country
      createdAt
      firstName
      id
      isDefault
      lastName
      phone
      state
      updatedAt
      zip

      customer {
        id
        __typename
      }
      __typename
    }
  }
`

export const ADD_ADDRESS = gql`
  mutation createAddress($data: AddressCreateInput!) {
    data: createAddress(data: $data) {
      address_1
      address_2
      city
      country
      createdAt
      firstName
      id
      isDefault
      lastName
      phone
      state
      updatedAt
      zip
      orders {
        id
        __typename
      }
      customer {
        id
        __typename
      }
      __typename
    }
  }
`
export const DEL_ADDRESS = gql`
  mutation deleteAddress($where: AddressWhereUniqueInput!) {
    data: deleteAddress(where: $where) {
      address_1
      address_2
      city
      country
      createdAt
      firstName
      id
      isDefault
      lastName
      phone
      state
      updatedAt
      zip
      orders {
        id
        __typename
      }
      customer {
        id
        __typename
      }
      __typename
    }
  }
`

export const ADRESSES = gql`
  query AllAdresses($where: AddressWhereInput) {
    addresses(where: $where) {
      id
      address_1
      address_2
      city
      country
      firstName
      lastName
      state
      zip
      customer {
        id
        __typename
      }
    }
  }
`
