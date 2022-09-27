/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LineItemCreateInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createLineItem
// ====================================================

export interface createLineItem_data_order {
  __typename: "Order";
  id: string;
}

export interface createLineItem_data_product {
  __typename: "Product";
  id: string;
}

export interface createLineItem_data {
  __typename: "LineItem";
  id: string;
  price: number | null;
  quantity: number | null;
  order: createLineItem_data_order | null;
  product: createLineItem_data_product | null;
}

export interface createLineItem {
  data: createLineItem_data;
}

export interface createLineItemVariables {
  data: LineItemCreateInput;
}
