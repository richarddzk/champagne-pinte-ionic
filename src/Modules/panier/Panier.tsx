import React from 'react'
import { Grid, Typography, Button, Divider } from '@mui/material'
import { useRouter } from 'next/router'
import { v4 as uuid } from 'uuid'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useCart } from '@/Main/Providers/CartProvider'
import { ButtonStyled } from '@/Main'
import { PanierItem } from '@/Main/Cart/CartItem'
import PathLink from '@/Main/PathLink'
import { calculateTotal } from '@/Main/Cart/Cart'
import useI18n from '../../Utils/hooks/use-i18n'
import useStyles from './style'
import { PanierProps } from './interface'

const Panier: React.FC<PanierProps> = (props) => {
  const { account } = props
  const { classes } = useStyles()
  const { Products, tt: nbProduit } = useCart()

  const i18n = useI18n()
  const { activeLocale } = i18n
  const router = useRouter()

  const handleProduct = () => {
    router.push(`/${activeLocale}/champagnes`)
  }

  return (
    <Grid className={account ? classes.mainGridAccount : classes.mainGridFull}>
      <PathLink />
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
      <Grid justifyContent="center" alignItems="center">
        {Products &&
          Object.keys(Products).map((item) => {
            // @ts-ignore
            const product = Products[`${item}`]
            return (
              <div key={uuid()}>
                {/* <motion.div key={uuid()} whileHover={{ scale: 1.05 }}> */}
                <PanierItem key={uuid()} item={product} main />
                {/* </motion.div> */}
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

      {Products && Object.keys(Products)[0] && (
        <Grid style={{ textAlign: 'end' }} justifyContent="flex-end" alignItems="flex-end">
          <Typography className={classes.typo} variant="h6">
            Total(
            {nbProduit} {nbProduit === 1 ? 'bouteille' : 'bouteilles'}
            ): {calculateTotal(Products ?? []).toFixed(2)} €
          </Typography>
          <ButtonStyled
            title="Commander"
            onClick={() => {
              router.push(`/${activeLocale}/checkout`)
            }}
          />
        </Grid>
      )}
    </Grid>
  )
}

export default Panier
