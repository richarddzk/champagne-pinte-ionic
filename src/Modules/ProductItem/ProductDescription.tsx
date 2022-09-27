import { Grid } from '@mui/material'
import React from 'react'
import { useDarkMode } from 'next-dark-mode'
import useStyles from './style'
import useI18n from '../../Utils/hooks/use-i18n'
import { ProductDescriptionProps } from './interfaces'
import { TitreRose, TitreBrut } from './ProductTitre'

const ProductDescription: React.FC<ProductDescriptionProps> = (props) => {
  const { product } = props
  const { classes } = useStyles()
  const i18n = useI18n()
  const { activeLocale } = i18n
  const { darkModeActive } = useDarkMode()

  return (
    <Grid container direction="row">
      <Grid item style={{ textAlign: 'center' }} xs>
        {product && product.title && !product?.title.includes('Brut') ? (
          <TitreRose
            product={product}
            classes={classes}
            darkMode={darkModeActive}
            activeLocale={activeLocale}
          />
        ) : (
          <TitreBrut
            product={product}
            classes={classes}
            darkMode={darkModeActive}
            activeLocale={activeLocale}
          />
        )}
      </Grid>
    </Grid>
  )
}

export default React.memo(ProductDescription)
