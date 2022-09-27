/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PRODUCT
// ====================================================

export interface GET_PRODUCT_product_images {
  __typename: "Image";
  id: string;
  src: string | null;
  updatedAt: any;
  title: string | null;
}

export interface GET_PRODUCT_product {
  __typename: "Product";
  price: string | null;
  id: string;
  description: string | null;
  updatedAt: any;
  title: string | null;
  images: GET_PRODUCT_product_images[];
}

export interface GET_PRODUCT {
  product: GET_PRODUCT_product | null;
}

export interface GET_PRODUCTVariables {
  id: string;
}
