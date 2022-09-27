import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import TimelineConnector from '@mui/lab/TimelineConnector'
import { ProductBodyProps } from './ProductBrutBody'

const ProductRoseBody: React.FC<ProductBodyProps> = (props) => {
  const { product, classes } = props
  let background1: any
  let background2: any

  product.images.forEach((image: any) => {
    if (image.src.includes('background2')) background1 = image
    else if (image.src.includes('background')) background2 = image
  })
  return (
    <Grid
      direction="row"
      container
      xs={12}
      className={classes.gridMainDescription}
      spacing={2}
    >
      <Grid direction="row" style={{ justifyContent: 'center' }} container>
        <Paper
          style={{
            width: '80vw',
            height: '90vh',
            backgroundImage: `url(${background2?.src ?? ''})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maxHeight: '100%',
            overflow: ' auto',
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
              L’assemblage du Rosé reflète la complémentarité des trois cépages
              qui le composent : Sa singularité repose sur l’équilibre unique de
              son assemblage de Chardonnay, cépage signature de la Maison,
              l’intensité du Pinot Noire et la rondeur du Pinot Meunier.
            </Typography>
            <Typography className={classes.typo} variant="h6">
              PROVENANCE
            </Typography>
            <Typography className={classes.typo2} variant="body1">
              45 % de chardonnay Vytryat et de la Côte des Blancs. 25 % pinot
              noir et 20 % de meunier de la Vallée de la Marne.
            </Typography>
            <Typography className={classes.typo2} variant="body1">
              L’harmonie, quête fondatrice de la Maison, se construit ici sur
              des contrastes et des oppositions parfois aux limites de la
              contradiction.
            </Typography>
          </Paper>
        </Paper>
      </Grid>
      <TimelineConnector />
      <Grid
        direction="row"
        style={{ marginTop: 50, justifyContent: 'center' }}
        container
      >
        <Paper
          style={{
            width: '80vw',
            height: '90vh',
            backgroundImage: `url(${background1?.src ?? ''})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            maxHeight: '100%',
            overflow: 'hidden',
          }}
          elevation={5}
        >
          <Paper className={classes.paperTextRight} elevation={5}>
            <Typography className={classes.typo} variant="h5">
              NOTES DE DÉGUSTATION
            </Typography>
            <Typography className={classes.typo} variant="body1">
              Le bouquet s’ouvre instantanément sur la framboise, la fraise
              sauvage avec un pointe de groseille.
            </Typography>
            <Typography className={classes.typo2} variant="body1">
              Le nez est subtil et frais, offrant d’abord une palette originale
              de fruits exotiques (goyave, litchi), on y retrouve nos petits
              fruits rouges (framboise, groseille, fraise sauvage). Des notes de
              rose et de grenade complété de nuances florales (rose, aubépine)
              et d'une pointe poivrée.
            </Typography>
            <Typography className={classes.typo2} variant="body1">
              En bouche, l’attaque, toute en tension, laisse vite la place à une
              amplitude très ronde, caractéristique. La trame acide, signature
              de notre Rosé, s’enroule dans la structure du pinot pour révéler
              le cœur du vin.
            </Typography>
            <Typography className={classes.typo2} variant="body1">
              On retrouve alors les notes pralinées de fruits secs. La finale,
              structurée, s’accompagne de sensations à la fois fraîches et
              corsées dans un parfum de pivoine et de poivre blanc.
            </Typography>
          </Paper>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default React.memo(ProductRoseBody)
