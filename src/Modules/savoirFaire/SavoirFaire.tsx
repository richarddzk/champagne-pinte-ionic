import React, { useEffect, useState } from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from '@/Utils/MidgardImage'
import PathLink from '@/Main/PathLink'
import useStyles from '@/Modules/about/style'
import useScreen from '@/Utils/hooks/useScreen'
import pinteOr from '../../../public/image/logo/pintechamplisse2Or.webp'
import tableChamp2 from '../../../public/image/table/tableChamp2.webp'
import tableChamp1Mob from '../../../public/image/table/tableChamp1Mob.webp'
import serviceVigne from '../../../public/image/vigne/serviceVigne.webp'
import serviceVigne2 from '../../../public/image/vigne/serviceVigne2.webp'

import cave from '../../../public/image/cave/cave5.webp'
import cavePanneauMob from '../../../public/image/cave/cavePanneauMob.webp'
import tabledouble from '../../../public/image/table/tabledouble1.webp'

const SavoirFaire: React.FC = () => {
  const { classes } = useStyles()
  const { isTablette } = useScreen()

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
        paddingTop: !isTablette ? 70 : 0
      }}
      justifyContent="center"
      direction="row"
    >
      {' '}
      <PathLink />
      <Grid style={{ justifyContent: 'center' }} container item xs={12}>
        <Grid item xs={12}>
          <Typography color="primary" className={classes.typoTitre} variant="h5">
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
          <Image
            style={{ objectFit: 'cover' }}
            fill
            sizes="100vw"
            src={tabledouble}
            alt="Logo"
            placeholder="blur"
          />
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
                Conservation, D??gustation, Service
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
            <Image
              style={{ objectFit: 'cover' }}
              fill
              sizes="60vw"
              src={isTablette ? cavePanneauMob : cave}
              alt="Logo"
            />
          </Paper>
          <Grid
            style={{
              height: 0
            }}
          >
            <Paper className={classes.paperTextRightSavoirFaire}>
              <Grid item xs={12}>
                <Typography className={classes.typoTextBold} variant="h5">
                  Le Champagne ??volue dans le flacon
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Le champagne est vivant et ??volue au fil de temps. En plus des conditions de
                  stockage qui ont un impact direct sur l?????volution du vin et de sa qualit??, la
                  nature des assemblages (mill??sim?? ou non mill??sim??) ainsi que le format du flacon
                  ont une incidence significative sur l?????volution du champagne dans le temps.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Ainsi, de fa??on g??n??rale, nous recommandons de d??guster les flacons de brut{' '}
                  <strong>non mill??sim??</strong> :
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
                  - Entre 12 et 18 mois apr??s leur achat, pour les flacons inf??rieurs ?? 75 cl
                </Typography>

                <Typography className={classes.typoTextBold} variant="h6">
                  - Jusqu'?? 24 mois, pour les flacons de 75cl
                </Typography>

                <Typography className={classes.typoTextBold} variant="h6">
                  - Jusqu'?? 36 mois, pour les flacons de 150 cl et plus
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  En ce qui concerne les champagnes <strong>mill??sim??s</strong>, leur dur??e de
                  conservation est plus longue. Il est possible de les d??guster entre 7 et 10 ans
                  apr??s leur achat, voire au-del??. Conserver le champagne plus longtemps que
                  recommand?? n???est pas n??cessaire.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  En effet, toutes les bouteilles de champagne que nous commercialisons ont atteint
                  leur maturit?? dans nos caves et elles peuvent ??tre d??gust??es d??s leur achat.
                  Conserver les bouteilles plus longtemps pourra engendrer des changements au niveau
                  du go??t (plus prononc??), de la couleur (plus fonc??e) et de l???effervescence
                  (moindre). De plus, l?????volution des cuv??es sera certainement diff??rente du style
                  que nos ??nologues ont souhait?? leur donner et partager avec vous.
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid className={classes.gridPaperLeft} container item xs={12}>
          <Paper className={classes.paperLeft}>
            <Image
              style={{ objectFit: 'cover' }}
              fill
              sizes="60vw"
              src={isTablette ? tableChamp1Mob : tableChamp2}
              alt="Logo"
            />
          </Paper>{' '}
          <Grid
            style={{
              height: 0
            }}
          >
            <Paper className={classes.paperTextLeftSavoirFaire}>
              <Grid item xs={12}>
                <Typography className={classes.typoTextBold} variant="h5">
                  ?? chaque champagne sa temp??rature de degustation
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  La temp??rature id??ale pour la consommation des{' '}
                  <strong>champagnes Brut et Ros?? (cuv??es non mill??sim??es</strong>) est d???environ{' '}
                  <strong> 8??C</strong>. En dessous de cette temp??rature, le vin est trop froid, ce
                  qui limite la perception de son intensit?? aromatique.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Pour les champagnes
                  <strong> mill??sim??</strong> la temp??rature de service est l??g??rement plus haute.
                  Entre
                  <strong> 10 et 12 ??C</strong> ce qui permet de lib??rer toute la complexit?? de
                  leurs ar??mes.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.typoTextBold} variant="h5">
                  Comment obtenir la temp??rature de service id??ale ?
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Dans un <strong>seau </strong>?? champagne, plonger la bouteille dans un seau ??
                  champagne pendant{' '}
                  <strong> 30 minutes, avec 1/3 d???eau, 1/3 de gla??on et 1/3 d???espace vide</strong>.
                  Le processus de refroidissement est alors progressif, ce qui permet de prot??ger la
                  qualit?? du vin tandis que ce dernier s'ajuste ?? la temp??rature appropri??e.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Au <strong>r??frig??rateur</strong> placer la bouteille en position horizontale dans
                  le r??frig??rateur <strong>45 minutes avant de servir</strong> le champagne pour le
                  rafra??chir.
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
            <Image
              style={{ objectFit: 'cover' }}
              fill
              sizes="60vw"
              src={isTablette ? serviceVigne2 : serviceVigne}
              alt="Logo"
            />
          </Paper>
          <Grid
            style={{
              height: 0
            }}
          >
            <Paper className={classes.paperTextRightSavoirFaire}>
              <Grid item xs={12}>
                <Typography className={classes.typoTextBold} variant="h5">
                  Le rituel du service
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Pour Le choix du verre, privil??gier un <strong>verre tulipe</strong> dont
                  l'ouverture est assez large pour exprimer la complexit?? aromatique du champagne et
                  permettre ?? ses bulles d'??voluer. Il est aussi possible d'utiliser un verre ?? vin
                  blanc.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.typoTextBold} variant="h5">
                  Comment ouvrir une bouteille de champagne ?
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Retirer la partie de la coiffe qui cache le muselet et le bouchon Incliner
                  l??g??rement la bouteille et d??gager la boucle du muselet.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Retirer le muselet et son habillage en m??me temps, tout en maintenant le bouchon.
                  Attention ?? ce que la trajectoire du bouchon ne soit pas dans la direction d???un
                  convive.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Tenir fermement le bouchon et saisir le corps de la bouteille. Tourner le corps de
                  la bouteille pour d??gager doucement le bouchon du goulot sans le laisser ??chapper.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.typoTextBold} variant="h5">
                  Comment servir le champagne ?
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Tenir la bouteille par la base et non par le col pour servir le champagne. Verser
                  pr??s du verre pour favoriser la formation du cordon et en m??me temps ??viter
                  l???exc??s de mousse.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Servir le champagne dans le verre de mani??re lente et r??guli??re, pour permettre ??
                  la collerette de mousse de s?????tablir harmonieusement. Remplir le verre en deux
                  temps favorise le maintien prolong?? de la collerette.
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
