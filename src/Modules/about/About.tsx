import React, { useEffect } from 'react'
import Image from 'next/future/image'
import { Grid, Typography, Paper, Button } from '@mui/material'
import { useDarkMode } from 'next-dark-mode'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { v4 as uuid } from 'uuid'
import PathLink from '@/Main/PathLink'
import Map from '@/Utils/Map'
import Main from '../../Main/Main'
import chardonnay from '../../../public/img/utils/chardonnay.webp'
import pinotNoir from '../../../public/img/utils/pinotNoir.webp'
import pinotMeunier from '../../../public/img/utils/pinotMeunier.webp'
import map from '../../../public/img/utils/cartes/mapFinal.webp'
import pinteWhite from '../../../public/img/logo/pinteWhite.webp'
import vignefam from '../../../public/img/vigne/vignefam10.webp'
import france from '../../../public/img/utils/cartes/france.webp'
import brutTable1 from '../../../public/img/table/brutTable1.webp'
import pinteBlack from '../../../public/img/logo/pinteBlack.webp'
import useStyles from './style'

const About: React.FC = () => {
  const { classes } = useStyles()
  const { darkModeActive } = useDarkMode()
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0
  })
  // const { ref: refGrid1, inView: inView1 } = useInView({
  //   /* Optional options */
  //   threshold: 0,
  // })
  const controls = useAnimation()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <Main>
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
        <PathLink />
        <Grid className={classes.GridPaperVigne} container item xs={12}>
          <Paper
            style={{
              width: '100%',
              height: '100vh',
              position: 'relative',
              maxHeight: '100%',
              overflow: ' auto'
            }}
            elevation={5}
          >
            <Image style={{ objectFit: 'cover' }} fill sizes="100vw" src={vignefam} alt="Logo" />
          </Paper>
          <Grid
            style={{
              height: 0,
              marginRight: 'auto'
            }}
          >
            <Paper className={classes.paperText} elevation={5}>
              <Grid item xs={12}>
                <Typography className={classes.typoText} variant="h5">
                  Découvrir la Maison
                </Typography>
              </Grid>

              <Grid
                style={{
                  paddingBottom: 20
                }}
                item
                xs={12}
              >
                <Image
                  width={342 * 0.8}
                  height={108 * 0.8}
                  src={!darkModeActive ? pinteBlack : pinteWhite}
                  alt="Logo"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Née en 1990, Pinte est une Maison de champagne construite sur 3 générations.
                  Située à Lisse-en-Champagne, le cépage chardonnay est la signature de la Maison
                  Pinte. Son raisin, issu principalement du Vitryat et de la Côte des Blancs est au
                  cœur de toutes ses cuvées.
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid className={classes.GridPaperChamp} container item xs={12}>
          <Paper
            style={{
              width: '100%',
              height: '100vh',
              position: 'relative',
              maxHeight: '100%',
              overflow: ' auto'
            }}
            elevation={5}
          >
            <Image style={{ objectFit: 'cover' }} fill sizes="60vw" src={brutTable1} alt="Logo" />
          </Paper>{' '}
          <Grid
            style={{
              height: 0,
              marginLeft: 'auto'
            }}
          >
            <Paper className={classes.paperTextRight} elevation={5}>
              <Grid item xs={12}>
                <Typography className={classes.typoText} variant="h5">
                  LA GRANDEUR EST UNE RICHESSE
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Assemblés à partir des trois cépages majoritaires de la Champagne, le Pinot Noir,
                  le Pinot Meunier et le Chardonnay, nos champagnes sont issus des plus grands
                  vignobles présents dans les 3 zones principales de la région. Leur richesse et
                  leur abondance nous permettent donc de choisir ce qu'il y a de meilleur.
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid className={classes.GridPaperMap} container item xs={12}>
          <Paper
            style={{
              width: '100%',
              height: '100vh',
              position: 'relative',
              maxHeight: '100%',
              overflow: ' auto'
            }}
            elevation={5}
          >
            <Image style={{ objectFit: 'cover' }} fill sizes="40vw" src={france} alt="Logo" />
          </Paper>
          <Grid className={classes.paperImage}>
            <Image src={map} alt="map" />
          </Grid>
          <Grid className={classes.gridtextMap}>
            <Paper className={classes.paperTextRight2} elevation={5}>
              <Grid item xs={12}>
                <Typography className={classes.typoText} variant="h5">
                  3 cépages majoritaires de la Champagne,
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Terroir du Vitryat, de la Côte des Blancs et de la Vallée de la marne: Ces
                  vignobles reposent sur la craie que l’on distingue à l’œil nu et qui a donné son
                  nom à ce terroir. Le Chardonnay emblamtique de notre maison, est comme un roi, il
                  exprime ici tout son potentiel et donne des vins d’une grande tenue.
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          transition={{
            duration: 1
            // type: 'tween',
          }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 }
          }}
        >
          <Grid
            className={classes.gridtextRaisin}
            container
            direction="row"
            justifyContent="space-around"
          >
            <Grid className={classes.gridRaisin} item xs>
              <motion.div key={uuid()} whileHover={{ scale: 1.05 }}>
                <Grid>
                  <Grid
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '500px'
                    }}
                    item
                  >
                    <Image
                      style={{ objectFit: 'cover' }}
                      fill
                      sizes="20vw"
                      src={chardonnay}
                      alt="Logo"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className={classes.typoTitreRaisin} variant="h4">
                      Chardonnay
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography align="justify" className={classes.typoRaisin} variant="h5">
                      Le Chardonnay représente 90% de notre vignoble et est utilisé pour son
                      élégance, son acidité et sa fraîcheur, révélant des notes d’agrumes et de
                      fleurs blanches.
                    </Typography>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>

            <Grid className={classes.gridRaisin} item xs>
              <motion.div key={uuid()} whileHover={{ scale: 1.05 }}>
                <Grid>
                  <Grid
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '500px'
                    }}
                    item
                  >
                    <Image
                      style={{ objectFit: 'cover' }}
                      fill
                      sizes="20vw"
                      src={pinotNoir}
                      alt="Logo"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className={classes.typoTitreRaisin} variant="h4">
                      Pinot Noir
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography align="justify" className={classes.typoRaisin} variant="h5">
                      Le Pinot Noir est utilisé pour son corps, sa structure et son intensité,
                      révélant des notes de fruits rouges.
                    </Typography>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>

            <Grid className={classes.gridRaisin} item xs>
              <motion.div key={uuid()} whileHover={{ scale: 1.05 }}>
                <Grid>
                  <Grid
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '500px'
                    }}
                    item
                  >
                    <Image
                      style={{ objectFit: 'cover' }}
                      fill
                      sizes="20vw"
                      src={pinotMeunier}
                      alt="Logo"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className={classes.typoTitreRaisin} variant="h4">
                      Pinot Meunier
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography align="justify" className={classes.typoRaisin} variant="h5">
                      Le Pinot Meunier est utilisé pour sa souplesse, sa rondeur et son charnu,
                      révélant des notes de fruits à chair blanche.
                    </Typography>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
        <Grid
          style={{
            paddingTop: 150
          }}
          container
          alignItems="center"
          justifyContent="center"
          direction="row"
        >
          <Grid style={{ marginTop: '10%' }} item xs={12}>
            <Typography className={classes.typoTextBold} variant="h4">
              Où nous trouver ?
            </Typography>
          </Grid>
          <Grid item className={classes.gridMapLisse}>
            <Grid className={classes.mapLisse} item>
              <Map layer={1} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.typoAdresse} variant="h4">
              1 Grand Rue, Lisse-en-Champagne, 51300 Champagne
            </Typography>
          </Grid>
          <Grid container justifyContent="center" className={classes.mapButton}>
            <Button
              className={classes.decouvrirButton}
              size="large"
              variant="outlined"
              onClick={() => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                window &&
                  // @ts-ignore
                  window
                    .open(
                      'https://www.google.fr/maps/dir//51300+Lisse-en-Champagne/@48.8187938,4.6293417,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47ebed237cb141d1:0x40a5fb99a3b4d10!2m2!1d4.641724!2d48.814268',
                      '_blank'
                    )
                    .focus()
              }}
            >
              Itinéraire
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Main>
  )
}
export default React.memo(About)
