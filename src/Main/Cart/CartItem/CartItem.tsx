import React, { RefObject, useRef, useState } from 'react'
import { Typography, Grid, TextField, IconButton, Button } from '@mui/material'
import Image from '@/Utils/MidgardImage'
import DelIcon from '@mui/icons-material/RemoveCircleOutline'
import AddIcon from '@mui/icons-material/AddCircleOutline'
import { useDarkMode } from 'next-dark-mode'
import dynamic from 'next/dynamic'
import { v4 as uuid } from 'uuid'
import { useCart } from '@/Main/Providers/CartProvider'
import { Product } from '@/Modules/ProductItem/interfaces'
import alertCircle from 'react-useanimations/lib/alertCircle'
import { useKeyPressEvent } from 'react-use'
import ClearIcon from '@mui/icons-material/Clear'
import useStyles from '../style'

interface CartItemProps {
  item: Product
}
interface CustomTextFieldProps extends CartItemProps {
  refreshCart: (localQty: any) => Promise<unknown>
  Products: { [x: string]: Product }
}

const CustomTextField: React.FC<CustomTextFieldProps> = React.memo(({ refreshCart, item }) => {
  const [localQty, setLocalQty] = useState(item.amount)
  const { darkModeActive } = useDarkMode()
  const { classes } = useStyles({ darkModeActive })
  const textFieldRef: RefObject<any> = useRef()

  const UseAnimations = dynamic(() => import('react-useanimations'), {
    loading: () => <>...</>
  })

  useKeyPressEvent('Enter', () => {
    if (item.amount !== localQty) refreshCart(localQty)
  })

  return (
    <>
      <Grid direction="row" justifyContent="space-around" alignItems="stretch" container item>
        <Grid item xs={2}>
          <IconButton
            color="primary"
            aria-label="delete"
            onClick={() => {
              if (!Number.isNaN(localQty) && localQty > 0) {
                // setLocalQty(localQty - 1)
                refreshCart(localQty - 1)
              }
            }}
          >
            <DelIcon />
          </IconButton>
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="outlined-number"
            helperText="Quantité"
            // type="number"
            ref={textFieldRef}
            size="small"
            onChange={async (res) => {
              const value = parseInt(res.target.value, 10)
              if (!value) setLocalQty(0)
              if (!Number.isNaN(value)) {
                setLocalQty(value)
              }
            }}
            className={classes.textfield}
            value={localQty}
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <IconButton
            color="primary"
            aria-label="delete"
            onClick={() => {
              if (!Number.isNaN(localQty) && localQty > 0) {
                // setLocalQty(localQty + 1)

                refreshCart(localQty + 1)
              }
            }}
          >
            <AddIcon />
          </IconButton>
        </Grid>
        <Grid item xs={3}>
          <IconButton
            color="primary"
            aria-label="delete"
            onClick={() => {
              // setLocalQty(0)
              refreshCart(0)
            }}
          >
            <ClearIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Grid container direction="row" style={{ height: 40, paddingBottom: 10 }}>
        <Grid style={{ height: 40 }} item xs={7}>
          {localQty !== item.amount && (
            <Button
              key={uuid()}
              className={classes.buttonMaj}
              onClick={() => {
                refreshCart(localQty)
              }}
            >
              <UseAnimations
                key={uuid()}
                strokeColor="#CCBF90"
                size={45}
                aria-label="maj"
                loop
                animation={alertCircle}
              />
              <Typography className={classes.typoMaj} variant="body2">
                mettre à jour
              </Typography>
            </Button>
          )}
        </Grid>
      </Grid>
    </>
  )
})

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { darkModeActive } = useDarkMode()
  const { classes, css } = useStyles({ darkModeActive })
  const { setQtyProduct, Products, removeProduct, getTotalPrice } = useCart()
  let icon = item.images && item.images[0]
  item.images.forEach((image) => {
    if (image.title === 'icon') icon = image
  })
  const refreshCart = (localQty: number, rm: boolean | undefined = false) =>
    new Promise(() => {
      if (rm) removeProduct(item.id)
      if (localQty !== item.amount) {
        // if (localQty === 0) removeProduct(item.id)
        setQtyProduct(item, localQty)
      }
      // if (textFieldRef && textFieldRef.current) textFieldRef.current.focus()
      getTotalPrice()
    })

  return (
    <Grid className={classes.paperCartItem}>
      <Grid
        className={css({ margin: 5 })}
        direction="row"
        container
        spacing={2}
        justifyContent="space-around"
        alignItems="stretch"
      >
        <Grid
          item
          xs={3}
          style={{
            height: '120',
            width: '80',
            textAlign: 'center',
            alignSelf: 'center'
          }}
        >
          <Image src={icon.src ?? ''} alt={icon.title} height={140} width={40} />{' '}
        </Grid>
        <Grid
          item
          className={css({
            height: '100%',
            alignSelf: 'center',
            alignItems: 'center',
            margin: 2
          })}
          justifySelf="space-between"
          xs={8}
        >
          <Grid direction="row" justifyContent="space-around" alignItems="stretch" container item>
            <Grid item xs={5}>
              <Typography className={classes.typo} variant="h6">
                {item.title}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.typo} variant="body1">
                {item.price} €{' '}
              </Typography>
            </Grid>
          </Grid>
          <CustomTextField refreshCart={refreshCart} item={item} Products={Products} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CartItem
