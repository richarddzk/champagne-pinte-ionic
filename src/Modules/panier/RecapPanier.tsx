/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react'
import Grid from '@mui/material/Grid'
import { Divider, Paper, Typography } from '@mui/material'
import { v4 as uuid } from 'uuid'
import { useCart } from '@/Main/Providers/CartProvider'
import { ButtonStyled } from '@/Main'
import router from 'next/router'
import { useDarkMode } from 'next-dark-mode'

import { calculateTotal } from '@/Main/Cart/Cart'
import Image from '@/Utils/MidgardImage'
import useStyles from './style'
import { RecapPanierProps } from './interface'

import stripeW from '../../../public/image/utils/checkout/stripe2.webp'
import stripeB from '../../../public/image/utils/checkout/stripe1.webp'

const RecapPanier: React.FC<RecapPanierProps> = () => {
  const { classes } = useStyles()
  const { darkModeActive } = useDarkMode()

  const { Products, getTotalPrice, tt: nbProduit } = useCart()
  const total = getTotalPrice()

  return (
    <Paper className={classes.RecapPanier}>
      <Grid style={{ textAlign: 'end', paddingTop: 5 }} justifyContent="flex-end" alignItems="flex-end">
        <Typography className={classes.typoHeader} color="primary" variant="h5">
          RÉSUMÉ DE LA COMMANDE
        </Typography>

        <Grid className={classes.center} justifyContent="center" alignItems="center" item xs={12}>
          <Divider
            textAlign="center"
            variant="middle"
            style={{ marginTop: 10, marginBottom: 10, width: '75%' }}
          />
        </Grid>
        <Grid direction="column" container>
          <Grid direction="row" justifyContent="space-between" container>
            {Products && Object.keys(Products)[0] && (
              <Grid direction="row" justifyContent="space-between" container>
                <Grid item>
                  <Typography color="primary" className={classes.typo} variant="h6">
                    Articles ({nbProduit} {nbProduit === 1 ? 'bouteille' : 'bouteilles'}
                    ):
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography color="primary" className={classes.typo} variant="h6">
                    {calculateTotal(Products ?? []).toFixed(2)} €
                  </Typography>
                </Grid>
              </Grid>
            )}
            {Products &&
              Object.keys(Products).map((product) => (
                <Grid key={uuid()} direction="row" justifyContent="space-between" container>
                  <Grid item>
                    <Typography className={classes.typo} variant="h6">
                      {
                        // @ts-ignore
                        Products[`${product}`].amount
                      }{' '}
                      {
                        // @ts-ignore
                        Products[`${product}`].title
                      }
                      {
                        // @ts-ignore
                        Products[`${product}`].amount !== 1 && 's'
                      }
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.typo} variant="h6">
                      {
                        // @ts-ignore
                        Products[`${product}`].amount *
                          // @ts-ignore
                          parseInt(Products[`${product}`].price, 10)
                      }{' '}
                      €
                    </Typography>
                  </Grid>
                </Grid>
              ))}
          </Grid>
        </Grid>
        <Grid className={classes.center} justifyContent="center" alignItems="center" item xs={12}>
          <Divider
            textAlign="center"
            variant="middle"
            style={{ marginTop: 10, marginBottom: 10, width: '95%' }}
          />
        </Grid>

        <Grid direction="column" container>
          <Grid direction="row" justifyContent="space-between" container>
            <Grid item>
              <Typography color="primary" className={classes.typo} variant="h5">
                TVA incluse:{' '}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.typo} variant="h6">
                {(total * 0.196).toFixed(2)} €
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid direction="column" container>
          <Grid direction="row" justifyContent="space-between" container>
            <Grid item>
              <Typography color="primary" className={classes.typo} variant="h5">
                Montant total TTC:{' '}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.typo} variant="h6">
                {total}€
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.center} justifyContent="center" alignItems="center" item xs={12}>
        <Divider
          textAlign="center"
          variant="middle"
          style={{ marginTop: 10, marginBottom: 10, width: '75%' }}
        />
      </Grid>

      <ButtonStyled
        title="Commander"
        onClick={() => {
          router.push('  /paiement')
        }}
      />
      <Grid
        style={{
          width: '100%',
          height: '10vh',
          position: 'relative',
          overflow: ' auto'
        }}
        justifyContent="center"
        alignItems="center"
        item
        xs={12}
      >
        <Image
          src={darkModeActive ? stripeB : stripeW}
          alt="Stripe"
          style={{ objectFit: 'contain' }}
          fill
          sizes="100vw"
        />
      </Grid>
    </Paper>
  )
}
export default RecapPanier
