/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SHIPPINGS
// ====================================================

export interface SHIPPINGS_shippings {
  __typename: "Shipping";
  name: string | null;
  comments: string | null;
  price: number | null;
  createdAt: any;
  id: string;
  updatedAt: any;
  discountTarget: number | null;
  averageDuration: string | null;
  counterpart: string | null;
}

export interface SHIPPINGS {
  shippings: SHIPPINGS_shippings[];
}
