/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AddressWhereUniqueInput, AddressUpdateInput } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: updateAddress
// ====================================================

export interface updateAddress_data_customer {
  __typename: "Customer";
  id: string;
}

export interface updateAddress_data {
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
  customer: updateAddress_data_customer | null;
}

export interface updateAddress {
  data: updateAddress_data;
}

export interface updateAddressVariables {
  where: AddressWhereUniqueInput;
  data: AddressUpdateInput;
}
