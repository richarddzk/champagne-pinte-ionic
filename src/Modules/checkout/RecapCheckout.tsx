/* eslint-disable @typescript-eslint/naming-convention */
import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import { Button, Divider, Paper, Step, StepButton, Stepper, Typography } from '@mui/material'
import dynamic from 'next/dynamic'
import { v4 as uuid } from 'uuid'
import { useStripe, useElements } from '@stripe/react-stripe-js'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice'
import { useCart } from '@/Main/Providers/CartProvider'
import loading2 from 'react-useanimations/lib/loading2'
import Image from '@/Utils/MidgardImage'
import { useDarkMode } from 'next-dark-mode'
import useStyles from './style'
import { RecapCheckoutProps } from './interface'
import stripeW from '../../../public/image/utils/checkout/stripe2.webp'
import stripeB from '../../../public/image/utils/checkout/stripe1.webp'

const UseAnimations = dynamic(() => import('react-useanimations'), {
  loading: () => <>...</>
})

const steps = [
  { label: 'Livraison', icon: <LocalShippingIcon /> },
  { label: 'Facturation', icon: <LocalPostOfficeIcon /> }
]

const RecapCheckout: React.FC<RecapCheckoutProps> = ({ props }) => {
  const { isLoading, shippingMethod, total, addressLivraison, addressFacturation } = props

  const [activeStep, setActiveStep] = useState(0)
  const { darkModeActive } = useDarkMode()

  const stripe = useStripe()
  const elements = useElements()
  const { classes } = useStyles()
  const handleStep = (step: number) => () => {
    setActiveStep(step)
  }
  const { Products } = useCart()

  const TT = total ? parseFloat(total) : 0
  const TVA = TT * 0.196
  const SHIPPING = shippingMethod ? shippingMethod.price : 0
  const TTC = TT + TVA + SHIPPING

  return (
    <Paper className={classes.PaperRecapCheckout}>
      <Grid style={{ textAlign: 'end' }} justifyContent="flex-end" alignItems="flex-end">
        <Typography className={classes.typoHeader} color="primary" variant="h5">
          Recapitulatif de la commande
        </Typography>
        <Stepper style={{ marginBottom: 10 }} nonLinear activeStep={activeStep}>
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepButton
                key={uuid()}
                style={{ color: activeStep === index ? '#CCBF90' : 'black' }}
                icon={step.icon}
                onClick={handleStep(index)}
              >
                {step.label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        {addressLivraison && addressFacturation && (
          <Grid direction="column" container>
            <Grid direction="row" justifyContent="space-between" container>
              <Grid item>
                <Typography className={classes.typo} variant="h6">
                  {activeStep === 0 ? addressLivraison.firstName : addressFacturation.firstName}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.typo} variant="h6">
                  {activeStep === 0 ? addressLivraison.lastName : addressFacturation.lastName}
                </Typography>
              </Grid>
            </Grid>
            <Grid direction="row" justifyContent="space-between" container>
              <Grid item>
                <Typography className={classes.typo} variant="h6">
                  {activeStep === 0 ? addressLivraison.address_1 : addressFacturation.address_1}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.typo} variant="h6">
                  {activeStep === 0 ? addressLivraison.address_2 : addressFacturation.address_2}
                </Typography>
              </Grid>
            </Grid>
            <Grid direction="row" justifyContent="space-between" container>
              <Grid item>
                <Typography className={classes.typo} variant="h6">
                  {activeStep === 0 ? addressLivraison.state : addressFacturation.state}{' '}
                  {activeStep === 0 ? addressLivraison.zip : addressFacturation.zip}
                </Typography>
              </Grid>
              <Grid item>
                {addressLivraison.country && (
                  <Typography className={classes.typo} variant="h6">
                    {
                      // eslint-disable-next-line no-nested-ternary
                      activeStep === 0 ? addressLivraison.country : addressFacturation.country
                    }
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Grid>
        )}
        <Grid className={classes.center} justifyContent="center" alignItems="center" item xs={12}>
          <Divider
            textAlign="center"
            variant="middle"
            style={{ marginTop: 10, marginBottom: 10, width: '75%' }}
          />
        </Grid>
        <Grid direction="column" container>
          <Grid direction="row" justifyContent="space-between" container>
            <Grid item>
              <Typography color="primary" className={classes.typo} variant="h6">
                Articles:
              </Typography>
            </Grid>
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
                </Grid>
              ))}
          </Grid>

          <Grid direction="row" justifyContent="space-between" container>
            <Grid item>
              <Typography color="primary" className={classes.typo} variant="h6">
                Livraison:
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.typo} variant="h6">
                {SHIPPING} €
              </Typography>
            </Grid>
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
                Montant article:{' '}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.typo} variant="h6">
                {TT.toFixed(2)} €
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid direction="column" container>
          <Grid direction="row" justifyContent="space-between" container>
            <Grid item>
              <Typography color="primary" className={classes.typo} variant="h5">
                TVA:{' '}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.typo} variant="h6">
                {TVA.toFixed(2)} €
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
                {TTC.toFixed(2)} €
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
      {shippingMethod.id !== 0 ? (
        <Button
          className={classes.typoButtonCommander}
          variant="outlined"
          disabled={isLoading || !stripe || !elements}
          id="submit"
          type="submit"
        >
          {isLoading ? (
            <UseAnimations
              key={uuid()}
              strokeColor="#CCBF90"
              fillColor="#CCBF90"
              size={35}
              // wrapperStyle={{ marginTop: '5px' }}
              animation={loading2}
            />
          ) : (
            'Passer la commande'
          )}
        </Button>
      ) : (
        <Button className={classes.typoButtonCommander} variant="outlined" disabled>
          Selectionnez un mode de livraison
        </Button>
      )}
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
export default RecapCheckout
export { steps }
