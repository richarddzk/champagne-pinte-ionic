import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Button, Grid, Typography } from '@mui/material'
import { useDarkMode } from 'next-dark-mode'
import { useRouter } from 'next/router'
import React from 'react'
import { useCart } from '@/Main/Providers/CartProvider'
import { v4 as uuid } from 'uuid'
import CartItem from './CartItem'
import useStyles from './style'
import ButtonStyled from '../ButtonStyled'

interface ImageObject {
  src: string
  altText: string
  caption: string
  header: string
  key: string
  name: string
  page: string
  id: string
  title: string
}
interface Product {
  title?: string
  name?: string
  description?: string
  id: string
  price: number | string
  currency?: string
  images: ImageObject[]
  amount: number
}

export const calculateTotal = (items: any) => {
  let tt = 0
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  items &&
    Object.keys(items).forEach((item) => {
      const product = items[`${item}`]
      tt += parseInt(product.amount, 10) * parseInt(product.price, 10)
    })

  return tt
}

interface CartProps {
  localItems?: Product[]
  tt?: number
}

const Cart: React.FC<CartProps> = () => {
  const { Products, tt, cartOpen, setCartOpen } = useCart()
  const router = useRouter()
  const { darkModeActive } = useDarkMode()

  const { classes } = useStyles({ darkModeActive })

  const handleToggle = () => {
    setCartOpen(!cartOpen)
  }
  const handleProduct = () => {
    handleToggle()
    router.push('/champagnes')
  }

  return (
    <Grid container direction="column" justifyContent="center" className={classes.gridCartItem}>
      {tt === 0 ? (
        <Grid container direction="column" className={classes.gridCardEmpty}>
          <Grid justifyContent="center" item>
            <Typography className={classes.typo} variant="h4">
              Votre panier est vide.
            </Typography>
          </Grid>
          <Grid justifyContent="center" item>
            <Button
              className={classes.typoButton}
              size="small"
              onClick={handleProduct}
              endIcon={<ArrowForwardIosIcon color="primary" />}
            >
              Choisissez du champagne
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Grid justifyContent="center" alignItems="center">
          <Typography className={classes.typo} variant="h6">
            Votre Panier ({tt} Article{tt !== 1 && 's'})
          </Typography>
          {Products &&
            Object.keys(Products).map((item) => {
              // @ts-ignore
              const product = Products[`${item}`]
              return <CartItem key={uuid()} item={product} />
            })}
        </Grid>
      )}

      <Grid
        item
        justifyContent="justify"
        alignContent="center"
        className={tt !== 0 ? classes.gridCard : classes.gridCardEmpty}
      >
        {tt !== 0 && (
          <Typography className={classes.typo} variant="h6">
            Total: {calculateTotal(Products ?? []).toFixed(2)} €
          </Typography>
        )}
      </Grid>

      <Grid
        item
        justifyContent="center"
        alignContent="center"
        className={tt !== 0 ? classes.gridCard : classes.gridCardEmpty}
      >
        {tt > 0 && (
          <ButtonStyled
            width={200}
            title="Voir le panier"
            fullybackground
            onClick={() => {
              handleToggle()
              router.push('/panier')
            }}
            // startIcon={<ShoppingBasketIcon sx={{ fontSize: 40 }} color="primary" />}
          />
        )}
      </Grid>
      <Grid
        item
        justifyContent="center"
        alignContent="center"
        className={tt !== 0 ? classes.gridCard : classes.gridCardEmpty}
      >
        {tt > 0 && (
          <ButtonStyled
            width={200}
            title="Commander"
            fullybackground
            onClick={() => {
              handleToggle()
              router.push('/paiement')
            }}
            // startIcon={<ShoppingBasketIcon sx={{ fontSize: 40 }} color="primary" />}
          />
        )}
      </Grid>
    </Grid>
  )
}

export default Cart
