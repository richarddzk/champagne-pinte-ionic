import React from 'react'
import { v4 as uuid } from 'uuid'
import { Product } from '@/Modules/ProductItem/interfaces'
import dynamic from 'next/dynamic'
import { Grid, Skeleton, Typography } from '@mui/material'
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
  description?: boolean
}

const descriptionBrut =
  'Cuvée emblématique de la Maison depuis sa création, la plus accomplie et la plus aboutie.'
const descriptionRose =
  'Intégration parfaite de toute la diversité de nos cépages dans un rosé sublimé.'

const HomeProduct: React.FC<HomeProductProps> = React.memo(
  ({ loading, products, backgroundColor, buttonPanier, description }) => {
    const { classes, theme } = useStylesProduct()
    let descriptionElmt: JSX.Element | undefined

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
          products.map((product) => {
            if (description) {
              descriptionElmt = (
                <Typography align="center" className={classes.typoJust} variant="h5">
                  {product.title?.toLowerCase() === 'brut' ? descriptionBrut : descriptionRose}
                </Typography>
              )
            }
            return (
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
                  description={descriptionElmt}
                  buttonPanier={buttonPanier}
                />
              </Grid>
            )
          })}
      </>
    )
  }
)
export default HomeProduct
