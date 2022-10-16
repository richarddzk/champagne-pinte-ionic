import React from 'react'
import Box from '@mui/material/Box'
import { Badge, Grid, Tooltip } from '@mui/material'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { useCart } from '@/Main/Providers/CartProvider'
import { useRouter } from 'next/router'

import useStyles from './style'
import CartMenu from './CartMenu'
import { useAuth } from '../auth-provider/AuthProvider'

export const CartIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M9.293 6.172a1 1 0 1 1 1.414 1.414L7.293 11h9.414l-3.414-3.414a1 1 0 0 1 1.414-1.414l4.243 4.242c.164.165.26.372.285.586h1.545a1 1 0 0 1 .98 1.196l-2.6 8a1 1 0 0 1-.98.804H5.82a1 1 0 0 1-.98-.804l-2.6-8A1 1 0 0 1 3.22 11h1.545a.996.996 0 0 1 .285-.586l4.243-4.242ZM7 13.5a.5.5 0 1 1 1 0v5a.5.5 0 0 1-1 0v-5Zm3 0a.5.5 0 1 1 1 0v5a.5.5 0 0 1-1 0v-5Zm3.5-.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5Zm2.5.5a.5.5 0 1 1 1 0v5a.5.5 0 0 1-1 0v-5Z"
      clipRule="evenodd"
    />
  </SvgIcon>
)

export const AccountIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z" />
  </SvgIcon>
)

export type CartItemType = {
  id: number
  category: string
  description: string
  image: string
  price: number
  title: string
  amount: number
}

const AccountMenu: React.FC = () => {
  // States
  const { tt, cartOpen, setCartOpen } = useCart()

  // Hooks
  const { classes } = useStyles()
  const router = useRouter()

  const { auth } = useAuth()

  // Handlers
  const handleToggle = () => {
    setCartOpen(!cartOpen)
  }
  // Rendering
  return (
    <Grid item container className={classes.gridAccount}>
      <Grid item>
        <Tooltip color="primary" title="Panier">
          <Box
            id="composition-button"
            aria-controls={cartOpen ? 'composition-menu' : undefined}
            aria-expanded={cartOpen ? 'true' : undefined}
            aria-haspopup="true"
            className={classes.accountMenuSwitch}
          >
            <Badge badgeContent={tt} color="primary">
              <CartIcon
                style={{ height: 40, width: 40, cursor: 'pointer' }}
                onClick={handleToggle}
                color="primary"
              />
            </Badge>
          </Box>
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip color="primary" title={auth ? 'Mon Compte' : 'Se connecter'}>
          <Box
            id="composition-button"
            aria-controls={cartOpen ? 'composition-menu' : undefined}
            aria-expanded={cartOpen ? 'true' : undefined}
            aria-haspopup="true"
            className={classes.accountMenuAccount}
          >
            <AccountIcon
              style={{ height: 40, width: 40, cursor: 'pointer' }}
              onClick={() => {
                if (auth) router.push(`/compte/${auth.id}`)
                else router.push('/connexion')
              }}
              color="primary"
            />
          </Box>
        </Tooltip>
      </Grid>

      <CartMenu open={cartOpen} onClose={handleToggle} />
    </Grid>
  )
}
export default AccountMenu
