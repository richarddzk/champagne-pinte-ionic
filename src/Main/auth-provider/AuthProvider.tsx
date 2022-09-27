/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useContext, createContext, useState, useEffect, useCallback } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import GET_ACCOUNT_INFO from '@/Modules/account/request'
import { user, userVariables } from '@/Modules/account/__generated__/user'
import createJWTAuthorizationHeader from './Basic-auth'
import client, { httpLink } from '../../../lib/apollo-client'
import { LOGIN, REGISTER, GOOGLE_AUTH, REFRESH_TOKEN, FACEBOOK_AUTH } from './request'
import {
  USER_DATA_ITEM_CHAMPAGNE_PINTE,
  CredentialsRegister,
  CREDENTIALS_LOCAL_STORAGE_ITEM_CHAMPAGNE_PINTE,
  Credentials,
  GoogleCredentials,
  TData,
  ContextType,
  FacebookCredentials,
  FacebookUser,
  FacebookAuthResponse,
  FacebookAuth
} from './interfaces'

export const defaultContext = {} as ContextType
export const defaultAuth = {} as TData

export const AuthContext = createContext<ContextType>(defaultContext)

export const useAuth = () => useContext(AuthContext)

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<TData | undefined>()

  const [Lauchlogin] = useMutation(LOGIN)

  const [register] = useMutation(REGISTER)
  const [googleAuth] = useMutation(GOOGLE_AUTH)
  const [facebookAuth] = useMutation(FACEBOOK_AUTH)
  const [refreshToken] = useMutation(REFRESH_TOKEN)

  const {
    data: UserInfos,
    error,
    refetch,
    loading
  } = useQuery<user, userVariables>(GET_ACCOUNT_INFO, {
    skip: !auth || !auth.id,
    variables: {
      where: {
        id: auth?.id ?? ''
      }
    },
    fetchPolicy: 'network-only'
  })

  const checkRegistred = async (id: string) => {
    try {
      return await refetch({
        where: {
          id
        }
      })
    } catch (e: any) {
      return e
    }
  }

  const logout = () => {
    localStorage.removeItem(CREDENTIALS_LOCAL_STORAGE_ITEM_CHAMPAGNE_PINTE)
    localStorage.removeItem(USER_DATA_ITEM_CHAMPAGNE_PINTE)
    setAuth(defaultAuth)
    return Promise.resolve()
  }
  const authRefreshToken = async () => {
    await refreshToken({
      variables: {
        token: auth?.refreshToken
      }
    })
      .then((tokenData) => {
        const { data } = tokenData
        const { refreshToken: token } = data
        if (token && token.accessToken) {
          const newAuth = { ...auth, ...token }
          localStorage.setItem(
            CREDENTIALS_LOCAL_STORAGE_ITEM_CHAMPAGNE_PINTE,
            createJWTAuthorizationHeader(token.accessToken)
          )
          localStorage.setItem(USER_DATA_ITEM_CHAMPAGNE_PINTE, JSON.stringify(newAuth))
          const authLink = setContext((_, { headers }) => {
            // get the authentication token from local storage if it exists
            // const token = localStorage.getItem('token');

            const localtoken = `Bearer ${newAuth.accessToken}`
            // return the headers to the context so httpLink can read them
            return {
              headers: {
                ...headers,
                Authorization: localtoken || ''
              }
            }
          })
          client.setLink(authLink.concat(httpLink))
          setAuth(newAuth)

          return newAuth
        }
        return Promise.reject()
      })
      .catch((errors) => {
        if (errors) logout()
      })
  }

  useEffect(() => {
    if (auth && error) {
      if (auth.staylog) authRefreshToken()
      else logout()
    }
  }, [error])

  const ReLog = useCallback(async () => {
    const str = await localStorage.getItem(USER_DATA_ITEM_CHAMPAGNE_PINTE)
    if (str) {
      const token = localStorage.getItem(CREDENTIALS_LOCAL_STORAGE_ITEM_CHAMPAGNE_PINTE)
      const userData: TData = JSON.parse(str || '')
      const authLink = await setContext((_, { headers }) => ({
        headers: {
          ...headers,
          Authorization: token || ''
        }
      }))
      await client.setLink(authLink.concat(httpLink))
      userData && setAuth(userData)
    }
  }, [])
  useEffect(() => {
    ReLog()
  }, [ReLog])

  const Register = async (credentials: CredentialsRegister): Promise<{ firstName: string }> =>
    register({
      variables: {
        ...credentials
      }
    }).then((data) => {
      const { data: localData } = data
      const { signup } = localData

      if (signup && signup.accessToken) {
        const authLink = setContext((_, { headers }) => {
          // get the authentication token from local storage if it exists
          // const token = localStorage.getItem('token');

          const token = `Bearer ${signup.accessToken}`
          // return the headers to the context so httpLink can read them
          return {
            headers: {
              ...headers,
              Authorization: token || ''
            }
          }
        })
        client.setLink(authLink.concat(httpLink))
        localStorage.setItem(
          CREDENTIALS_LOCAL_STORAGE_ITEM_CHAMPAGNE_PINTE,
          createJWTAuthorizationHeader(signup.accessToken)
        )
        localStorage.setItem(USER_DATA_ITEM_CHAMPAGNE_PINTE, JSON.stringify({ ...signup }))
        setAuth(signup)
        return { ...signup }
      }
      return Promise.reject()
    })

  const login = async (credentials: Credentials, staylog: boolean) =>
    Lauchlogin({
      variables: {
        ...credentials
      }
    }).then((data) => {
      const { data: localData } = data
      const { login: _login } = localData

      if (_login && _login.accessToken) {
        localStorage.setItem(
          CREDENTIALS_LOCAL_STORAGE_ITEM_CHAMPAGNE_PINTE,
          createJWTAuthorizationHeader(_login.accessToken)
        )
        localStorage.setItem(USER_DATA_ITEM_CHAMPAGNE_PINTE, JSON.stringify({ ..._login, staylog }))
        const authLink = setContext((_, { headers }) => {
          // get the authentication token from local storage if it exists
          // const token = localStorage.getItem('token');

          const token = `Bearer ${_login.accessToken}`
          // return the headers to the context so httpLink can read them
          return {
            headers: {
              ...headers,
              Authorization: token || ''
            }
          }
        })
        client.setLink(authLink.concat(httpLink))
        setAuth({ ..._login, staylog })
        return { ..._login, staylog }
      }
      return Promise.reject()
    })

  const googleAuthentification = async (credentials: GoogleCredentials) =>
    googleAuth({
      variables: {
        ...credentials
      }
    }).then((data) => {
      const { data: localData } = data
      const { googleAuthenticate } = localData

      if (googleAuthenticate && googleAuthenticate.accessToken) {
        const { accessToken, refreshToken: __refreshToken, user: userGoogle } = googleAuthenticate
        setAuth({ accessToken, __refreshToken, ...userGoogle })
        const authLink = setContext((_, { headers }) => {
          // get the authentication token from local storage if it exists
          // const token = localStorage.getItem('token');

          const token = `Bearer ${accessToken}`
          // return the headers to the context so httpLink can read them
          return {
            headers: {
              ...headers,
              Authorization: token || ''
            }
          }
        })
        client.setLink(authLink.concat(httpLink))
        localStorage.setItem(
          CREDENTIALS_LOCAL_STORAGE_ITEM_CHAMPAGNE_PINTE,
          createJWTAuthorizationHeader(googleAuthenticate.accessToken)
        )
        localStorage.setItem(
          USER_DATA_ITEM_CHAMPAGNE_PINTE,
          JSON.stringify({ accessToken, __refreshToken, ...userGoogle })
        )
        return { accessToken, __refreshToken, ...userGoogle }
      }
      return Promise.reject()
    })

  const facebookRegistrationCheck = async (props: FacebookAuth) => {
    const credentials = { ...props }
    const { first_name, last_name, email, name, accessToken: token } = credentials
    if (credentials.accessToken) {
      facebookAuth({
        variables: {
          firstName: first_name,
          lastName: last_name,
          email,
          username: name,
          token
        }
      }).then((data) => {
        const { data: localData } = data
        const { facebookAuthenticate: authenticate } = localData

        if (authenticate && authenticate.accessToken) {
          const { accessToken, user: userFacebook } = authenticate
          setAuth({ accessToken, ...userFacebook })
          const authLink = setContext((_, { headers }) => {
            // get the authentication token from local storage if it exists
            // const token = localStorage.getItem('token');

            const tokenB = `Bearer ${accessToken}`
            // return the headers to the context so httpLink can read them
            return {
              headers: {
                ...headers,
                Authorization: tokenB || ''
              }
            }
          })
          client.setLink(authLink.concat(httpLink))
          localStorage.setItem(
            CREDENTIALS_LOCAL_STORAGE_ITEM_CHAMPAGNE_PINTE,
            createJWTAuthorizationHeader(authenticate.accessToken)
          )
          localStorage.setItem(
            USER_DATA_ITEM_CHAMPAGNE_PINTE,
            JSON.stringify({ accessToken, ...userFacebook })
          )
          return { accessToken, ...userFacebook }
        }
        return Promise.reject()
      })
    }
    return credentials
  }

  const userInfo = async (authResponse: FacebookAuthResponse) =>
    new Promise(() => {
      authResponse &&
        // @ts-ignore
        window.FB?.api(
          '/me',
          'GET',
          {
            token: authResponse.accessToken,
            fields: 'id,name,last_name,first_name,email'
          },
          (response: FacebookUser) =>
            facebookRegistrationCheck({
              ...authResponse,
              ...response
            })
        )
    })

  const facebookAuthentification = async (credentials: FacebookCredentials) =>
    userInfo(credentials.authResponse)

  const checkError = ({ status }: any) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem(CREDENTIALS_LOCAL_STORAGE_ITEM_CHAMPAGNE_PINTE)
      return Promise.reject()
    }
    return Promise.resolve()
  }
  const checkAuth = () =>
    localStorage.getItem(CREDENTIALS_LOCAL_STORAGE_ITEM_CHAMPAGNE_PINTE)
      ? Promise.resolve()
      : Promise.reject()
  const getPermissions = () => Promise.reject(new Error('Unknown method'))
  const getIdentity = () => {
    const str = localStorage.getItem(USER_DATA_ITEM_CHAMPAGNE_PINTE)
    const userData: TData = JSON.parse(str || '')

    return Promise.resolve({
      ...userData,
      avatar: undefined
    })
  }
  // todo corriger ce any
  const ctx = {
    auth,
    login,
    Register,
    logout,
    checkAuth,
    checkError,
    getPermissions,
    getIdentity,
    googleAuthentification,
    facebookAuthentification,
    ReLog,
    checkRegistred,
    UserInfos: (UserInfos && UserInfos.data) as any,
    refetch,
    loading
  }
  return <AuthContext.Provider value={ctx as any}>{children}</AuthContext.Provider>
}
export default AuthProvider
