/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: facebookAuthenticate
// ====================================================

export interface facebookAuthenticate_facebookAuthenticate_user {
  __typename: "User";
  id: string;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string;
  stripeCustomerId: string;
}

export interface facebookAuthenticate_facebookAuthenticate {
  __typename: "FacebookToken";
  /**
   * JWT access token
   */
  accessToken: any;
  user: facebookAuthenticate_facebookAuthenticate_user;
}

export interface facebookAuthenticate {
  facebookAuthenticate: facebookAuthenticate_facebookAuthenticate;
}

export interface facebookAuthenticateVariables {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  token: string;
}
