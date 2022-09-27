/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserWhereUniqueInput, UserUpdateInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: updateUser
// ====================================================

export interface updateUser_data_customers {
  __typename: "Customer";
  id: string;
}

export interface updateUser_data {
  __typename: "User";
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string;
  customers: updateUser_data_customers[];
}

export interface updateUser {
  data: updateUser_data;
}

export interface updateUserVariables {
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
}
