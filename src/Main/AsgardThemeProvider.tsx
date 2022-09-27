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
    blueGrey
  },
  secondary: {
    main: '#19857b',
    dark: '#fff'
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
            principal: darkModeActive ? '#000' : '#fff'
          } as PaletteColorOptions,
          secondary: {
            ...theme.secondary,
            main: darkModeActive ? '#000' : '#fff'
          } as PaletteColorOptions,
          background: {
            default: darkModeActive ? '#121212' : '#fff',
            second: darkModeActive ? '#233132' : '#d9eff1'
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
