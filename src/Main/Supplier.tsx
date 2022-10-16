import React, { Suspense } from 'react'
import { ApolloProvider } from '@apollo/client'
import { SnackbarProvider } from 'notistack'
import client from '@/../lib/apollo-client'
import dynamic from 'next/dynamic'
import AuthProvider from './auth-provider/AuthProvider'
import CartProvider from './Providers'
import AsgardThemeProvider from './AsgardThemeProvider'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})

const Supplier: React.FC = (props: any) => {
  const { children } = props

  return (
    <ApolloProvider client={client}>
      <SnackbarProvider maxSnack={3}>
        <AuthProvider>
          <AsgardThemeProvider>
            <CartProvider>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </CartProvider>
          </AsgardThemeProvider>{' '}
        </AuthProvider>
      </SnackbarProvider>
    </ApolloProvider>
  )
}

export default Supplier
