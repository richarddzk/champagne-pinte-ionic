import { gql } from '@apollo/client';

export interface ProductProps {
  id: string
}

export const GET_PRODUCT = gql`
  query GET_PRODUCT($id: String!) {
    product(where: { id: $id }) {
      price
      id
      description
      updatedAt
      title
      images {
        id
        src
        updatedAt
        title
      }
    }
  }
`;
