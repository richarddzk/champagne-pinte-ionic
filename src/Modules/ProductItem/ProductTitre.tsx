import { Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useCart } from '@/Main/Providers/CartProvider'
import ButtonStyled from '@/Main/ButtonStyled'
import useScreen from '@/Utils/hooks/useScreen'
import Image from '@/Utils/MidgardImage'
import { useDarkMode } from 'next-dark-mode'
import { TitreProduitProps } from './interfaces'
import stripeW from '../../../public/image/utils/checkout/stripe2.webp'
import stripeB from '../../../public/image/utils/checkout/stripe1.webp'
/**
 *
 * @param TitreProduitProps
 *
 * @returns React.FC<TitreProduitProps>
 *
 * @todo Factoriser les composants titre et description
 */

const TitreRose: React.FC<TitreProduitProps> = (props) => {
  const { product, classes } = props
  const [qtyProduct, setQtyProduct] = useState<number>()
  const { isMob } = useScreen()
  const { darkModeActive } = useDarkMode()

  const { addProduct, setCartOpen, cartOpen } = useCart()

  const tarif = parseFloat(product.price.toString())
  const price = (qtyProduct ?? 0) * tarif
  const prix = ` - ${price}€`

  return (
    <Grid className={classes.GridTitre}>
      <Typography className={classes.typoTitre} color="primary" variant={isMob ? 'h4' : 'h2'}>
        Champagne
      </Typography>
      <Typography className={classes.typoTitre} color="primary" variant={isMob ? 'h3' : 'h1'}>
        Brut Rosé
      </Typography>

      <Typography className={classes.typo} variant="h4" color="primary">
        Subtil | Fruité | Intense
      </Typography>

      <Typography align="justify" className={classes.typo} variant="body1">
        Notre Champagne Rosé saisit le rouge du pinot noir dans son éclat originel et capture sa
        complexité dans un assemblage téméraire et assumé. Ce Champagne Rosé est l'expression la
        plus spontanée du style Pinte.
      </Typography>
      <Typography align="justify" className={classes.typo} variant="body1">
        Il intègre toute la diversité des cépages, toute la richesse des terroirs et des vendanges
        de Champagne, pour révéler dans son intégralité la complexité qui le caractérise.
      </Typography>

      <>
        <Typography className={classes.typo} variant="h5" color="primary">
          {product.price} € Bouteille - 75 cL
        </Typography>
        <Grid>
          <TextField
            id="outlined-number"
            helperText="Bouteille(s)"
            type="number"
            color="primary"
            size="medium"
            className={classes.textField}
            onChange={(res) => {
              const value = parseInt(res.target.value, 10)

              if (!value) setQtyProduct(0)
              if (value < 10000) setQtyProduct(value)
            }}
            value={qtyProduct}
          />
        </Grid>
        <Grid>
          <ButtonStyled
            width={(qtyProduct ?? 0) > 0 ? 350 : 200}
            onClick={() => {
              if (qtyProduct && qtyProduct > 0) {
                setCartOpen(!cartOpen)
                addProduct(product, qtyProduct)
              }
            }}
            title={`Ajouter au panier ${(qtyProduct ?? 0) > 0 ? prix : ''}`}
            height={55}
          />
        </Grid>
        <Grid
          style={{
            width: '100%',
            height: '10vh',
            position: 'relative',
            overflow: ' auto'
          }}
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
        >
          <Image
            src={darkModeActive ? stripeB : stripeW}
            alt="Stripe"
            style={{ objectFit: 'contain' }}
            fill
            sizes="100vw"
          />
        </Grid>
      </>
    </Grid>
  )
}

/**
 *
 * @param TitreProduitProps
 *
 * @returns React.FC<TitreProduitProps>
 *
 * @todo Factoriser les composants titre et description
 */

const TitreBrut: React.FC<TitreProduitProps> = (props) => {
  const { product, classes } = props
  const [qtyProduct, setQtyProduct] = useState<number>()
  const { isMob } = useScreen()
  const { darkModeActive } = useDarkMode()

  const { addProduct, setCartOpen, cartOpen } = useCart()

  const tarif = parseFloat(product.price.toString())
  const price = (qtyProduct ?? 0) * tarif
  const prix = ` - ${price}€`

  return (
    <Grid className={classes.GridTitre}>
      <Typography className={classes.typoTitre} color="primary" variant={isMob ? 'h4' : 'h2'}>
        Champagne
      </Typography>
      <Typography className={classes.typoTitre} color="primary" variant={isMob ? 'h3' : 'h1'}>
        Brut
      </Typography>
      <Typography className={classes.typo} variant="h4" color="primary">
        L'HARMONIE PARFAITE
      </Typography>

      <Typography align="justify" className={classes.typo} variant="body1">
        Son raisin, issu principalement du Vytryat, de la Côte des Blancs et de la Vallée de la
        marne, est au cœur de toutes ses cuvées. Le cépage Chardonnay est l'âme de la Maison Pinte.
      </Typography>
      <Typography align="justify" className={classes.typo} variant="body1">
        Ce Brut est la Cuvée emblématique de la Maison depuis sa création, elle en est l'expression
        la plus accomplie et la plus universelle.
      </Typography>

      <>
        <Typography className={classes.typo} variant="h6" color="primary">
          {product.price} € Bouteille - 75 cL
        </Typography>
        <Grid>
          <TextField
            id="outlined-number"
            helperText="Bouteille(s)"
            type="number"
            color="primary"
            size="medium"
            className={classes.textField}
            onChange={(res) => {
              const value = parseInt(res.target.value, 10)
              if (!value) setQtyProduct(0)
              if (value < 10000) setQtyProduct(value)
            }}
            value={qtyProduct}
          />
        </Grid>
        <Grid>
          <ButtonStyled
            width={(qtyProduct ?? 0) > 0 ? 350 : 200}
            onClick={() => {
              if (qtyProduct && qtyProduct > 0) {
                setCartOpen(!cartOpen)
                addProduct(product, qtyProduct)
              }
            }}
            title={`Ajouter au panier ${(qtyProduct ?? 0) > 0 ? prix : ''}`}
            height={55}
          />{' '}
        </Grid>
        <Grid
          style={{
            width: '100%',
            height: '10vh',
            position: 'relative',
            overflow: ' auto'
          }}
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
        >
          <Image
            src={darkModeActive ? stripeB : stripeW}
            alt="Stripe"
            style={{ objectFit: 'contain' }}
            fill
            sizes="100vw"
          />
        </Grid>
      </>
    </Grid>
  )
}

export { TitreRose, TitreBrut }
