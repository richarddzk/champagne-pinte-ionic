/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AddressCreateInput } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createAddress
// ====================================================

export interface createAddress_data_orders {
  __typename: "Order";
  id: string;
}

export interface createAddress_data_customer {
  __typename: "Customer";
  id: string;
}

export interface createAddress_data {
  __typename: "Address";
  address_1: string | null;
  address_2: string | null;
  city: string | null;
  country: string | null;
  createdAt: any;
  firstName: string | null;
  id: string;
  isDefault: boolean | null;
  lastName: string | null;
  phone: string | null;
  state: string | null;
  updatedAt: any;
  zip: string | null;
  orders: createAddress_data_orders[];
  customer: createAddress_data_customer | null;
}

export interface createAddress {
  data: createAddress_data;
}

export interface createAddressVariables {
  data: AddressCreateInput;
}
