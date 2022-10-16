import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import useStyles from '../../style'
import { OrderDetailsProps } from './interfaces'

const OrderDetails: React.FC<OrderDetailsProps> = (props) => {
  const { lineItem } = props
  const { product, price, quantity } = lineItem
  const { description, title } = product

  const { classes } = useStyles()

  return (
    <Grid container justifyContent="space-between" direction="row">
      <Grid item>
        <Typography className={classes.typoOrderLines}>{title}</Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.typoOrderLines}>description : {description}</Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.typoOrderLines}>{price} €/Unit</Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.typoOrderLines}>{quantity} Bouteilles</Typography>
      </Grid>
    </Grid>
  )
}

export default OrderDetails
