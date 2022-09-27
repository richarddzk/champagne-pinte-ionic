import React from 'react'
import { LoginProps } from './interfaces'
import Login from './Login'
import FacebookProvider from './provider'

const FacebookLogin: React.FC<LoginProps> = (props) => (
  <FacebookProvider>
    <Login {...props} />
  </FacebookProvider>
)

export default FacebookLogin
