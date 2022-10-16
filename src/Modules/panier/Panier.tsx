import React from 'react'
import { Grid, Typography, Button, Divider } from '@mui/material'
import { useRouter } from 'next/router'
import { v4 as uuid } from 'uuid'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useCart } from '@/Main/Providers/CartProvider'
import { PanierItem } from '@/Main/Cart/CartItem'
import PathLink from '@/Main/PathLink'

import useStyles from './style'
import { PanierProps } from './interface'
import RecapPanier from './RecapPanier'

const Panier: React.FC<PanierProps> = (props) => {
  const { account } = props
  const { classes } = useStyles()
  const { Products, tt: nbProduit } = useCart()

  const router = useRouter()

  const handleProduct = () => {
    router.push('  /champagnes')
  }

  return (
    <Grid container className={account ? classes.mainGridAccount : classes.mainGridFull}>
      {!account && <PathLink />}
      <Grid sx={{ placeContent: 'center' }} container>
        <Grid className={classes.MainGrid} item xs justifyContent="center" alignItems="center">
          {(!Products || Object.keys(Products).length === 0) && (
            <Grid item justifyContent="center" xs={12}>
              <Grid justifyContent="center" container>
                <Typography className={classes.typo} variant="h4">
                  Votre panier est vide.
                </Typography>
              </Grid>
              <Grid justifyContent="center" container>
                <Button
                  className={classes.typoButton}
                  size="small"
                  onClick={handleProduct}
                  endIcon={<ArrowForwardIosIcon color="primary" />}
                >
                  Choisissez du champagne
                </Button>
              </Grid>
            </Grid>
          )}
          {Products && Object.keys(Products)[0] && (
            <Grid direction="row" justifyContent="space-between" container>
              <Grid item>
                <Typography color="primary" className={classes.typo} variant="h6">
                  Votre panier ( {nbProduit} Article{nbProduit >= 1 && 's'})
                </Typography>
              </Grid>
            </Grid>
          )}
          <Grid sx={{ marginTop: 5 }} justifyContent="center" item alignItems="center">
            {Products &&
              Object.keys(Products).map((item) => {
                // @ts-ignore
                const product = Products[`${item}`]
                return (
                  <div key={uuid()}>
                    {/* <motion.div key={uuid()} whileHover={{ scale: 1.05 }}> */}
                    <PanierItem key={uuid()} item={product} main />
                    {/* </moPanierItemtion.div> */}
                    <Grid
                      className={classes.center}
                      justifyContent="center"
                      alignItems="center"
                      item
                      xs={12}
                      key={uuid()}
                    >
                      <Divider
                        key={uuid()}
                        textAlign="center"
                        variant="middle"
                        style={{ marginTop: 50, marginBottom: 50, width: '95%' }}
                      />
                    </Grid>
                  </div>
                )
              })}
          </Grid>
        </Grid>
        {Products && Object.keys(Products).length !== 0 && (
          <Grid item justifyContent="center" alignItems="center">
            <RecapPanier />
          </Grid>
        )}
      </Grid>
    </Grid>
  )
}

export default Panier
