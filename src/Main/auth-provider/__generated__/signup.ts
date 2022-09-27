/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signup
// ====================================================

export interface signup_signup {
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

export interface signup {
  signup: signup_signup;
}

export interface signupVariables {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
}
