import React, { useMemo, useState } from 'react'
import {
  Grid,
  Divider,
  Box,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  ListItem,
  Tooltip,
  ListItemAvatar,
  Avatar
} from '@mui/material'
import Image from '@/Utils/MidgardImage'
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined'
import { useDarkMode } from 'next-dark-mode'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import { KeyboardArrowDown } from '@mui/icons-material'
import styled from '@mui/styles/styled'
import { useAuth } from '@/Main/auth-provider/AuthProvider'
import dynamic from 'next/dynamic'
import useScreen from '@/Utils/hooks/useScreen'
import logo from '../../../public/image/logo/LogoSansFond.webp'
import iconWallet from '../../../public/image/crypto/iconWallet.webp'
import iconWalletB from '../../../public/image/crypto/iconWalletB.webp'
import { Infos, Orders, Adresses, Cart } from './components'
import Main from '../../Main/Main'
import useStyles from './style'
import Wallet from './components/Wallet'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})

const drawerWidthClose = 80
const drawerWidthCloseTablette = 40

const Account: React.FC<{
  id: string
}> = () => {
  const [componentSelected, setComponentSelected] = useState(0)

  const { classes, theme } = useStyles()
  const [open, setOpen] = React.useState(false)
  const { UserInfos: userData, loading, refetch } = useAuth()
  const { isTablette } = useScreen()

  const { customers } = (userData && userData) ?? {
    customers: undefined
  }

  const {
    addresses,
    orders,
    id: customerId
  } = (customers && customers[0]) ?? {
    addresses: undefined
  }
  const FireNav = styled(List)<{ component?: any }>({
    '& .MuiListItemButton-root': {
      paddingRight: 0,

      textAlign: '-webkit-center' as any,
      paddingLeft: 0,
      placeContent: 'center'
    },
    '& .MuiListItemIcon-root': {
      minWidth: 0,
      marginRight: 0
    },
    '& .MuiSvgIcon-root': {
      fontSize: 20
    },
    '& .MuiListItemText-root ': {
      marginRight: 0
    }
  })
  const { darkModeActive } = useDarkMode()

  const changeAccountComp = (
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setComponentSelected(index)
  }

  const maxWithClose = isTablette ? drawerWidthCloseTablette : drawerWidthClose
  const menuWidth = isTablette ? '90%' : '250px'
  const tabMarginLeft = open ? '250px' : maxWithClose

  const marginLeft = open ? tabMarginLeft : 110
  const paddingTop = isTablette ? 20 : 100

  const paddingTopCompo = isTablette ? 20 : 100

  const componentMap = [
    {
      title: 'Commandes',
      name: 'orders',
      component: <Orders orders={orders} addresses={addresses} />,
      icon: <DescriptionOutlinedIcon />
    },
    {
      title: 'Adresses',
      name: 'adresses',
      component:
        addresses && customerId ? (
          <Adresses addresses={addresses} customerId={customerId} refetch={refetch} />
        ) : (
          <></>
        ),
      icon: <HomeOutlinedIcon />
    },
    {
      title: 'Panier',
      name: 'cart',
      component: <Cart />,
      icon: <ShoppingCartOutlinedIcon />
    },
    {
      title: 'Connexion & securité',
      name: 'infos',
      component: userData && userData ? <Infos /> : <></>,
      icon: <PrivacyTipOutlinedIcon />
    },
    {
      title: 'Wallet',
      name: 'wallet',
      component: <Wallet />,
      icon: (
        <Image src={darkModeActive ? iconWallet : iconWalletB} alt="Logo" width={25} height={25} />
      )
    }
  ]

  const ComponentMemo = useMemo(
    () => componentMap[componentSelected].component,
    [componentSelected, userData]
  )
  if (loading) {
    return (
      <Main menuOnly>
        <Loading />{' '}
      </Main>
    )
  }
  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <Main fixed account paddingLeft={isTablette ? drawerWidthCloseTablette : tabMarginLeft}>
      <Drawer
        variant={isTablette && open ? undefined : 'permanent'}
        anchor={isTablette ? 'left' : undefined}
        open={open}
        sx={{
          flexShrink: 0,
          marginLeft
        }}
        onClose={handleToggle}
        PaperProps={{
          style: {
            top: isTablette ? 0 : 70,
            paddingTop,
            zIndex: 0,
            width: menuWidth,
            maxWidth: open ? undefined : maxWithClose,
            backgroundImage: 'none',
            backgroundColor: theme.palette.background.default
          }
        }}
      >
        <Box sx={{ overflow: 'hidden' }}>
          <Divider />
          <FireNav>
            <Tooltip title={open ? 'Fermer le menu' : 'Ouvrir le menu'}>
              <ListItemButton onClick={() => setOpen(!open)} component="a" href="#customized-list">
                <ListItemIcon>
                  {' '}
                  <Image src={logo} alt="Logo" width={30} height={35} />
                </ListItemIcon>

                {open && (
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="Mon Compte"
                    primaryTypographyProps={{
                      fontSize: 16,
                      color: 'primary'
                    }}
                    // secondary="Mes Infos, Commandes, Adresses, Panier"
                  />
                )}
              </ListItemButton>
            </Tooltip>
            <Divider />
            {open && (
              <ListItem component="div" disablePadding>
                <ListItemButton
                  onClick={handleToggle}
                  sx={{
                    paddingTop: 0,
                    px: 3,
                    pt: 2.5,
                    height: 66,
                    pb: open ? 1 : 2.5,
                    '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } }
                  }}
                >
                  <KeyboardArrowDown
                    sx={{
                      mr: 1,
                      opacity: 0,
                      transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                      transition: '0.2s'
                    }}
                  />
                  <ListItemText
                    primary="Menu"
                    primaryTypographyProps={{
                      color: 'primary'
                    }}
                    sx={{ my: 0 }}
                  />
                </ListItemButton>
              </ListItem>
            )}
            <Divider />
            <Box
              sx={{
                bgcolor: 'rgba(71, 98, 130, 0.2)',
                pb: 2,
                textAlign: '-webkit-center'
              }}
            >
              {componentMap.map((x, index) => (
                <Tooltip title={x.title}>
                  <ListItemButton
                    selected={componentSelected === index}
                    key={x.title}
                    sx={{
                      paddingTop: 2.5,
                      textAlign: '-webkit-center',
                      paddingBottom: 2.5
                    }}
                    onClick={(event) => {
                      changeAccountComp(event, index)
                      if (isTablette && open) handleToggle()
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        sx={{
                          width: 30,
                          height: 30,
                          margin: 0,
                          bgcolor: theme.palette.primary.main as any
                        }}
                      >
                        {x.icon}
                      </Avatar>
                    </ListItemAvatar>

                    {open && (
                      <ListItemText color="primary" className={classes.typo} primary={x.title} />
                    )}
                  </ListItemButton>
                </Tooltip>
              ))}
            </Box>
          </FireNav>
          <Divider />
        </Box>
      </Drawer>
      <Grid
        style={{
          width: '100%',
          paddingLeft: isTablette ? drawerWidthCloseTablette : tabMarginLeft,
          paddingTop: paddingTopCompo,
          paddingBottom: 100,
          backgroundColor: theme.palette.background.default
        }}
        justifyContent="center"
        alignItems="start"
        container
      >
        {userData && userData ? ComponentMemo : <Loading />}
      </Grid>
    </Main>
  )
}
export default Account
