import { user_data, userVariables } from '@/Modules/account/__generated__/user'
import { ApolloQueryResult } from '@apollo/client'

export type Credentials = {
  username: string
  password: string
}

export type GoogleCredentials = {
  token: string
}

export type CredentialsRegister = {
  email: string
  username: string
  password: string
  firstName: string
  lastName: string
}
export type FacebookCredentials = {
  authResponse: FacebookAuthResponse
}
export type FacebookAuthResponse = {
  accessToken: string
  data_access_expiration_time: number
  expiresIn: number
  grantedScopes: string
  graphDomain: string
  signedRequest: string
  userID: string
}
export type FacebookUser = {
  email: string
  first_name: string
  id: string
  last_name: string
  name: string
}
export type FacebookAuth = FacebookUser & FacebookAuthResponse

export type TData = {
  staylog?: boolean
  accessToken: string
  refreshToken?: string
  id: string
  firstName?: string
  lastName?: string
  username?: string
  name?: string
  email?: string
  stripeCustomerId?: string

}

export interface ContextType {
  auth: TData | undefined
  login: (credentials: Credentials, staylog: boolean) => Promise<any>
  logout: () => Promise<void>
  checkAuth: () => Promise<void>
  checkError: ({ status }: any) => Promise<void>
  getPermissions: () => Promise<never>
  getIdentity: () => Promise<{
    id: string
    avatar: any
  }>
  Register: (credentials: CredentialsRegister) => Promise<{
    firstName: string
  }>
  googleAuthentification: (credentials: GoogleCredentials) => Promise<void>
  facebookAuthentification: (credentials: FacebookCredentials) => any
  ReLog: () => Promise<void>
  checkRegistred: (id: string) => Promise<any>
  UserInfos: user_data
  refetch: (variables?: Partial<userVariables> | undefined) => Promise<ApolloQueryResult<user_data>>
  loading: boolean
}

export const CREDENTIALS_LOCAL_STORAGE_ITEM_CHAMPAGNE_PINTE =
  'CREDENTIALS_LOCAL_STORAGE_ITEM_CHAMPAGNE_PINTE'
export const USER_DATA_ITEM_CHAMPAGNE_PINTE = 'USER_DATA_ITEM_CHAMPAGNE_PINTE'
