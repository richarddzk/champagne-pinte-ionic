/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: googleAuthenticate
// ====================================================

export interface googleAuthenticate_googleAuthenticate_user {
  __typename: "User";
  id: string;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string;
  stripeCustomerId: string;
}

export interface googleAuthenticate_googleAuthenticate {
  __typename: "GoogleToken";
  /**
   * JWT access token
   */
  accessToken: any;
  /**
   * JWT refresh token
   */
  refreshToken: any;
  user: googleAuthenticate_googleAuthenticate_user;
}

export interface googleAuthenticate {
  googleAuthenticate: googleAuthenticate_googleAuthenticate;
}

export interface googleAuthenticateVariables {
  token: string;
}
