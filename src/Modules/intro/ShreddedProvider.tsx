import React, { Suspense } from 'react'
import { SnackbarProvider } from 'notistack'
import dynamic from 'next/dynamic'

import AsgardThemeProvider from '@/Main/AsgardThemeProvider'
import I18n from '@/../lib/i18n'

const SkeletonFallBack = dynamic(() => import('./SkeletonFallBack'), {
  loading: () => <>...</>
})
export interface ShreddedProviderProps {
  children: any
}

const ShreddedProvider: React.FC<ShreddedProviderProps> = ({ children }) => (
  <SnackbarProvider maxSnack={3}>
    <AsgardThemeProvider>
      <I18n lngDict="fr" locale="fr">
        <Suspense fallback={<SkeletonFallBack />}>{children}</Suspense>
      </I18n>
    </AsgardThemeProvider>
  </SnackbarProvider>
)
export default ShreddedProvider
