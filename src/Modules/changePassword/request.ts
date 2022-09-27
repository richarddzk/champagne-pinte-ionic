import { gql } from '@apollo/client'

const SEND_PASSWORD_LINK = gql`
  mutation sendPasswordLink($email: String!) {
    sendPasswordLink(EmailDto: { email: $email }){
      accepted
      rejected
      response
    }
  }
`
const CHANGE_PASSWORD = gql`
  mutation changePassword($id: String!,$password: String! ) {
    changePassword(ChangePasswordInput: { id: $id, password: $password  })
  }
`

export { CHANGE_PASSWORD }
export default SEND_PASSWORD_LINK
