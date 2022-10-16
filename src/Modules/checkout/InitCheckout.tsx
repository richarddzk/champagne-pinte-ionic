/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, useEffect } from 'react'
import { Grid, AppBar, Button, Typography } from '@mui/material'
import GlobalStyles from '@mui/material/GlobalStyles'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js'
import { useDarkMode } from 'next-dark-mode'
import { useRouter } from 'next/router'
import Image from '@/Utils/MidgardImage'
import dynamic from 'next/dynamic'
import loading2 from 'react-useanimations/lib/loading2'
import { v4 as uuid } from 'uuid'
import { Logout } from '@mui/icons-material'
import Loading from '@/Utils/Loading'
import { useCart } from '@/Main/Providers/CartProvider'
import getEnvBackend from '@/Utils/hooks/getEnvBackend'
import { useAuth } from '@/Main/auth-provider/AuthProvider'
import { calculateTotal } from '@/Main/Cart/Cart'
import Page from '@/Main/Page'
import useScreen from '@/Utils/hooks/useScreen'
import Checkout from './Checkout'
import useStyles from './style'
import mainLogoW from '../../../public/image/logo/logoVierge2.webp'
import mainLogoB from '../../../public/image/logo/pintechamplisse2Or.webp'

const UseAnimations = dynamic(() => import('react-useanimations'), {
  loading: () => <>...</>
})

const stripePromise = loadStripe(
  'pk_test_51KcbnjEavfjeo6MbIWuvdM6o8BXywiXwEVmGGaVSo6Qe4hKFMRj5qZwL3Xgiygx9jFAQ4hfbgifKqQ7tWmfEMGQJ00nUwwWALc'
)

const InitCheckout: React.FC = () => {
  const [clientData, setClientData] = useState<any>()
  const { darkModeActive } = useDarkMode()

  const { url } = getEnvBackend()

  const { auth, UserInfos: data } = useAuth()
  const { classes, css } = useStyles()
  const router = useRouter()

  const { Products } = useCart()
  const { email, lastName } = (auth && auth) ?? {
    email: 'email',
    lastName: 'lastName'
  }
  const { isTablette } = useScreen()

  const total = calculateTotal(Products).toFixed(2)
  const [shippingMethod, setShippingMethod] = useState({ id: 0, price: 0 })

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    auth &&
      fetch(
        `${url}api/charge/intent/?${new URLSearchParams({
          email,
          // cent in stripe
          amount: (parseInt(total, 10) * 100).toString(),
          lastName
        } as any)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then((res) => {
        const result = res.json()

        // tslint:disable-next-line: no-shadowed-variable
        result.then((resData) => {
          setClientData && setClientData(resData)
        })
      })
  }, [])

  const options: StripeElementsOptions = {
    // passing the client secret obtained in step 2
    clientSecret: (clientData && clientData.client_secret) ?? 'noSecret',
    // Fully customizable with appearance API.
    appearance: {
      theme: darkModeActive ? 'night' : 'stripe',
      variables: {
        colorPrimary: '#CCBF90',
        colorBackground: darkModeActive ? 'black' : 'white',
        colorText: darkModeActive ? 'white' : 'black'
      }
    }
  }

  if (!data) {
    if (!auth) {
      return (
        <Grid container className={classes.container}>
          <Grid item className={classes.item} xs>
            <Button
              key={uuid()}
              startIcon={<Logout fontSize="small" />}
              onClick={() => {
                router.push('  /connexion')
              }}
              className={classes.typo}
            >
              Se connecter
            </Button>
            <Button
              key={uuid()}
              onClick={() => {
                router.push('  /connexion')
              }}
              className={classes.typo}
            >
              Commander sans compte ?
            </Button>
          </Grid>
        </Grid>
      )
    }

    return <Loading />
  }
  const { customers } = (data && data) ?? {
    customers: [{ addresses: [], id: null }]
  }
  const { addresses } = (customers && customers[0]) ?? { addresses: [] }

  return (
    <Page>
      <GlobalStyles
        styles={{
          '*': {
            scrollbarWidth: 'thin',
            scrollbarColor: '#CCBF90 white'
          },

          /* Works on Chrome, Edge, and Safari */
          '*::-webkit-scrollbar': {
            width: '12px'
          },

          '*::-webkit-scrollbar-track': {
            borderRadius: '20px',
            opacity: 0
            // background: !darkModeActive ? '#fff' : '#233132',
          },

          '*::-webkit-scrollbar-thumb': {
            opacity: 0.75,
            backgroundColor: '#CCBF90',
            borderRadius: '20px',
            border: '3px solid ',
            borderColor: !darkModeActive ? '#fff' : '#233132'
          }
        }}
      />
      <AppBar className={classes.appBar} position="static">
        <Grid container>
          <Grid item xs={isTablette ? 6 : 0}>
            <Button
              onClick={() => {
                router.push(' /')
              }}
              className={css({ padding: 4 })}
            >
              <Image
                alt="mainLogoB"
                width={123}
                height={60.6}
                src={!darkModeActive ? mainLogoW : mainLogoB}
              />
            </Button>
          </Grid>
          <Grid item className={classes.typoButton} xs>
            <Typography
              variant="h6"
              component="div"
              className={classes.typoButton}
              sx={{ flexGrow: 1 }}
            >
              Finalisation commande
            </Typography>
          </Grid>
        </Grid>
      </AppBar>

      {clientData && clientData.client_secret ? (
        <Elements options={options} stripe={stripePromise}>
          <Checkout
            clientData={{
              ...clientData,
              customerId: customers && customers[0].id
            }}
            total={total}
            addresses={addresses}
            shippingMethod={shippingMethod}
            setShippingMethod={setShippingMethod}
            options={options}
            stripePromise={stripePromise}
          />
        </Elements>
      ) : (
        <Grid
          justifyContent="center"
          alignItems="center"
          style={{ height: '80vh', width: '100vw' }}
          container
        >
          <UseAnimations
            key={uuid()}
            strokeColor="#CCBF90"
            fillColor="#CCBF90"
            size={70}
            // wrapperStyle={{ marginTop: '5px' }}
            animation={loading2}
          />
        </Grid>
      )}
    </Page>
  )
}

export default InitCheckout
