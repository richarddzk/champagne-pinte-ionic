import React, { useEffect, useState } from 'react'
import { Grid, Typography, Button, Divider } from '@mui/material'
import { useRouter } from 'next/router'
import { v4 as uuid } from 'uuid'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
import { useSnackbar } from 'notistack'
import { useCart } from '@/Main/Providers/CartProvider'
import { PanierItem } from '@/Main/Cart/CartItem'
import { AddressForm } from '@/Modules/account'
import ShippingMethod from '@/Modules/account/ShippingMethod'

import CheckoutForm from './CheckoutForm'
import usePaymentForm from './usePaymentForm'
import RecapCheckout from './RecapCheckout'
import { CheckoutProps, UserAddress } from './interface'
import useStyles from './style'

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const Checkout: React.FC<CheckoutProps> = (props) => {
  const { clientData, total, addresses, shippingMethod, setShippingMethod } = props

  const [isLoading, setIsLoading] = useState(false)

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [address, setAddress] = useState<UserAddress>(addresses[0] as UserAddress)
  const [addressLivraison, setAddressLivraison] = useState<UserAddress>(addresses[0] as UserAddress)
  const [addressFacturation, setAddressFacturation] = useState<UserAddress>(
    addresses[0] as UserAddress
  )

  const { classes } = useStyles()

  const { enqueueSnackbar } = useSnackbar()

  const router = useRouter()

  const { Products, tt: nbProduit } = useCart()

  const [sameFacturation, setSameFacturation] = useState(true)

  useEffect(() => {
    if (
      ((addressFacturation && addressFacturation.id !== addressLivraison.id) ||
        !addressFacturation) &&
      sameFacturation
    ) {
      setAddressFacturation(addressLivraison)
    }
    if (!address) {
      setAddress(addressLivraison)
    }
  }, [sameFacturation, addressLivraison])

  const TTC =
    (shippingMethod && shippingMethod.price ? shippingMethod.price : 0) + parseInt(total, 10)

  const { handleSubmit } = usePaymentForm({
    setIsLoading,
    clientData,
    enqueueSnackbar,
    setIsSubmitting,
    shippingMethod,
    TTC,
    address,
    addressLivraison: {
      ...addressLivraison,
      isFacturation: sameFacturation
    },
    addressFacturation: {
      ...addressFacturation,
      isFacturation: true
    }
  })

  return (
    <form id="payment-form" className={classes.FormCheckout} onSubmit={handleSubmit}>
      <Grid
        // direction="row"
        className={classes.GridContainer}
        justifyContent="center"
        alignItems="start"
        container
        item
      >
        <Grid className={classes.MainGrid} item xs>
          <Grid container direction="column">
            <Button
              startIcon={<KeyboardReturnIcon />}
              variant="outlined"
              style={{ marginTop: 10, maxWidth: 100 }}
              onClick={() => {
                router.push('  /panier')
              }}
            >
              Retour
            </Button>
            <AddressForm
              props={{
                addresses,
                adresse: addressLivraison,
                setAddress: setAddressLivraison,
                isSubmitting,
                sameFacturation,
                isFacturation: false,
                setSameFacturation,
                setIsSubmitting
              }}
            />

            {!sameFacturation && (
              <Grid
                style={{ textAlign: 'start', width: '100%' }}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <AddressForm
                  props={{
                    addresses,
                    adresse: addressFacturation,
                    setAddress: setAddressFacturation,
                    sameFacturation,
                    isFacturation: true,
                    isSubmitting,
                    setIsSubmitting
                  }}
                />

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
                    style={{ marginTop: 50, marginBottom: 50, width: '95%' }}
                  />
                </Grid>
              </Grid>
            )}
            <Grid
              style={{ textAlign: 'start' }}
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Grid container direction="row" justifyContent="space-between" spacing={2}>
                <Typography className={classes.typoHeader} color="primary" variant="h6">
                  Mode de livraison
                </Typography>
                <Typography className={classes.typoHeader} color="primary" variant="h6">
                  Frais
                </Typography>
              </Grid>
              <ShippingMethod
                shippingMethod={shippingMethod}
                setShippingMethod={setShippingMethod}
                isSubmitting={isSubmitting}
                setIsSubmitting={setIsSubmitting}
              />
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
                  style={{ marginTop: 50, marginBottom: 50, width: '95%' }}
                />
              </Grid>
            </Grid>
            <Typography className={classes.typoHeader} color="primary" variant="h6">
              Votre commande
            </Typography>
            <Grid justifyContent="center" alignItems="center">
              {Products &&
                Object.keys(Products).map((item) => {
                  // @ts-ignore
                  const product = Products[`${item}`]
                  return (
                    <>
                      <PanierItem checkout key={uuid()} item={product} main={false} />
                      <Grid
                        key={uuid()}
                        className={classes.center}
                        justifyContent="center"
                        alignItems="center"
                        item
                        xs={12}
                      >
                        <Divider
                          key={uuid()}
                          textAlign="center"
                          variant="middle"
                          style={{
                            marginTop: 100,
                            marginBottom: 50,
                            width: '95%'
                          }}
                        />
                      </Grid>
                    </>
                  )
                })}
            </Grid>
            <Typography className={classes.typoHeader} color="primary">
              Mode de paiement
            </Typography>
            <div className={classes.center}>
              {shippingMethod.name ? (
                <CheckoutForm
                  classes={classes}
                  nbProduit={nbProduit}
                  total={
                    (shippingMethod && shippingMethod.price ? shippingMethod.price : 0) +
                    parseInt(total, 10)
                  }
                  isLoading={isLoading}
                />
              ) : (
                <Typography className={classes.typoHeader} color="primary">
                  Selectionnez un moyen de livraison
                </Typography>
              )}
            </div>
          </Grid>
        </Grid>
        <Grid item>
          <RecapCheckout
            props={{
              isLoading,
              shippingMethod,
              total,
              addressLivraison,
              addressFacturation,
              setIsSubmitting
            }}
          />
        </Grid>
      </Grid>
    </form>
  )
}

export default Checkout
