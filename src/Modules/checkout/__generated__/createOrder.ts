/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OrderCreateInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createOrder
// ====================================================

export interface createOrder_data_address {
  __typename: "Address";
  id: string;
}

export interface createOrder_data_customer {
  __typename: "Customer";
  id: string;
}

export interface createOrder_data_shipping {
  __typename: "Customer";
  id: string;
}

export interface createOrder_data {
  __typename: "Order";
  comments: string | null;
  id: string;
  address: createOrder_data_address | null;
  customer: createOrder_data_customer | null;
  shipping: createOrder_data_shipping | null;
}

export interface createOrder {
  data: createOrder_data;
}

export interface createOrderVariables {
  data: OrderCreateInput;
}
