/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AddressWhereInput } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: AllAdresses
// ====================================================

export interface AllAdresses_addresses_customer {
  __typename: "Customer";
  id: string;
}

export interface AllAdresses_addresses {
  __typename: "Address";
  id: string;
  address_1: string | null;
  address_2: string | null;
  city: string | null;
  country: string | null;
  firstName: string | null;
  lastName: string | null;
  state: string | null;
  zip: string | null;
  customer: AllAdresses_addresses_customer | null;
}

export interface AllAdresses {
  addresses: AllAdresses_addresses[];
}

export interface AllAdressesVariables {
  where?: AddressWhereInput | null;
}
