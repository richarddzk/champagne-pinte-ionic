import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Grid, Drawer, Button, AppBar } from '@mui/material'
import Image from 'next/future/image'
import { AnimatePresence, motion, useCycle } from 'framer-motion'
import dynamic from 'next/dynamic'
import { GlobalStyles } from 'tss-react'
import { useMedia, usePrevious } from 'react-use'
import Slide from '@mui/material/Slide'
import { v4 as uuid } from 'uuid'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import BeginReturn from '@/Main/BeginReturn'
import { useDarkMode } from 'next-dark-mode'
import UseAnimations from 'react-useanimations'
import AccountMenu from './AccountMenu'
import EN from '../../../public/locales/en/common.json'
import FR from '../../../public/locales/fr/common.json'
import useI18n from '../../Utils/hooks/use-i18n'
import useStyles from './style'
import logo2 from '../../../public/img/logo/pintechamplisse2Or.webp'
import mainLogoW from '../../../public/img/logo/MainLogoChampWhite.webp'
import mainLogoB from '../../../public/img/logo/MainLogoChampBlack.webp'
import actionSnack, { PageMap, MediaMap } from './interfaces'

const MenuIcon = dynamic(() => import('@/Utils/BButton'), {
  loading: () => <>...</>
})
const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
}

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
}

interface ScrollProviderProps {
  children: any
}
const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0)

  const previousY = usePrevious(scrollY) ?? 0
  const [checked, setChecked] = React.useState(true)

  useLayoutEffect(() => {
    // const topPos = (element) => element.getBoundingClientRect().top
    // const div1Pos = topPos(ourRef.current)
    const updateScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', updateScroll)
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  const scrolled = scrollY === 0

  useEffect(() => {
    if (scrolled || previousY > scrollY) {
      setChecked(true)
    } else {
      setChecked(false)
    }
  }, [scrollY])

  return children && children(checked)
}
export interface MenuProps {
  fixed?: boolean
}

const Menu: React.FC<MenuProps> = (props) => {
  // const theme = useTheme()
  const i18n = useI18n()
  const { t, activeLocale } = i18n
  const router = useRouter()
  const defaultLang = router.locale === 'default'
  const { darkModeActive } = useDarkMode()

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const comingSoon = () =>
    enqueueSnackbar('    Coming soon...!', {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      variant: 'info',
      action: (key) => actionSnack(key, closeSnackbar)
    })
  useEffect(() => {
    if (defaultLang) i18n.locale('fr', FR)
  }, [defaultLang])

  useEffect(() => {
    if (!defaultLang) {
      i18n.locale(router.locale, router.locale === 'fr' ? FR : EN)
    }
  }, [router.locale])

  const { classes, css } = useStyles()

  const [open, cycleOpen] = useCycle(false, true)

  const handleDrawer: any = () => {
    cycleOpen()
  }
  // const state = useMediaDevices()
  const isWide = useMedia('(min-width: 501px)', true)
  const isTiny = useMedia('(min-width: 350px)', false)
  const { fixed } = props

  const menuButtonStyle = {
    cursor: 'pointer',
    verticalAlign: 'middle'
  }

  const menuButtonDrawerStyle = {
    marginRight: 20,
    cursor: 'pointer'
  }
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
            marginLeft: 20
          },
          '*': {
            scrollbarWidth: 'thin',
            scrollbarColor: '#CCBF90 white'
          },

          /* Works on Chrome, Edge, and Safari */
          '*::-webkit-scrollbar': {
            width: '12px'
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
          }
        }}
      />
      <ScrollProvider>
        {(checked: boolean) => (
          <>
            <Slide
              direction={isWide ? 'down' : 'up'}
              in={fixed ? true : checked}
              timeout={{ enter: 500, exit: 250 }}
              mountOnEnter
              unmountOnExit
            >
              <AppBar className={classes.appBar} position="fixed">
                <Grid
                  direction="row"
                  container
                  justifyContent="space-between"
                  className={classes.gridApp}
                >
                  <Grid className={classes.gridButton} item>
                    {/* <TouchRipple> */}
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
                      <Button className={classes.menuButton} size="small" disableRipple>
                        {isTiny && 'Menu'}
                      </Button>
                    </Grid>
                    {/* </TouchRipple> */}
                  </Grid>
                  <Grid className={classes.gridTitle} item>
                    <Button
                      onClick={() => {
                        router.push(`/${activeLocale ?? 'fr'}/`)
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
                  <Grid className={classes.accountAppBar} item>
                    <AccountMenu />
                  </Grid>
                </Grid>
              </AppBar>
            </Slide>
            {!checked && <BeginReturn />}
          </>
        )}
      </ScrollProvider>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
        transitionDuration={{ enter: 1000, exit: 2500 }}
      >
        <div className={classes.drawerHeader}>
          <MenuIcon
            isOpen={open}
            onClick={() => handleDrawer()}
            strokeWidth="2"
            color="#CCBF90"
            transition={{ ease: 'easeOut', duration: 0.8 }}
            width={22}
            height={12}
            style={menuButtonDrawerStyle}
          />
        </div>
        <AnimatePresence>
          {open && (
            <motion.aside
              initial={{ width: 0 }}
              animate={{
                width: '100%'
              }}
              exit={{
                width: 0,
                transition: { delay: 4, duration: 1.5 }
              }}
            >
              <motion.div
                className="container"
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                {PageMap(classes).map(({ name, page, icon, animated }: any) => (
                  <motion.a
                    key={uuid()}
                    onClick={() => {
                      router.push(`/${activeLocale}${page}`)
                    }}
                    whileHover={{ scale: 1.05 }}
                    variants={itemVariants}
                  >
                    <Grid
                      className={classes.gridItemsMenu}
                      key={uuid()}
                      container
                      direction="row"
                      columnSpacing={1}
                    >
                      <Grid key={uuid()} item>
                        {animated ? (
                          <UseAnimations
                            key={uuid()}
                            strokeColor="#CCBF90"
                            size={40}
                            animation={icon as any}
                          />
                        ) : (
                          icon
                        )}
                      </Grid>
                      <Grid className={classes.gridItemMenu} item>
                        {t(`${name}`)}
                      </Grid>
                    </Grid>
                  </motion.a>
                ))}
                <Grid container direction="column">
                  <motion.a variants={itemVariants}>
                    <Grid item className={classes.gridItemsLogo}>
                      <Image alt="logo2" id="shiny" width={150} height={80} src={logo2} />{' '}
                    </Grid>
                  </motion.a>
                  <Grid
                    container
                    justifyContent="center"
                    className={classes.gridItemsMedia}
                    direction="row"
                  >
                    {MediaMap.map(({ icon, animated, loop }: any) => (
                      <Grid key={uuid()} item>
                        <motion.a key={uuid()} whileHover={{ scale: 1.1 }} variants={itemVariants}>
                          {animated ? (
                            <UseAnimations
                              key={uuid()}
                              strokeColor="#CCBF90"
                              size={45}
                              onClick={comingSoon}
                              loop={loop}
                              animation={icon}
                            />
                          ) : (
                            icon
                          )}
                        </motion.a>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
      </Drawer>
    </>
  )
}

export default Menu
