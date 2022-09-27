import React, { createContext, useContext } from 'react'
import { BehaviorSubject } from 'rxjs'
import { useAuth } from '@/Main/auth-provider/AuthProvider'
import { FacebookContextType, DefaultFacebookContext } from '../interfaces'

const accountSubject = new BehaviorSubject(null)
export const FacebookContext = createContext<FacebookContextType>(
  DefaultFacebookContext
)

export const useFacebook = () => useContext(FacebookContext)

// ******************************************************************************
// *                                                                            *
// *                                                                            *
// *                    Provider authentification facebook                      *
// *                                                                            *
// *                                                                            *
// ******************************************************************************
/**
 * @param {children} children
 * @returns {Promise<void>} Render Props
 * @memberof FacebookProvider
 * @author Richard Duzanski
 * @description Provider authentification facebook
 * @todo Pass FB global object into state and context
 * */
const FacebookProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { facebookAuthentification } = useAuth()

  // login with facebook then authenticate with the API to get a JWT auth token
  const login = async () =>
    new Promise(() => {
      // @ts-ignore
      window.FB?.login((response: any) => facebookAuthentification(response), {
        scope: 'email,public_profile',
        return_scopes: true,
      })
    })

  const logout = () => {
    // @ts-ignore
    window.FB.api('/me/permissions', 'delete', null, () => window.FB.logout())
    accountSubject.next(null)
  }

  const accountService = {
    login,
    logout,
    account: accountSubject.asObservable(),
    get accountValue() {
      return accountSubject.value
    },
  }

  return (
    <FacebookContext.Provider value={accountService}>
      {children}
    </FacebookContext.Provider>
  )
}

export default FacebookProvider
