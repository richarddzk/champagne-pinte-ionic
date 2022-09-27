/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CustomerWhereUniqueInput, CustomerUpdateInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: updateCustomer
// ====================================================

export interface updateCustomer_data_addresses {
  __typename: "Address";
  id: string;
}

export interface updateCustomer_data_orders {
  __typename: "Order";
  id: string;
}

export interface updateCustomer_data_user {
  __typename: "User";
  id: string;
}

export interface updateCustomer_data {
  __typename: "Customer";
  comments: string | null;
  panier: string | null;
  createdAt: any;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  updatedAt: any;
  addresses: updateCustomer_data_addresses[];
  orders: updateCustomer_data_orders[];
  user: updateCustomer_data_user | null;
}

export interface updateCustomer {
  data: updateCustomer_data;
}

export interface updateCustomerVariables {
  where: CustomerWhereUniqueInput;
  data: CustomerUpdateInput;
}
