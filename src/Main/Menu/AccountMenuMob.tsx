import React from 'react'
import Box from '@mui/material/Box'
import { Badge, Grid, Tooltip } from '@mui/material'
import { useCart } from '@/Main/Providers/CartProvider'
import { useRouter } from 'next/router'

import useStyles from './style'
import CartMenu from './CartMenu'
import { AccountIcon, CartIcon } from './AccountMenuDesk'
import { useAuth } from '../auth-provider/AuthProvider'

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
    <Grid className={classes.gridAccount} container item direction="row" xs={2}>
      <Grid item>
        <CartMenu open={cartOpen} onClose={handleToggle} />

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
        <Tooltip color="primary" title="Mon Compte">
          <Box
            id="composition-button"
            aria-controls={cartOpen ? 'composition-menu' : undefined}
            aria-expanded={cartOpen ? 'true' : undefined}
            aria-haspopup="true"
            className={classes.accountMenuSwitch}
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
    </Grid>
  )
}
export default AccountMenu
