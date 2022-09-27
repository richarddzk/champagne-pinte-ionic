import { Typography, Paper, Grid, Button } from '@mui/material'
import Router from 'next/router'
import React from 'react'
import { GlobalStyles } from 'tss-react'
import { useCart } from '@/Main/Providers/CartProvider'
import { useAuth } from '@/Main/auth-provider/AuthProvider'
import useI18n from '../../Utils/hooks/use-i18n'
import { ProductComponentProps, ImageObject } from './interfaces'
import ButtonStyled from '../../Main/ButtonStyled'
import ProductImageSwiper from './ProductImageSwiper'

const ProductComponentSwiper: React.FC<ProductComponentProps> = (props) => {
  const {
    product,
    noProduct,
    classes,
    noButton,
    noTitle,
    elevation,
    height,
    backgroundColor,
    buttonPanier
  } = props
  const { title, images, id } = product

  const { addProduct } = useCart()
  const i18n = useI18n()
  const { activeLocale } = i18n

  const { auth } = useAuth()

  if (noProduct) {
    return <Typography className={classes.typo}>Aucune bouteille trouvé</Typography>
  }
  const makeImagesSlide = () => {
    const acc: ImageObject[] = []
    images.forEach((image: ImageObject) => {
      if (image.title && image.title !== 'icon') {
        acc.push({
          src: image.src,
          altText: `Slide ${id}`,
          caption: '',
          header: '',
          key: image.id,
          name: title,
          page: `/${activeLocale ?? 'fr'}/product/${id}`
        } as ImageObject)
      }
    })
    return acc
  }
  const items = makeImagesSlide()
  const onClick = () => {
    Router.push(`/${activeLocale ?? 'fr'}/product/${id}`)
  }
  return (
    <>
      {' '}
      <GlobalStyles
        styles={{
          '#middle': {
            transition: '.5s ease',
            opacity: 0,
            height: 0,
            transform: 'translate(-50%, -50%)',
            msTransform: 'translate(-50%, -50%)',
            textAlign: 'center'
          },

          '#container:hover #image': {
            opacity: 0.3
          },

          '#container:hover #middle': {
            opacity: 1
          },
          '#Button': {
            display: 'none'
          },

          '#item': {
            display: 'none'
          },
          '#container:hover #Button ': {
            display: 'unset'
          },
          '#container:hover #item ': {
            display: 'unset'
          }
        }}
      />
      <Paper
        className={classes.PaperSliderProduct}
        style={{
          height
        }}
        elevation={elevation}
      >
        <Grid id="container" item>
          <ProductImageSwiper
            height={height}
            images={items}
            classes={classes}
            backgroundColor={backgroundColor}
            onClick={onClick}
          />
          {!noTitle && (
            <Grid className={classes.gridTypo}>
              <Typography align="justify" className={classes.typo} variant="h6">
                {`Champagne ${title}`}
              </Typography>
            </Grid>
          )}
          {!noButton && (
            <div id="middle">
              <Grid direction="column" className={classes.gridButton} container spacing={4}>
                <Grid item>
                  <ButtonStyled
                    width={250}
                    height={50}
                    fullybackground={1}
                    title={`Découvrir notre ${title === 'Rose' ? 'Rosé' : title}`}
                    onClick={onClick}
                  />
                </Grid>
                {auth && buttonPanier && (
                  <Grid item>
                    <Button
                      id="Button"
                      variant="contained"
                      className={classes.button}
                      onClick={() => {
                        addProduct(product, 1)
                      }}
                    >
                      <Typography className={classes.typo}>Ajouter au panier</Typography>
                    </Button>
                  </Grid>
                )}
              </Grid>
            </div>
          )}
        </Grid>
      </Paper>
    </>
  )
}

export default React.memo(ProductComponentSwiper)
