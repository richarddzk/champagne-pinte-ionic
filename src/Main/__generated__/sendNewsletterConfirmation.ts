/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: sendNewsletterConfirmation
// ====================================================

export interface sendNewsletterConfirmation_sendNewsletterConfirmation {
  __typename: "Result";
  accepted: string[] | null;
  rejected: string[] | null;
  response: string | null;
}

export interface sendNewsletterConfirmation {
  sendNewsletterConfirmation: sendNewsletterConfirmation_sendNewsletterConfirmation;
}

export interface sendNewsletterConfirmationVariables {
  email: string;
}
