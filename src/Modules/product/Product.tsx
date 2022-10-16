import React from 'react'
import { Divider, Grid } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import { v4 as uuid } from 'uuid'
import { useQuery } from '@apollo/client'
import { Main } from '@/Main'
import { ProductComponent, ProductDescription } from '@/Modules/ProductItem'
import PathLink from '@/Main/PathLink'
import { Product } from '@/Modules/ProductItem/interfaces'
import dynamic from 'next/dynamic'
import { useDarkMode } from 'next-dark-mode'
import useScreen from '@/Utils/hooks/useScreen'
import useStyles from './style'
import ProductBrutBody from './ProductBrutBody'
import ProductRoseBody from './ProductRoseBody'

import { GET_PRODUCT as GET_PRODUCT_TYPE } from './__generated__/GET_PRODUCT'
import { GET_PRODUCT, ProductProps } from './interfaces'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})

const ProductModule: React.FC<ProductProps> = ({ id }) => {
  const { classes } = useStyles()

  const { loading, data } = useQuery<GET_PRODUCT_TYPE>(GET_PRODUCT, {
    variables: { id },
    fetchPolicy: 'network-only'
  })
  const { darkModeActive } = useDarkMode()
  const { isWideMob } = useScreen()

  if (loading) {
    return (
      <Main>
        <Loading />{' '}
      </Main>
    )
  }

  const { product } = data ?? { product: null }

  return (
    <Main>
      <Grid className={classes.gridProduct}>
        <PathLink />
        {product && (
          <Grid container alignItems="center" justifyContent="center" direction="column">
            <Grid container className={classes.GridTitre} direction={isWideMob ? 'column' : 'row'}>
              <Grid
                className={classes.ProductDescription}
                justifyContent="center"
                alignItems="center"
                item
                xs={isWideMob ? 12 : 5}
              >
                <ProductDescription product={product as unknown as Product} />
              </Grid>
              {loading ? (
                <Stack spacing={1}>
                  <Skeleton variant="text" />
                  <Skeleton variant="circular" width={40} height={40} />
                  <Skeleton variant="rectangular" width={210} height={118} />
                </Stack>
              ) : (
                <Grid key={uuid()} className={classes.gridImage} item xs={6}>
                  {product && (
                    <ProductComponent
                      classes={classes}
                      product={product as unknown as Product}
                      noProduct={!product}
                      noButton
                      noTitle
                      noAnimation
                      height="85vh"
                      width="100%"
                      elevation={0}
                      slideDotBottom={50}
                      slideDotColor={darkModeActive ? 'white' : '#ccbf90'}
                    />
                  )}
                </Grid>
              )}
            </Grid>
            <Grid
              className={classes.center}
              justifyContent="center"
              alignItems="center"
              item
              xs={12}
            >
              <Divider
                textAlign="center"
                variant="middle"
                style={{ paddingTop: 100, width: '50%' }}
              />
            </Grid>
            {product.title?.toLowerCase() === 'brut' ? (
              <ProductBrutBody product={product as unknown as Product} classes={classes} />
            ) : (
              <ProductRoseBody product={product as unknown as Product} classes={classes} />
            )}
          </Grid>
        )}
      </Grid>
    </Main>
  )
}
export { GET_PRODUCT }
export default React.memo(ProductModule)
