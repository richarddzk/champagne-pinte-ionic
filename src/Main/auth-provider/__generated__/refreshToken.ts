/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: refreshToken
// ====================================================

export interface refreshToken_refreshToken {
  __typename: "Token";
  /**
   * JWT access token
   */
  accessToken: any;
  /**
   * JWT refresh token
   */
  refreshToken: any;
}

export interface refreshToken {
  refreshToken: refreshToken_refreshToken;
}

export interface refreshTokenVariables {
  token: string;
}
