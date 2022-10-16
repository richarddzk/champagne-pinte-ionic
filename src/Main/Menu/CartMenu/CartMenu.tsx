/* eslint-disable react/no-unused-prop-types */
import React from 'react'
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  Drawer,
  Grid,
  IconButton,
  ListItemIcon,
  Tooltip
} from '@mui/material'
import { v4 as uuid } from 'uuid'
import { useDarkMode } from 'next-dark-mode'
import { Logout } from '@mui/icons-material'
import LoginIcon from '@mui/icons-material/Login'
import dynamic from 'next/dynamic'
import Image from '@/Utils/MidgardImage'

import { DarkModeSwitch } from 'react-toggle-dark-mode'
import Slide from '@mui/material/Slide'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
import { useRouter } from 'next/router'
import { TransitionProps } from '@mui/material/transitions'
import { useSnackbar } from 'notistack'
import Cart from '@/Main/Cart'
import { Product } from '@/Modules/ProductItem/interfaces'
import { userVariables, user } from '@/Modules/account/__generated__/user'
import { ApolloQueryResult } from '@apollo/client'
import settings from 'react-useanimations/lib/settings'
import { useCart } from '@/Main/Providers/CartProvider'
import { useAuth } from '../../auth-provider/AuthProvider'
import iconWallet from '../../../../public/image/crypto/iconWallet.webp'
import iconWalletB from '../../../../public/image/crypto/iconWalletB.webp'
import SwitchLang from '../SwitchLang'
import actionSnack from '../interfaces'
import useStyles from './style'

const UseAnimations = dynamic(() => import('react-useanimations'), {
  loading: () => <>...</>
})
const MenuIcon = dynamic(() => import('@/Utils/BButton'), {
  loading: () => <>...</>
})
export interface SimpleDialogProps {
  open: boolean
  logout?: any
  onClose: () => void
  classes: any
  selected?: string[]
  refetch?: (variables?: Partial<userVariables>) => Promise<ApolloQueryResult<user>>
  setSelected?: React.Dispatch<React.SetStateAction<readonly string[]>>
  email?: boolean
}

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
  ) => <Slide direction="up" ref={ref} {...props} />
)
function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, logout, open, classes } = props

  const handleClose = () => {
    onClose()
  }

  const router = useRouter()

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle className={classes.typoTitre}>
        {' Voulez vous vraiment vous deconnecter ?'}
      </DialogTitle>

      <DialogActions>
        <Button
          className={classes.typo}
          startIcon={<KeyboardReturnIcon fontSize="small" />}
          onClick={handleClose}
        >
          Non
        </Button>
        <Button
          key={uuid()}
          className={classes.typo}
          startIcon={<Logout fontSize="small" />}
          onClick={() => {
            logout()
            handleClose()

            router.push(' ').then(() => {
              router.reload()
            })
          }}
        >
          Oui
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export interface CartMenuProps {
  open: boolean
  onClose: (open: boolean) => void
  products?: Product[]
  tt?: number
}

const CartMenu: React.FC<CartMenuProps> = ({ open, onClose }) => {
  const { darkModeActive, switchToLightMode, switchToDarkMode } = useDarkMode()
  const [openDeco, setOpenDeco] = React.useState(false)
  const { classes, css } = useStyles()

  const router = useRouter()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const { cartOpen, setCartOpen } = useCart()
  const handleToggle = () => {
    setCartOpen(!cartOpen)
  }
  const { auth, logout } = useAuth()
  const handleClickOpen = () => {
    setOpenDeco(true)
  }

  const handleClose = () => {
    setOpenDeco(!openDeco)
  }
  const comingSoon = () =>
    enqueueSnackbar('    Coming soon...!', {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      variant: 'info',
      action: (key) => actionSnack(key, closeSnackbar)
    })

  const menuButtonStyle = {
    marginLeft: 20,
    cursor: 'pointer'
  }
  return (
    <Drawer
      anchor="right"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
      onClose={onClose}
    >
      {/* <ClickAwayListener onClickAway={onClose}> */}
      <SimpleDialog logout={logout} open={openDeco} onClose={handleClose} classes={classes} />
      <Grid
        className={classes.MainGrid}
        justifyContent="space-between"
        container
        direction="column"
      >
        <Grid direction="row" justifyContent="center" container>
          {auth ? (
            <Grid direction="row" justifyContent="space-evenly" container>
              <Grid item>
                <Tooltip color="primary" title="Mon compte">
                  <IconButton
                    onClick={() => {
                      handleToggle()
                      router.push(`/compte/${auth.id}`)
                    }}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <Avatar color="primary" sx={{ width: 32, height: 32 }}>
                      {auth.firstName && auth.firstName[0]}
                    </Avatar>
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip color="primary" title="Mon Wallet">
                  <IconButton
                    onClick={() => {
                      handleToggle()
                      router.push(`/compte/${auth.id}`)
                    }}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <Avatar color="primary" sx={{ width: 32, height: 32 }}>
                      <Image
                        src={darkModeActive ? iconWallet : iconWalletB}
                        alt="Logo"
                        width={25}
                        height={25}
                      />
                    </Avatar>
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item sx={{ alignSelf: 'center' }}>
                <Button
                  key={uuid()}
                  startIcon={<Logout fontSize="small" />}
                  onClick={() => handleClickOpen()}
                  className={classes.typo}
                >
                  Deconnexion
                </Button>
              </Grid>
            </Grid>
          ) : (
            <Grid item>
              <Button
                key={uuid()}
                startIcon={<LoginIcon fontSize="small" />}
                onClick={() => {
                  handleToggle()
                  router.push('/connexion')
                }}
                className={classes.typo}
              >
                Se connecter
              </Button>
            </Grid>
          )}
        </Grid>
        <Divider />

        <Grid
          className={classes.CartGrid}
          justifyContent="flex-start"
          alignItems="center"
          container
          direction="column"
        >
          <Grid justifyContent="center" alignItems="center" item>
            <Cart />
          </Grid>
        </Grid>
        <Grid direction="column" container>
          <Divider />

          <Grid direction="row" justifyContent="space-between" alignItems="center" container>
            <Grid item>
              <MenuIcon
                isOpen={open}
                onClick={() => onClose(!open)}
                strokeWidth="2"
                color="#CCBF90"
                transition={{ ease: 'easeOut', duration: 0.8 }}
                width={22}
                height={12}
                style={menuButtonStyle}
              />
            </Grid>
            <Grid item>
              <ListItemIcon>
                <UseAnimations
                  strokeColor="#CCBF90"
                  size={45}
                  // wrapperStyle={{ marginTop: '5px' }}
                  animation={settings}
                  onClick={comingSoon}
                />
              </ListItemIcon>
            </Grid>
            <Grid item>
              <DarkModeSwitch
                checked={!darkModeActive}
                moonColor="#4a4534"
                sunColor="#CCBF90"
                onChange={() => {
                  if (darkModeActive) {
                    switchToLightMode()
                  } else {
                    switchToDarkMode()
                  }
                }}
                size={30}
              />
            </Grid>

            <Grid item>
              <SwitchLang onClick={comingSoon} css={css} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Drawer>
  )
}

export default CartMenu
