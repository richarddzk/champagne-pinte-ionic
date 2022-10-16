import { Typography, Paper, Grid, Button } from '@mui/material'
import Router from 'next/router'
import React, { useEffect } from 'react'
import { GlobalStyles } from 'tss-react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useCart } from '@/Main/Providers/CartProvider'
import { useAuth } from '@/Main/auth-provider/AuthProvider'

import { ProductComponentProps, ImageObject } from './interfaces'
import ProductImage from './ProductImage'

const ProductComponent: React.FC<ProductComponentProps> = (props) => {
  const {
    product,
    noProduct,
    classes,
    noButton,
    noTitle,
    elevation,
    height,
    width,
    slideDotBottom,
    slideDotColor
  } = props
  const { title, images, id } = product

  const { addProduct } = useCart()

  const { auth } = useAuth()
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0
  })
  const controls = useAnimation()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  if (noProduct) {
    return <Typography className={classes.typo}>Aucune bouteille trouvé</Typography>
  }
  const makeImagesSlide = () => {
    const acc: ImageObject[] = []
    images.forEach((image: ImageObject) => {
      if (!image.title || !['icon', 'ico'].includes(image.title)) {
        acc.push({
          src: image.src,
          altText: `Slide ${id}`,
          caption: '',
          header: '',
          key: image.id,
          name: title,
          page: ` /produit/${id}`
        } as ImageObject)
      }
    })
    return acc
  }
  return (
    <>
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
          },
          '.slick-dots': {
            bottom: slideDotBottom
          },
          ' .slick-dots li button:before': {
            color: slideDotColor
          }
        }}
      />
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ delay: 0.5, duration: 0.3 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 }
        }}
      >
        <Paper className={classes.gridProductContainer} elevation={elevation ?? 24}>
          <Grid className={classes.gridProductContainer} id="container" item>
            <ProductImage
              images={makeImagesSlide}
              classes={classes}
              height={height}
              width={width}
            />
            {!noTitle && (
              <Grid
                style={{
                  textAlign: 'center',
                  paddingBottom: 2,
                  height: 60
                }}
                item
              >
                <Typography
                  style={{
                    padding: 10,
                    font: 'italic 1.2em Times New Roman, serif'
                  }}
                  variant="subtitle1"
                  component="div"
                  gutterBottom
                  color="primary"
                >
                  Champagne {title}
                </Typography>
              </Grid>
            )}
            {!noButton && (
              <div id="middle">
                <Grid direction="column" className={classes.gridButton} container spacing={4}>
                  <Grid item>
                    <Button
                      id="Button"
                      variant="contained"
                      className={classes.button}
                      onClick={() => {
                        Router.push(` /produit/${id}`)
                      }}
                    >
                      <Typography className={classes.typo}>Découvrir</Typography>
                    </Button>
                  </Grid>
                  {auth && (
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
      </motion.div>
    </>
  )
}

export default React.memo(ProductComponent)
