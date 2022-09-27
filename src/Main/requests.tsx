import { gql } from '@apollo/client'

const SEND_NEWSLETTER_CONFIRMATION = gql`
  mutation sendNewsletterConfirmation($email: String!) {
    sendNewsletterConfirmation(EmailDto: { email: $email }) {
      accepted
      rejected
      response
    }
  }
`
export default SEND_NEWSLETTER_CONFIRMATION
