import React, { Dispatch, SetStateAction } from 'react'
import Grid from '@mui/material/Grid'
import FormControlLabel from '@mui/material/FormControlLabel'
// Import the languages you want to use
import { FormControl, Radio, RadioGroup, Typography } from '@mui/material'
import { useQuery } from '@apollo/client'
import { v4 as uuid } from 'uuid'
import { SHIPPING_METHODS } from '@/Modules/checkout/Request'
import dynamic from 'next/dynamic'
import { SHIPPINGS_shippings, SHIPPINGS } from '../checkout/__generated__/SHIPPINGS'
import useStyles from './style'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})
export interface ShippingMethodProps {
  shippingMethod: SHIPPINGS_shippings
  setShippingMethod: Dispatch<SetStateAction<SHIPPINGS_shippings>>
  isSubmitting: boolean
  // eslint-disable-next-line react/no-unused-prop-types
  setIsSubmitting: Dispatch<SetStateAction<boolean>>
}

const ShippingMethod: React.FC<ShippingMethodProps> = (props) => {
  const { shippingMethod, setShippingMethod, isSubmitting } = props
  const { classes } = useStyles()

  const { loading, data } = useQuery<SHIPPINGS>(SHIPPING_METHODS, {
    fetchPolicy: 'network-only'
  })

  if (loading) return <Loading />

  const shippings = (data && data.shippings) ?? []
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement
    let shipping
    shippings.forEach((shp: SHIPPINGS_shippings) => {
      if (shp.id === value) shipping = shp
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    shipping && setShippingMethod(shipping)
  }
  return (
    <Grid container>
      <FormControl error={isSubmitting && !shippingMethod.name} fullWidth required>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          value={shippingMethod.id ?? 0}
          onChange={handleChange}
          className={classes.shippingRadioButton}
        >
          {shippings &&
            shippings.map((shipping) => (
              <Grid
                key={uuid()}
                container
                direction="row"
                justifyContent="space-between"
                spacing={2}
              >
                <Grid color="secondary" item>
                  <FormControlLabel
                    value={shipping.id}
                    control={
                      <Radio
                        sx={{
                          color: isSubmitting && !shippingMethod.name ? 'red' : 'default'
                        }}
                      />
                    }
                    label={shipping.name ?? 'no name'}
                  />
                  {shipping.averageDuration}
                </Grid>

                <Grid item>
                  <Typography> {shipping.price}€</Typography>
                </Grid>
              </Grid>
            ))}
        </RadioGroup>
      </FormControl>
    </Grid>
  )
}
export default ShippingMethod
