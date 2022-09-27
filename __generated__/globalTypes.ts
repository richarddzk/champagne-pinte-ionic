/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum QueryMode {
  Default = "Default",
  Insensitive = "Insensitive",
}

export interface AddressCreateInput {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  country?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  firstName?: string | null;
  isDefault?: boolean | null;
  lastName?: string | null;
  phone?: string | null;
  state?: string | null;
  zip?: string | null;
}

export interface AddressUpdateInput {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  country?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  firstName?: string | null;
  isDefault?: boolean | null;
  lastName?: string | null;
  phone?: string | null;
  state?: string | null;
  zip?: string | null;
}

export interface AddressWhereInput {
  address_1?: StringNullableFilter | null;
  address_2?: StringNullableFilter | null;
  city?: StringNullableFilter | null;
  country?: StringNullableFilter | null;
  customer?: CustomerWhereUniqueInput | null;
  firstName?: StringNullableFilter | null;
  id?: StringFilter | null;
  isDefault?: BooleanNullableFilter | null;
  lastName?: StringNullableFilter | null;
  phone?: StringNullableFilter | null;
  state?: StringNullableFilter | null;
  zip?: StringNullableFilter | null;
}

export interface AddressWhereUniqueInput {
  id: string;
}

export interface BooleanNullableFilter {
  equals?: boolean | null;
  not?: boolean | null;
}

export interface CustomerUpdateInput {
  comments?: string | null;
  panier?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  user?: UserWhereUniqueInput | null;
}

export interface CustomerWhereUniqueInput {
  id: string;
}

export interface LineItemCreateInput {
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
}

export interface OrderCreateInput {
  address?: AddressWhereUniqueInput | null;
  facturation?: AddressWhereUniqueInput | null;
  comments?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  shipping?: ShippingWhereUniqueInput | null;
  totalPrice?: string | null;
}

export interface OrderWhereUniqueInput {
  id: string;
}

export interface ProductWhereUniqueInput {
  id: string;
}

export interface ShippingWhereUniqueInput {
  id: string;
}

export interface StringFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string | null;
  lte?: string | null;
  gt?: string | null;
  gte?: string | null;
  contains?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  mode?: QueryMode | null;
  not?: string | null;
}

export interface StringNullableFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string | null;
  lte?: string | null;
  gt?: string | null;
  gte?: string | null;
  contains?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  mode?: QueryMode | null;
  not?: string | null;
}

export interface UserUpdateInput {
  firstName?: string | null;
  lastName?: string | null;
  password?: string | null;
  roles?: string[] | null;
  username?: string | null;
  email?: string | null;
  stripeCustomerId?: string | null;
}

export interface UserWhereUniqueInput {
  id: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
