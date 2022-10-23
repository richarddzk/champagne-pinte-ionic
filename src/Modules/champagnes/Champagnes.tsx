import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import Image from '@/Utils/MidgardImage'
import useScreen from '@/Utils/hooks/useScreen'

import { useQuery } from '@apollo/client'
import { Main } from '@/Main'
import PathLink from '@/Main/PathLink'
import { GET_PRODUCTS as GET_PRODUCTS_TYPE } from './__generated__/GET_PRODUCTS'
import useStyles from './style'
import { GET_PRODUCTS } from '../home/Home'
import HomeProduct from '../home/HomeProduct'
import futBrutAndRose from '../../../public/image/produit/futBrutAndRose.webp'
import produitTable3 from '../../../public/image/table/produitTable3.webp'
import logo from '../../../public/image/logo/LogoSansFond.webp'

const Champagnes: React.FC = () => {
  const { classes } = useStyles()
  const { loading, data } = useQuery<GET_PRODUCTS_TYPE>(GET_PRODUCTS, {
    fetchPolicy: 'network-only'
  })
  const { products } = data ?? { products: [] }
  const { isMob } = useScreen()
  return (
    <Main>
      <Grid className={classes.gridProduct}>
        <Grid style={{ justifyContent: 'center' }} container item xs={12}>
          <PathLink />
        </Grid>
        <Grid className={classes.GridPaperVigne} container item xs={12}>
          <Paper className={classes.paperImage} elevation={5}>
            <Image
              style={{
                objectFit: 'cover'
              }}
              fill
              sizes="100vw"
              src={isMob ? produitTable3 : futBrutAndRose}
              alt="Logo"
              placeholder="blur"
              // blurDataURL={isMob ? vignefamMobBlur : vignefamBlur}
            />
          </Paper>

          <Paper className={classes.paperText} elevation={5}>
            <Grid item xs={12}>
              <Image src={logo} alt="Logo" width={60} height={70} />
            </Grid>{' '}
            <Grid item xs>
              <Typography color="primary" className={classes.typoText} variant="h5">
                Nos Cuvées
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align="justify" className={classes.typoText} variant="h6">
                Notre champagne est caractérisé par le cépage chardonnay qui est la signature de la
                Maison et la partie principale de toutes nos cuvées.
              </Typography>
              <Typography align="justify" className={classes.typoText} variant="h6">
                Son raisin, issu principalement du Vitryat et de la Côte des Blancs est au cœur de
                toutes ses cuvées.
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid className={classes.center} justifyContent="center" alignItems="center" item xs={12}>
          <Grid textAlign="center" style={{ marginTop: 50, marginBottom: 50, width: '50%' }} />
        </Grid>
        <Grid
          container
          justifyContent="space-evenly"
          alignItems="center"
          className={classes.productComponent}
        >
          <HomeProduct
            loading={loading}
            products={products}
            description
            backgroundColor="transparent"
          />
        </Grid>
      </Grid>
    </Main>
  )
}
export default React.memo(Champagnes)
