/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: sendPasswordLink
// ====================================================

export interface sendPasswordLink_sendPasswordLink {
  __typename: "Result";
  accepted: string[] | null;
  rejected: string[] | null;
  response: string | null;
}

export interface sendPasswordLink {
  sendPasswordLink: sendPasswordLink_sendPasswordLink;
}

export interface sendPasswordLinkVariables {
  email: string;
}
