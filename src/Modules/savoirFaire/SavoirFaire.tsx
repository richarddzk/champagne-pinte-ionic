import React, { useEffect, useState } from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import { useAnimation } from 'framer-motion'
// import { useSnackbar } from 'notistack'
import { useInView } from 'react-intersection-observer'
import Image from 'next/future/image'
import PathLink from '@/Main/PathLink'
import useStyles from '@/Modules/about/style'
import pinteOr from '../../../public/img/logo/pintechamplisse2Or.webp'
import brutTable from '../../../public/img/table/brutTable1.webp'
import serviceVigne from '../../../public/img/vigne/serviceVigne.webp'
import cave from '../../../public/img/cave/cave5.webp'
import tabledouble from '../../../public/img/table/tabledouble1.webp'

const SavoirFaire: React.FC = () => {
  const { classes } = useStyles()

  const [isBrowser, setIsBrowser] = useState(false)
  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const { inView } = useInView({
    /* Optional options */
    threshold: 0
  })
  const controls = useAnimation()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  if (!isBrowser) {
    return null
  }
  return (
    <Grid
      container
      style={{
        maxWidth: '100%',
        textAlign: 'center',
        paddingTop: 70
      }}
      justifyContent="center"
      direction="row"
    >
      {' '}
      <PathLink />
      <Grid style={{ justifyContent: 'center' }} container item xs={12}>
        <Grid item xs={12}>
          <Typography className={classes.typoTitre} variant="h5">
            Les Recommandations de la Maison
          </Typography>
        </Grid>
      </Grid>
      <Grid style={{ justifyContent: 'center', marginBottom: 100 }} container item xs={12}>
        <Paper
          style={{
            width: '100%',
            height: '90vh',
            position: 'relative',
            maxHeight: '100%',
            overflow: ' auto'
          }}
          elevation={5}
        >
          <Image style={{ objectFit: 'cover' }} fill sizes="100vw" src={tabledouble} alt="Logo" />
        </Paper>

        <Grid className={classes.gridPaperSavoirFaire}>
          <Paper className={classes.paperTitreSavoirFaire}>
            <Grid className={classes.gridLogoSavoirFaire} item xs={12}>
              <Image alt="pinteOr" width={342 * 0.5} height={157 * 0.5} src={pinteOr} />
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.typoTextBold} variant="h5">
                Nos recommandation et ce qu'il faut savoir
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.typoTextBold} variant="h4">
                Conservation, Dégustation, Service ...
              </Typography>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          maxWidth: '100%',
          textAlign: 'center',
          paddingTop: 70
        }}
        justifyContent="center"
        direction="row"
      >
        <Grid className={classes.gridPaperRight} container item xs={12}>
          <Paper className={classes.paperRight}>
            <Image style={{ objectFit: 'cover' }} fill sizes="60vw" src={cave} alt="Logo" />
          </Paper>
          <Grid
            style={{
              height: 0
            }}
          >
            <Paper className={classes.paperTextRightSavoirFaire}>
              <Grid item xs={12}>
                <Typography className={classes.typoTextBold} variant="h5">
                  Le Champagne évolue dans le flacon
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Le champagne est vivant et évolue au fil de temps. En plus des conditions de
                  stockage qui ont un impact direct sur l’évolution du vin et de sa qualité, la
                  nature des assemblages (millésimé ou non millésimé) ainsi que le format du flacon
                  ont une incidence significative sur l’évolution du champagne dans le temps.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Ainsi, de façon générale, nous recommandons de déguster les flacons de brut{' '}
                  <strong>non millésimé</strong> :
                </Typography>
              </Grid>
              <Grid
                style={{
                  textAlignLast: 'left'
                }}
                item
                xs={12}
              >
                <Typography className={classes.typoTextBold} variant="h6">
                  - Entre 12 et 18 mois après leur achat, pour les flacons inférieurs à 75 cl
                </Typography>

                <Typography className={classes.typoTextBold} variant="h6">
                  - Jusqu'à 24 mois, pour les flacons de 75cl
                </Typography>

                <Typography className={classes.typoTextBold} variant="h6">
                  - Jusqu'à 36 mois, pour les flacons de 150 cl et plus
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  En ce qui concerne les champagnes <strong>millésimés</strong>, leur durée de
                  conservation est plus longue. Il est possible de les déguster entre 7 et 10 ans
                  après leur achat, voire au-delà. Conserver le champagne plus longtemps que
                  recommandé n’est pas nécessaire.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  En effet, toutes les bouteilles de champagne que nous commercialisons ont atteint
                  leur maturité dans nos caves et elles peuvent être dégustées dès leur achat.
                  Conserver les bouteilles plus longtemps pourra engendrer des changements au niveau
                  du goût (plus prononcé), de la couleur (plus foncée) et de l’effervescence
                  (moindre). De plus, l’évolution des cuvées sera certainement différente du style
                  que nos œnologues ont souhaité leur donner et partager avec vous.
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid className={classes.gridPaperLeft} container item xs={12}>
          <Paper className={classes.paperLeft}>
            <Image style={{ objectFit: 'cover' }} fill sizes="60vw" src={brutTable} alt="Logo" />
          </Paper>{' '}
          <Grid
            style={{
              height: 0
            }}
          >
            <Paper className={classes.paperTextLeftSavoirFaire}>
              <Grid item xs={12}>
                <Typography className={classes.typoTextBold} variant="h5">
                  À CHAQUE CHAMPAGNE SA TEMPÉRATURE DE DÉGUSTATION
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  La température idéale pour la consommation des{' '}
                  <strong>champagnes Brut et Rosé (cuvées non millésimées</strong>) est d’environ{' '}
                  <strong> 8°C</strong>. En dessous de cette température, le vin est trop froid, ce
                  qui limite la perception de son intensité aromatique.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Pour les champagnes
                  <strong> Millésimé</strong> la température de service est légèrement plus haute,
                  entre
                  <strong>10 et 12 °C</strong> ce qui permet de libérer toute la complexité de leurs
                  arômes.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.typoTextBold} variant="h5">
                  COMMENT OBTENIR LA TEMPÉRATURE DE SERVICE IDÉALE ?
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Dans un <strong>seau </strong>à champagne, plonger la bouteille dans un seau à
                  champagne pendant{' '}
                  <strong> 30 minutes, avec 1/3 d’eau, 1/3 de glaçon et 1/3 d’espace vide</strong>.
                  Le processus de refroidissement est alors progressif, ce qui permet de protéger la
                  qualité du vin tandis que ce dernier s'ajuste à la température appropriée.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Au <strong>réfrigérateur</strong> placer la bouteille en position horizontale dans
                  le réfrigérateur <strong>45 minutes avant de servir</strong> le champagne pour le
                  rafraîchir.
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          style={{
            paddingTop: 200,
            paddingBottom: 50
          }}
          className={classes.gridPaperRight}
          container
          item
          xs={12}
        >
          <Paper className={classes.paperRight}>
            <Image style={{ objectFit: 'cover' }} fill sizes="60vw" src={serviceVigne} alt="Logo" />
          </Paper>
          <Grid
            style={{
              height: 0
            }}
          >
            <Paper className={classes.paperTextRightSavoirFaire}>
              <Grid item xs={12}>
                <Typography className={classes.typoTextBold} variant="h5">
                  LE RITUEL DU SERVICE
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Pour Le choix du verre, privilégier un <strong>verre tulipe</strong> dont
                  l'ouverture est assez large pour exprimer la complexité aromatique du champagne et
                  permettre à ses bulles d'évoluer. Il est aussi possible d'utiliser un verre à vin
                  blanc.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.typoTextBold} variant="h5">
                  COMMENT OUVRIR UNE BOUTEILLE DE CHAMPAGNE ?
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Retirer la partie de la coiffe qui cache le muselet et le bouchon Incliner
                  légèrement la bouteille et dégager la boucle du muselet.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Retirer le muselet et son habillage en même temps, tout en maintenant le bouchon.
                  Attention à ce que la trajectoire du bouchon ne soit pas dans la direction d’un
                  convive.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Tenir fermement le bouchon et saisir le corps de la bouteille. Tourner le corps de
                  la bouteille pour dégager doucement le bouchon du goulot sans le laisser échapper.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.typoTextBold} variant="h5">
                  COMMENT SERVIR LE CHAMPAGNE ?
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Tenir la bouteille par la base et non par le col pour servir le champagne. Verser
                  près du verre pour favoriser la formation du cordon et en même temps éviter
                  l’excès de mousse.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Servir le champagne dans le verre de manière lente et régulière, pour permettre à
                  la collerette de mousse de s’établir harmonieusement. Remplir le verre en deux
                  temps favorise le maintien prolongé de la collerette.
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default React.memo(SavoirFaire)
