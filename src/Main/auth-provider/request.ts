import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(data: { email: $username, password: $password }) {
      accessToken
      refreshToken
      id
      firstName
      lastName
      username
      email
      stripeCustomerId
      __typename
    }
  }
`

export const REFRESH_TOKEN = gql`
  mutation refreshToken($token: String!) {
    refreshToken(data: { token: $token }) {
      accessToken
      refreshToken
    }
  }
`

export const GOOGLE_AUTH = gql`
  mutation googleAuthenticate($token: String!) {
    googleAuthenticate(data: { token: $token }) {
      accessToken
      refreshToken
      user {
        id
        firstName
        lastName
        username
        email
        stripeCustomerId
      }
      __typename
    }
  }
`

export const FACEBOOK_AUTH = gql`
  mutation facebookAuthenticate(
    $firstName: String!
    $lastName: String!
    $email: String!
    $username: String!
    $token: String!
  ) {
    facebookAuthenticate(
      data: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        username: $username
        token: $token
      }
    ) {
      accessToken
      user {
        id
        firstName
        lastName
        username
        email
        stripeCustomerId
      }
      __typename
    }
  }
`

export const REGISTER = gql`
  mutation signup(
    $firstName: String!
    $lastName: String!
    $email: String!
    $username: String!
    $password: String!
  ) {
    signup(
      data: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        username: $username
        password: $password
      }
    ) {
      accessToken
      refreshToken
      id
      firstName
      lastName
      username
      email
      stripeCustomerId
      __typename
    }
  }
`
