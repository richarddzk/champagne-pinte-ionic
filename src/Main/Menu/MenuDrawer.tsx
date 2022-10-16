import React from 'react'
import { Grid, Drawer } from '@mui/material'
import Image from '@/Utils/MidgardImage'
import dynamic from 'next/dynamic'
import { v4 as uuid } from 'uuid'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import { motion, AnimatePresence } from 'framer-motion'
import useScreen from '@/Utils/hooks/useScreen'
import logo from '../../../public/image/logo/pintechamplisse2Or.webp'
import useStyles from './style'
import actionSnack, { PageMap, MediaMap } from './interfaces'

const UseAnimations = dynamic(() => import('react-useanimations'), {
  loading: () => <>...</>
})

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

export interface MenuDrawerProps {
  open?: boolean
  cycleOpen: () => void
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ open, cycleOpen }) => {
  const router = useRouter()

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const { isTablette } = useScreen()

  const comingSoon = () =>
    enqueueSnackbar('    Coming soon...!', {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      variant: 'info',
      action: (key) => actionSnack(key, closeSnackbar)
    })

  const { classes } = useStyles()

  const handleDrawer: any = () => {
    cycleOpen()
  }

  const menuButtonDrawerStyle = {
    marginRight: 20,
    cursor: 'pointer'
  }

  return (
    <Drawer
      className={classes.drawer}
      variant={isTablette ? undefined : 'persistent'}
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
      transitionDuration={{ enter: 1000, exit: 2500 }}
    >
      <Grid className={classes.container} container direction="row">
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
                <Grid item className={classes.drawerHeader}>
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
                </Grid>
                {PageMap(classes).map(({ name, page }: any) => (
                  <motion.a
                    key={uuid()}
                    onClick={() => {
                      router.push(`${page}`)
                    }}
                    whileHover={{ scale: isTablette ? 1 : 1.05 }}
                    variants={itemVariants}
                  >
                    <Grid
                      className={classes.gridItemMenuGrid}
                      key={uuid()}
                      container
                      direction="row"
                    >
                      <Grid className={classes.gridItemMenu} item>
                        {name}
                      </Grid>
                    </Grid>
                  </motion.a>
                ))}
                <Grid container direction="column">
                  <motion.a variants={itemVariants}>
                    <Grid item className={classes.gridItemsLogo}>
                      <Image alt="logo2" id="shiny" width={150} height={80} src={logo} />{' '}
                    </Grid>
                  </motion.a>
                  <Grid
                    container
                    justifyContent="center"
                    className={classes.gridItemsMedia}
                    direction="row"
                  >
                    {MediaMap.map(({ icon, animated, loop, page }: any) => (
                      <Grid
                        key={uuid()}
                        onClick={() => {
                          window.open(page, '_blank')
                        }}
                        item
                      >
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
      </Grid>
    </Drawer>
  )
}

export default MenuDrawer
