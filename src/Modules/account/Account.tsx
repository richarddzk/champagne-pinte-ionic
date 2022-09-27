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
  Tooltip
} from '@mui/material'
import Image from 'next/future/image'
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined'
import { useDarkMode } from 'next-dark-mode'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import { KeyboardArrowDown } from '@mui/icons-material'
import styled from '@mui/styles/styled'
import { useAuth } from '@/Main/auth-provider/AuthProvider'
import dynamic from 'next/dynamic'
import { Infos, Orders, Adresses, Cart } from './components'
import logo from '../../../public/img/logo/LogoSansFond.webp'
import Main from '../../Main/Main'
import useStyles from './style'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})

const drawerWidthOpen = 240
const drawerWidthClose = 80

const FireNav = styled(List)<{ component?: any }>({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20
  }
})

const Account: React.FC<{
  id: string
}> = () => {
  const [componentSelected, setComponentSelected] = useState(0)

  const { classes } = useStyles()
  const [open, setOpen] = React.useState(true)
  const { UserInfos: userData, loading, refetch } = useAuth()

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

  const { darkModeActive } = useDarkMode()

  const changeAccountComp = (
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setComponentSelected(index)
  }
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

  return (
    <Main fixed account>
      <Drawer
        variant="permanent"
        sx={{
          width: open ? drawerWidthOpen : drawerWidthClose,
          flexShrink: 0
          // '& .MuiDrawer-paper': {
          //   width: open ? drawerWidthOpen : drawerWidthClose,
          //   boxSizing: 'border-box'
          // }
        }}
        PaperProps={{
          style: { top: 70, paddingTop: 80, zIndex: 0 }
        }}
      >
        <Box sx={{ overflow: 'auto' }}>
          <Divider />
          <FireNav>
            <Tooltip title={open ? 'Fermer le menu' : 'Ouvrir le menu'}>
              <ListItemButton onClick={() => setOpen(!open)} component="a" href="#customized-list">
                <ListItemIcon sx={{ fontSize: 20 }}>
                  {' '}
                  <Image src={logo} alt="Logo" width={30} height={35} />
                </ListItemIcon>

                {open && (
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="Mon Compte"
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontWeight: 'medium',
                      letterSpacing: 0,
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
                  onClick={() => setOpen(!open)}
                  sx={{
                    paddingTop: 0,
                    px: 3,
                    pt: 2.5,
                    height: 66,
                    pb: open ? 0 : 2.5,
                    '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } }
                  }}
                >
                  <ListItemText
                    primary="Menu"
                    primaryTypographyProps={{
                      color: 'primary',
                      fontWeight: 'medium',
                      variant: 'body2'
                    }}
                    sx={{ my: 0 }}
                  />
                  <KeyboardArrowDown
                    sx={{
                      mr: -1,
                      opacity: 0,
                      transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                      transition: '0.2s'
                    }}
                  />
                </ListItemButton>
              </ListItem>
            )}
            <Divider />
            <Box
              sx={{
                bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : null,
                pb: open ? 2 : 0
              }}
            >
              {open &&
                componentMap.map((x, index) => (
                  <ListItemButton
                    selected={componentSelected === index}
                    key={x.title}
                    onClick={(event) => changeAccountComp(event, index)}
                  >
                    <ListItemIcon>{x.icon}</ListItemIcon>
                    <ListItemText color="primary" className={classes.typo} primary={x.title} />
                  </ListItemButton>
                ))}
            </Box>
          </FireNav>
          <Divider />
        </Box>
      </Drawer>
      <Grid
        style={{
          width: open ? 'calc(100% - 290px)' : 'calc(100% - 130px)',
          marginLeft: open ? 270 : 110,
          paddingTop: 100,
          paddingBottom: 100
        }}
        justifyContent="center"
        alignItems="start"
        container
      >
        <Grid
          style={{
            overflowX: 'hidden',
            overflowY: 'auto',
            maxHeight: '88vh',

            borderRadius: 10,
            backgroundColor: darkModeActive ? '#28252166' : '#d9d9d929'
          }}
          container
        >
          {userData && userData ? ComponentMemo : <Loading />}
        </Grid>
      </Grid>
    </Main>
  )
}
export default Account
