import React, { useState } from 'react'
import { Typography, Grid, TextField, IconButton, Button } from '@mui/material'
import Image from '@/Utils/MidgardImage'
import dynamic from 'next/dynamic'
import DelIcon from '@mui/icons-material/RemoveCircleOutline'
import AddIcon from '@mui/icons-material/AddCircleOutline'
import { useDarkMode } from 'next-dark-mode'
import { useCart } from '@/Main/Providers/CartProvider'
import { Product } from '@/Modules/ProductItem/interfaces'
import { useKeyPressEvent } from 'react-use'
import { motion } from 'framer-motion'
import Router from 'next/router'

import alertCircle from 'react-useanimations/lib/alertCircle'
import { v4 as uuid } from 'uuid'

import Tooltip from '@mui/material/Tooltip'
import ClearIcon from '@mui/icons-material/Clear'
import useStyles from '../style'

export interface PanierItemProps {
  item: Product
  main: boolean
  checkout?: boolean
}

const UseAnimations = dynamic(() => import('react-useanimations'), {
  loading: () => <>...</>
})
const PanierItem: React.FC<PanierItemProps> = ({ checkout = false, item, main }) => {
  const { darkModeActive } = useDarkMode()
  const { setQtyProduct, removeProduct, getTotalPrice } = useCart()
  const [localQty, setLocalQty] = useState(item.amount)

  const { classes, css } = useStyles({ darkModeActive })
  let icon = item.images[0]
  item.images.forEach((image) => {
    if (image.title === 'icon') icon = image
  })
  const refreshCart = (qty: number, rm: boolean | undefined = false) =>
    new Promise(() => {
      if (rm) removeProduct(item.id)
      if (qty !== item.amount) {
        setQtyProduct(item, qty)
      }
      getTotalPrice()
    })

  useKeyPressEvent('Enter', () => {
    if (item.amount !== localQty) refreshCart(localQty)
  })

  return (
    <Grid
      className={css({
        margin: 5
      })}
      direction="row"
      container
      justifyContent="space-around"
    >
      <Grid
        item
        xs={2}
        onClick={() => {
          Router.push(` /produit/${item.id}`)
        }}
        style={{
          height: 210,
          width: 80,
          textAlign: 'center',
          alignSelf: 'center',
          cursor: 'pointer'
        }}
      >
        <motion.div key={uuid()} whileHover={{ scale: !checkout ? 1.2 : 1 }}>
          <Image src={icon.src} alt={icon.title} height={210} width={65} />
        </motion.div>
      </Grid>
      <Grid
        item
        container
        className={css({
          height: '100%',
          alignSelf: 'center',
          alignItems: 'flex-start',
          margin: 2
        })}
        direction="column"
        justifySelf="flex-start"
        xs={6}
        rowSpacing={2}
      >
        <Grid justifyContent="flex-start" alignItems="stretch" item>
          <Typography className={classes.typo} variant="h6">
            Champagne {item.title}
          </Typography>
        </Grid>
        <Grid justifyContent="flex-start" alignItems="stretch" item>
          <Typography className={classes.typo} variant="body1" color="primary">
            Bouteille - 75 cL - {item.price} €{' '}
          </Typography>
        </Grid>
        <Grid direction="row" justifyContent="flex-start" container item xs={8}>
          {main && (
            <Grid item>
              <IconButton
                color="primary"
                aria-label="delete"
                onClick={() => {
                  if (!Number.isNaN(localQty) && localQty > 0) {
                    refreshCart(localQty - 1)
                  }
                }}
              >
                <DelIcon />
              </IconButton>
            </Grid>
          )}
          <Grid item>
            {main ? (
              <TextField
                id="outlined-number"
                helperText="Quantité"
                size="medium"
                className={classes.panierTextfield}
                onChange={(res: { target: { value: string } }) => {
                  const value = parseInt(res.target.value, 10)
                  if (!value) setLocalQty(0)
                  if (!Number.isNaN(value)) {
                    setLocalQty(value)
                  }
                }}
                value={localQty}
                InputLabelProps={{
                  shrink: true
                }}
              />
            ) : (
              <Typography className={classes.typo}>{item.amount} Bouteilles</Typography>
            )}
          </Grid>
          {main && (
            <Grid item>
              <IconButton
                color="primary"
                aria-label="delete"
                onClick={() => {
                  if (!Number.isNaN(localQty)) {
                    refreshCart(localQty + 1)
                  }
                }}
              >
                <AddIcon />
              </IconButton>
            </Grid>
          )}
        </Grid>
        <Grid style={{ height: 100 }} item xs>
          {localQty !== item.amount && (
            <Button
              key={uuid()}
              className={classes.buttonMajPanier}
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
      {main && (
        <Grid direction="row" item>
          <Tooltip title="Supprimer">
            <IconButton
              color="primary"
              size="small"
              aria-label="delete"
              onClick={() => {
                refreshCart(0, true)
              }}
            >
              <ClearIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      )}
    </Grid>
  )
}

export default PanierItem
