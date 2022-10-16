import React from 'react'
import { PaymentElement } from '@stripe/react-stripe-js'
import { Grid, Typography, Button } from '@mui/material'
import dynamic from 'next/dynamic'

import loading2 from 'react-useanimations/lib/loading2'
import { v4 as uuid } from 'uuid'
import useScreen from '@/Utils/hooks/useScreen'
import { CheckoutFormProps } from './interface'

const UseAnimations = dynamic(() => import('react-useanimations'), {
  loading: () => <>...</>
})

const CheckoutForm: React.FC<CheckoutFormProps> = (props) => {
  const { classes, nbProduit, total, isLoading } = props
  const { isTablette } = useScreen()

  return (
    <>
      <PaymentElement id="payment-element" />

      {!isTablette && (
        <Grid style={{ textAlign: 'end' }} justifyContent="flex-end" alignItems="flex-end">
          <Typography className={classes.typo} variant="h6">
            Montant total ({nbProduit} {nbProduit === 1 ? 'bouteille' : 'bouteilles'}
            ):
            {total} €
          </Typography>
          <Button disabled={isLoading} id="submit" type="submit" variant="outlined">
            {isLoading ? (
              <UseAnimations
                key={uuid()}
                strokeColor="#CCBF90"
                size={35}
                // wrapperStyle={{ marginTop: '5px' }}
                animation={loading2}
              />
            ) : (
              'Passer la commande'
            )}
          </Button>
        </Grid>
      )}
    </>
  )
}

export default CheckoutForm
