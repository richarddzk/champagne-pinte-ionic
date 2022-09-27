/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserWhereUniqueInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: user
// ====================================================

export interface user_data_customers_addresses {
  __typename: "Address";
  id: string;
  address_1: string | null;
  address_2: string | null;
  city: string | null;
  country: string | null;
  createdAt: any;
  firstName: string | null;
  isDefault: boolean | null;
  lastName: string | null;
  phone: string | null;
  zip: string | null;
  state: string | null;
}

export interface user_data_customers_orders_lineItems_product_images {
  __typename: "Image";
  src: string | null;
  title: string | null;
}

export interface user_data_customers_orders_lineItems_product {
  __typename: "Product";
  price: string | null;
  title: string | null;
  description: string | null;
  images: user_data_customers_orders_lineItems_product_images[];
}

export interface user_data_customers_orders_lineItems {
  __typename: "LineItem";
  price: number | null;
  quantity: number | null;
  product: user_data_customers_orders_lineItems_product | null;
}

export interface user_data_customers_orders_address {
  __typename: "Address";
  id: string;
  address_1: string | null;
  address_2: string | null;
  city: string | null;
  country: string | null;
  createdAt: any;
  firstName: string | null;
  isDefault: boolean | null;
  lastName: string | null;
  phone: string | null;
  zip: string | null;
  state: string | null;
}

export interface user_data_customers_orders_facturation {
  __typename: "Address";
  id: string;
  address_1: string | null;
  address_2: string | null;
  city: string | null;
  country: string | null;
  createdAt: any;
  firstName: string | null;
  isDefault: boolean | null;
  lastName: string | null;
  phone: string | null;
  zip: string | null;
  state: string | null;
}

export interface user_data_customers_orders {
  __typename: "Order";
  createdAt: any;
  comments: string | null;
  id: string;
  totalPrice: string | null;
  lineItems: user_data_customers_orders_lineItems[];
  address: user_data_customers_orders_address | null;
  facturation: user_data_customers_orders_facturation | null;
}

export interface user_data_customers {
  __typename: "Customer";
  id: string;
  comments: string | null;
  phone: string | null;
  panier: string | null;
  addresses: user_data_customers_addresses[];
  orders: user_data_customers_orders[];
}

export interface user_data {
  __typename: "User";
  createdAt: any;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: string[];
  updatedAt: any;
  username: string;
  email: string;
  stripeCustomerId: string;
  customers: user_data_customers[];
}

export interface user {
  data: user_data | null;
}

export interface userVariables {
  where: UserWhereUniqueInput;
}
