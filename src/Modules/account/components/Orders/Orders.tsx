/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Link } from '@mui/material'
import useI18n from '@/Utils/hooks/use-i18n'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import useStyles from '../../style'
import { OrdersProps } from './interfaces'
import OrderComponent from './OrderComponent'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})
const Orders: React.FC<OrdersProps> = (props) => {
  const { classes } = useStyles()
  const i18n = useI18n()
  const { activeLocale } = i18n
  const router = useRouter()
  const { orders } = props
  return orders && orders.length > 0 ? (
    <Grid container direction="column">
      <Typography className={classes.typoHeader} color="primary">
        Commandes
      </Typography>
      <Divider
        textAlign="center"
        variant="middle"
        style={{ marginTop: 10, marginBottom: 20, width: '95%' }}
      />

      {orders ? <OrderComponent orders={orders} /> : <Loading />}
    </Grid>
  ) : (
    <Grid className={classes.center} justifyContent="center" alignItems="center" item xs={12}>
      <Divider
        textAlign="center"
        variant="middle"
        style={{ marginTop: 50, marginBottom: 50, width: '95%' }}
      />
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h6"
        id="tableTitle"
        component="div"
        className={classes.typoHeader}
        color="primary"
      >
        Vous n'avez pas de commande.... Tester notre champagne dès maintenant
      </Typography>

      <Link
        style={{ fontFamily: 'Fira Sans , serif', cursor: 'pointer' }}
        component="button"
        color="primary"
        variant="h4"
        onClick={() => {
          // @ts-ignore
          router.push(`/${activeLocale}/champagnes`)
        }}
      >
        Nos Champagnes
      </Link>
      <Divider
        textAlign="center"
        variant="middle"
        style={{ marginTop: 50, marginBottom: 50, width: '95%' }}
      />
    </Grid>
  )
}

export default React.memo(Orders)
