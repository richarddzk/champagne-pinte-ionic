import React from 'react'
import { v4 as uuid } from 'uuid'
import { Product } from '@/Modules/ProductItem/interfaces'
import dynamic from 'next/dynamic'
import { Grid, Skeleton } from '@mui/material'
import { GET_PRODUCTS_products } from '../champagnes/__generated__/GET_PRODUCTS'
import useStylesProduct from './stylesProduct'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})

const ProductComponentSwiper = dynamic(
  () => import('@/Modules/ProductItem/ProductComponentSwiper'),
  {
    loading: () => <Loading />
  }
)

export interface HomeProductProps {
  loading: boolean
  products?: GET_PRODUCTS_products[]
  backgroundColor?: string
  buttonPanier?: boolean
}

const HomeProduct: React.FC<HomeProductProps> = React.memo(
  ({ loading, products, backgroundColor, buttonPanier }) => {
    const { classes, theme } = useStylesProduct()

    return loading ? (
      <>
        {['first', 'second'].map(() => (
          <Grid key={uuid()} className={classes.gridImage} item>
            <Skeleton variant="rectangular" width={210} height={600} />
          </Grid>
        ))}
      </>
    ) : (
      <>
        {products &&
          products.map((product) => (
            <Grid key={uuid()} className={classes.gridImage} item>
              <ProductComponentSwiper
                product={product as unknown as Product}
                classes={classes}
                noProduct={!product}
                height={600}
                elevation={2}
                theme={theme}
                noTitle
                backgroundColor={backgroundColor}
                buttonPanier={buttonPanier}
              />
            </Grid>
          ))}
      </>
    )
  }
)
export default HomeProduct
