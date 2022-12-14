/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: login
// ====================================================

export interface login_login {
  __typename: "Auth";
  /**
   * JWT access token
   */
  accessToken: any;
  /**
   * JWT refresh token
   */
  refreshToken: any;
  id: string | null;
  firstName: string | null;
  lastName: string | null;
  username: string | null;
  email: string | null;
  stripeCustomerId: string | null;
}

export interface login {
  login: login_login;
}

export interface loginVariables {
  username: string;
  password: string;
}
