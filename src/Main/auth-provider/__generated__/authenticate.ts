/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: authenticate
// ====================================================

export interface authenticate_authenticate_user {
  __typename: "User";
  id: string;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string;
  stripeCustomerId: string;
}

export interface authenticate_authenticate {
  __typename: "GoogleToken";
  /**
   * JWT access token
   */
  accessToken: any;
  /**
   * JWT refresh token
   */
  refreshToken: any;
  user: authenticate_authenticate_user;
}

export interface authenticate {
  authenticate: authenticate_authenticate;
}

export interface authenticateVariables {
  token: string;
}
