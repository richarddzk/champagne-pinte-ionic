import React from 'react'
import { Grid, Button, AppBar } from '@mui/material'
import Image from '@/Utils/MidgardImage'
import dynamic from 'next/dynamic'
import { GlobalStyles } from 'tss-react'
import Slide from '@mui/material/Slide'
import { useRouter } from 'next/router'
import BeginReturn from '@/Main/BeginReturn'
import { useDarkMode } from 'next-dark-mode'
import { useCycle } from 'framer-motion'
import useScreen from '@/Utils/hooks/useScreen'
import useStyles from './style'
import mainLogoW from '../../../public/image/logo/MainLogoChampWhite.webp'
import mainLogoB from '../../../public/image/logo/MainLogoChampBlack.webp'
import ScrollProvider from '../Providers/ScrollProvider'
import MenuDrawer from './MenuDrawer'
import MenuList from './MenuList'
import AccountMenuMob from './AccountMenuMob'
import AccountMenuDesk from './AccountMenuDesk'

const MenuIcon = dynamic(() => import('@/Utils/BButton'), {
  loading: () => <>...</>
})

export interface MenuProps {
  fixed?: boolean
}

const Menu: React.FC<MenuProps> = (props) => {
  // const theme = useTheme()

  const router = useRouter()
  const { darkModeActive } = useDarkMode()

  const { isTablette } = useScreen()

  const { classes, css } = useStyles()

  const [open, cycleOpen] = useCycle(false, true)

  const handleDrawer: any = () => {
    cycleOpen()
  }
  const { fixed } = props

  const menuButtonStyle = {
    cursor: 'pointer',
    verticalAlign: 'middle'
  }

  const direction = !isTablette ? 'down' : 'up'

  const lock = fixed || isTablette

  return (
    <>
      <GlobalStyles
        styles={{
          '.SnackbarItem-message': {
            color: '#bd9f57'
          },
          '& .SnackbarItem-variantInfo': {
            backgroundColor: darkModeActive ? '#12121291!important' : '#ffffffd9 !important'
          },
          '& .SnackbarItem-variantSuccess': {
            backgroundColor: !darkModeActive ? '#c2ffb3 !important' : '#268d0d !important'
          },
          '& .SnackbarItem-variantError': {
            backgroundColor: !darkModeActive ? '#ffc6c6 !important' : '#930f0f !important'
          },
          '& .SnackbarItem-variantWarning': {
            backgroundColor: !darkModeActive ? '#fbf8d0 !important' : '#fff144 !important'
          },
          '*': {
            scrollbarWidth: 'thin',
            scrollbarColor: '#CCBF90 white'
          },

          /* Works on Chrome, Edge, and Safari */
          '*::-webkit-scrollbar': {
            width: '10px'
          },

          '*::-webkit-scrollbar-track': {
            opacity: 0.75,
            background: !darkModeActive ? '#fff' : '#233132'
          },

          '*::-webkit-scrollbar-thumb': {
            opacity: 0.75,
            backgroundColor: '#CCBF90',
            borderRadius: '20px',
            border: '3px solid ',
            borderColor: !darkModeActive ? '#fff' : '#233132'
          },
          '.btn-container': {
            position: 'fixed'
          },

          '.container a': {
            color: '#bd9f57',
            textDecoration: 'none',
            fontSize: '1.75rem',
            fontWeight: 600,
            display: 'block',
            marginTop: 20,
            marginBottom: 20,
            width: 'calc(100%-20 )'
          }
        }}
      />
      <ScrollProvider>
        {(checked: boolean, scrollY: number) => (
          <>
            <Slide
              direction={direction}
              in={lock ? true : checked}
              timeout={{ enter: 500, exit: 250 }}
              mountOnEnter
              unmountOnExit
            >
              <AppBar className={classes.appBar} position="fixed">
                {isTablette ? (
                  <Grid
                    direction="row"
                    container
                    justifyContent="space-around"
                    className={classes.gridApp}
                  >
                    <Grid className={classes.gridButton} item xs={2}>
                      <Grid
                        onClick={() => handleDrawer()}
                        style={{
                          display: 'inline-block',
                          position: 'relative',
                          background: 'none',
                          border: 'none'
                        }}
                      >
                        <MenuIcon
                          isOpen={open}
                          strokeWidth="2"
                          color="#CCBF90"
                          transition={{ ease: 'easeOut', duration: 0.8 }}
                          width={22}
                          height={12}
                          style={menuButtonStyle}
                        />
                      </Grid>
                    </Grid>
                    <Grid className={classes.gridTitle} item>
                      <Button
                        onClick={() => {
                          router.push(' /')
                        }}
                        className={css({
                          padding: 4,
                          ':hover': {
                            // backgroundColor: darkModeActive ? 'black' : 'white',
                            boxShadow:
                              '-10px -10px 15px rgba(255, 255, 255, 0.5),10px 10px 15px rgba(70, 70, 70, 0.12);'
                          }
                        })}
                      >
                        <Image
                          priority
                          className={classes.homeLogo}
                          alt="mainLogoB"
                          width={85.5}
                          height={60.75}
                          src={!darkModeActive ? mainLogoB : mainLogoW}
                        />
                      </Button>
                    </Grid>

                    <AccountMenuMob />
                  </Grid>
                ) : (
                  <Grid
                    style={{
                      placeContent: 'center',
                    }}
                    direction="row"
                    container
                  >
                    <Grid item>
                      <MenuList />
                    </Grid>
                    <Grid item>
                      <AccountMenuDesk />
                    </Grid>
                  </Grid>
                )}
              </AppBar>
            </Slide>
            {scrollY >= 1000 && !isTablette && <BeginReturn />}
          </>
        )}
      </ScrollProvider>
      <MenuDrawer open={open} cycleOpen={cycleOpen} />
    </>
  )
}

export default Menu
