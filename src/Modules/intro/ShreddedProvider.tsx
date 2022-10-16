import React, { Suspense } from 'react'
import { SnackbarProvider } from 'notistack'
import dynamic from 'next/dynamic'

import AsgardThemeProvider from '@/Main/AsgardThemeProvider'

const SkeletonFallBack = dynamic(() => import('./SkeletonFallBack'), {
  loading: () => <>...</>
})
export interface ShreddedProviderProps {
  children: any
}

const ShreddedProvider: React.FC<ShreddedProviderProps> = ({ children }) => (
  <SnackbarProvider maxSnack={3}>
    <AsgardThemeProvider>
      <Suspense fallback={<SkeletonFallBack />}>{children}</Suspense>
    </AsgardThemeProvider>
  </SnackbarProvider>
)
export default ShreddedProvider
