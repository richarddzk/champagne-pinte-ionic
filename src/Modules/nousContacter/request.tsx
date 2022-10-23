import { gql } from '@apollo/client'

const SEND_CONTACT = gql`
  mutation sendContactEmail($data: ContactInput!) {
    sendContactEmail(data: $data)
  }
`
export default SEND_CONTACT
