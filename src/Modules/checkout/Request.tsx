import { gql } from '@apollo/client';

export const SHIPPING_METHODS = gql`
  query SHIPPINGS {
    shippings {
      name
      comments
      price
      createdAt
      id
      updatedAt
      discountTarget
      averageDuration
      counterpart
    }
  }
`;

export const CREATE_ORDER = gql`
  mutation createOrder($data: OrderCreateInput!) {
    data: createOrder(data: $data) {
      comments
      id
      address {
        id
      }
      customer {
        id
      }
      shipping {
        id
      }
    }
  }
`;
export const CREATE_LINE_ITEM = gql`
  mutation createLineItem($data: LineItemCreateInput!) {
    data: createLineItem(data: $data) {
      id
      price
      quantity
      order {
        id
      }
      product {
        id
      }
    }
  }
`;
