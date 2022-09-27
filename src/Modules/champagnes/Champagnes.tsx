import React from 'react'
import { Grid } from '@mui/material'
import { useQuery } from '@apollo/client'
import { Main } from '@/Main'
import PathLink from '@/Main/PathLink'
import { GET_PRODUCTS as GET_PRODUCTS_TYPE } from './__generated__/GET_PRODUCTS'
import useStyles from './style'
import { GET_PRODUCTS } from '../home/Home'
import HomeProduct from '../home/HomeProduct'

const Champagnes: React.FC = () => {
  const { classes, theme } = useStyles()
  const { loading, data } = useQuery<GET_PRODUCTS_TYPE>(GET_PRODUCTS, {
    fetchPolicy: 'network-only'
  })
  const { products } = data ?? { products: [] }

  return (
    <Main>
      <Grid className={classes.gridProduct}>
        <PathLink />

        <Grid
          container
          justifyContent="space-evenly"
          alignItems="center"
          className={classes.productComponent}
        >
          <HomeProduct
            loading={loading}
            products={products}
            backgroundColor={theme.palette.mode !== 'dark' ? 'antiquewhite' : '#a39a8e'}
          />
        </Grid>
      </Grid>
    </Main>
  )
}
export default React.memo(Champagnes)
