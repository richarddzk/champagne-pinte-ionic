import React, { useMemo } from 'react'
import { useDarkMode } from 'next-dark-mode'
import {
  createTheme,
  PaletteColorOptions,
  ThemeProvider,
  TypeBackground
} from '@mui/material/styles'
import { red, amber, blueGrey } from '@mui/material/colors'
import { createEmotionSsrAdvancedApproach } from 'tss-react/nextJs'

const { EmotionCacheProvider, withEmotionCache } = createEmotionSsrAdvancedApproach(
  { key: 'css' } /* Argument of createCache */
)
export { withEmotionCache }

export const theme = {
  primary: {
    main: '#CCBF90',
    amber: amber[200],
    blueGrey,
    dark: '#050203'
  },
  secondary: {
    main: '#010510',
    dark: '#050203'
  },
  error: {
    main: red.A400,
    dark: red[900]
  },
  button: {
    main: '#CCBF90',
    background: '#000'
  }
}

export interface AsgardThemeProviderProps {
  children: any
}

const AsgardThemeProvider: React.FC<AsgardThemeProviderProps> = ({ children }) => {
  const { darkModeActive } = useDarkMode()
  const myTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkModeActive ? 'dark' : 'light',
          ...theme,
          primary: {
            ...theme.primary,
            main: '#CCBF90',
            principal: !darkModeActive ? '#000' : '#fff'
          } as PaletteColorOptions,
          secondary: {
            ...theme.secondary,
            principal: !darkModeActive ? '#000' : '#fff'
          } as PaletteColorOptions,
          background: {
            default: darkModeActive ? '#010510' : '#f6f6f6',
            second: darkModeActive ? '#0e121c' : '#fff',
            light: '#f9f9f9',
            dark: '#0e0e0e'
          } as Partial<TypeBackground>
        },
        breakpoints: {
          values: {
            xs: 0,
            sm: 670,
            md: 900,
            md2: 800,
            lg: 1200,
            xls: 1595,
            xl: 1500,
            xxl: 1600
          } as any
        }
      }),
    [darkModeActive]
  )

  return (
    <EmotionCacheProvider>
      {' '}
      <ThemeProvider theme={myTheme}>{children}</ThemeProvider>
    </EmotionCacheProvider>
  )
}
export default AsgardThemeProvider
