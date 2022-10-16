import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { TimelineConnector } from '@mui/lab'
import { Product } from '@/Modules/ProductItem/interfaces'

export interface ProductBodyProps {
  product: Product
  classes: any
}

const ProductBrutBody: React.FC<ProductBodyProps> = (props) => {
  const { product, classes } = props
  let background1: any
  let background2: any

  product.images.forEach((image: any) => {
    if (image.src.includes('background2')) background1 = image
    else if (image.src.includes('background')) background2 = image
  })
  return (
    <Grid direction="row" container className={classes.gridMainDescription} spacing={2}>
      <Grid direction="row" style={{ justifyContent: 'center' }} container>
        <Paper
          style={{
            width: '80vw',
            height: '90vh',
            backgroundImage: `url(${background2?.src ?? ''})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          elevation={5}
        >
          <Paper className={classes.paperText} elevation={5}>
            <Typography className={classes.typo} variant="h5">
              COMPOSITION
            </Typography>
            <Typography className={classes.typo} variant="h6">
              ASSEMBLAGE
            </Typography>
            <Typography className={classes.typo} variant="body1">
              80 % Chardonnay de différentes années (20 à 25 % de vins de réserve des 2 années
              précédentes). Notre Brut un assemblage parfaitement abouti de plus de 200 crus, dans
              lequel les trois cépages champenois se complètent harmonieusement:
            </Typography>
            <Typography className={classes.typo} variant="h6">
              VINIFICATION
            </Typography>
            <Typography className={classes.typo2} variant="body1">
              Caractéristiques de l’année en Champagne Degré potentiel : 10.3°
            </Typography>
            <Typography className={classes.typo2} variant="body1">
              Acidité totale : 7.5 gH2SO4/l
            </Typography>
            <Typography className={classes.typo2} variant="body1">
              Vendanges manuelles
            </Typography>
            <Typography className={classes.typo2} variant="body1">
              Fermentation alcoolique en cuves inox thermorégulées
            </Typography>
            <Typography className={classes.typo2} variant="body1">
              Fermentation malolactique
            </Typography>
            <Typography className={classes.typo2} variant="body1">
              Dosage : 5,5 g/l
            </Typography>
          </Paper>
        </Paper>
      </Grid>
      <TimelineConnector />
      <Grid direction="row" style={{ marginTop: 50, justifyContent: 'center' }} container>
        <Paper
          style={{
            width: '80vw',
            height: '90vh',
            backgroundImage: `url(${background1?.src ?? ''})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom'
          }}
          elevation={5}
        >
          <Paper className={classes.paperTextRight} elevation={5}>
            <Typography className={classes.typo} variant="h5">
              NOTES DE DÉGUSTATION
            </Typography>
            <Typography className={classes.typo} variant="body1">
              La robe est d'un or profond, parée de nuances ambrées. Une robe brillante et
              lumineuse.
            </Typography>

            <Typography className={classes.typo2} variant="body1">
              Un nez éclatant, complet et changeant, mêlant les fleurs aux fruits puis le végétal au
              minéral. Son nez révèle des fruits à chair blanche , des agrumes, complétés de nuances
              florales
            </Typography>
            <Typography className={classes.typo2} variant="body1">
              De la fraîcheur de la rhubarbe et de la menthe à la minéralité de la cendre et du
              poivre blanc.
            </Typography>
            <Typography className={classes.typo} variant="h5">
              UN PALAIS SUBTIL
            </Typography>
            <Typography className={classes.typo2} variant="body1">
              Attaque en bouche très franche. Un vin équilibré, assez rond et charnu à l’attaque
              avec des arômes de fruits mûrs. La finale est longue, le dosage bien intégré laisse
              place à une fraîcheur caractéristique du chardonnay, très présent dans l’assemblage.
            </Typography>
            <Typography className={classes.typo2} variant="body1">
              Un champagne parfait pour l’apéritif, qui pourra également se servir en entrée sur des
              plats légers et fins comme des huîtres pochées, des coquilles Saint Jacques à la
              plancha.
            </Typography>
          </Paper>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default React.memo(ProductBrutBody)
