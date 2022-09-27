import { gql } from '@apollo/client'

const CONFIRM_EMAIL = gql`
mutation confirmEmail($token: String!) {
  confirmEmail(ConfirmEmailDto: { token: $token }) 
  }
`
export const RESEND_EMAIL = gql`
mutation resendEmail($email: String!) {
  resendEmail(EmailDto: { email: $email }) 
  }
`

export default CONFIRM_EMAIL
