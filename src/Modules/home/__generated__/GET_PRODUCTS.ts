/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PRODUCTS
// ====================================================

export interface GET_PRODUCTS_products_images {
  __typename: "Image";
  id: string;
  src: string | null;
  updatedAt: any;
  title: string | null;
}

export interface GET_PRODUCTS_products {
  __typename: "Product";
  id: string;
  price: string | null;
  updatedAt: any;
  title: string | null;
  images: GET_PRODUCTS_products_images[];
}

export interface GET_PRODUCTS {
  products: GET_PRODUCTS_products[];
}
