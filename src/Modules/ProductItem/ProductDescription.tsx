import { Grid } from '@mui/material'
import React from 'react'
import { useDarkMode } from 'next-dark-mode'
import useStyles from './style'

import { ProductDescriptionProps } from './interfaces'
import { TitreRose, TitreBrut } from './ProductTitre'

const ProductDescription: React.FC<ProductDescriptionProps> = (props) => {
  const { product } = props
  const { classes } = useStyles()

  const { darkModeActive } = useDarkMode()

  return (
    <Grid container direction="row">
      <Grid item style={{ textAlign: 'center' }} xs>
        {product && product.title && !product?.title.includes('Brut') ? (
          <TitreRose
            product={product}
            classes={classes}
            darkMode={darkModeActive}
          />
        ) : (
          <TitreBrut
            product={product}
            classes={classes}
            darkMode={darkModeActive}
          />
        )}
      </Grid>
    </Grid>
  )
}

export default React.memo(ProductDescription)
