import React from 'react'
import Box from '@mui/material/Box'
import { useDarkMode } from 'next-dark-mode'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { Badge, Grid, Tooltip } from '@mui/material'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { useCart } from '@/Main/Providers/CartProvider'
import { useMedia } from 'react-use'
import useStyles from './style'
import CartMenu from './CartMenu'

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z" />
    </SvgIcon>
  )
}
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
  const isTiny = useMedia('(min-width: 350px)', false)

  const { tt, cartOpen, setCartOpen } = useCart()
  const { darkModeActive, switchToLightMode, switchToDarkMode } = useDarkMode()

  // Hooks
  const { classes } = useStyles()

  // Handlers
  const handleToggle = () => {
    setCartOpen(!cartOpen)
  }

  // Rendering
  return (
    <Grid className={classes.gridAccount} container direction="row">
      <Grid item>
        <CartMenu open={cartOpen} onClose={handleToggle} />

        <Tooltip color="primary" title="Account menu">
          <Box
            id="composition-button"
            aria-controls={cartOpen ? 'composition-menu' : undefined}
            aria-expanded={cartOpen ? 'true' : undefined}
            aria-haspopup="true"
            className={classes.accountMenuSwitch}
          >
            <Badge invisible={tt === 0} variant="dot" color="primary">
              <HomeIcon
                style={{ height: 40, width: 40, cursor: 'pointer' }}
                onClick={handleToggle}
                color="primary"
              />
            </Badge>
          </Box>
        </Tooltip>
      </Grid>
      <Grid item>
        {isTiny && (
          <DarkModeSwitch
            checked={!darkModeActive}
            moonColor="#4a4534"
            className={classes.DarkModeSwitch}
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
        )}
      </Grid>
    </Grid>
  )
}
export default AccountMenu
