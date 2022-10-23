import React, { useEffect } from 'react'
import Image from '@/Utils/MidgardImage'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { v4 as uuid } from 'uuid'
import PathLink from '@/Main/PathLink'
import Map from '@/Utils/Map'
import useScreen from '@/Utils/hooks/useScreen'
import Loading from '@/Utils/Loading'
import dynamic from 'next/dynamic'
import useStyles from './style'

import chardonnay from '../../../public/image/utils/chardonnay.webp'
import pinotNoir from '../../../public/image/utils/pinotNoir.webp'
import pinotMeunier from '../../../public/image/utils/pinotMeunier.webp'
import map from '../../../public/image/utils/cartes/mapFinal.webp'
import vignefam from '../../../public/image/vigne/vignefam10.webp'
import vignefamMobile from '../../../public/image/vigne/vignefam11.webp'
import france from '../../../public/image/utils/cartes/france.webp'
import franceMob from '../../../public/image/utils/cartes/franceMob.webp'
import brutTable1 from '../../../public/image/table/brutTable1.webp'
import brutTable1Mobile from '../../../public/image/table/brutTable1Mobile.webp'
import logo from '../../../public/image/logo/LogoSansFond.webp'

const Main = dynamic(() => import('@/Main/Main'), {
  loading: () => <Loading />
})

const About: React.FC = () => {
  const { classes } = useStyles()
  const { ref, inView } = useInView({
    threshold: 0
  })
  const { isWide, isMob, isTablette } = useScreen()

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
          paddingTop: !isTablette ? 70 : 0
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
            <Image
              style={{ objectFit: 'cover' }}
              fill
              sizes="100vw"
              src={isMob ? vignefamMobile : vignefam}
              alt="Logo"
              placeholder="blur"
              // blurDataURL={isMob ? vignefamMobBlur : vignefamBlur}
            />
          </Paper>
          <Grid
            style={{
              height: 0,
              padding: 0,
              marginRight: !isMob ? 0 : 'auto'
            }}
          >
            <Paper className={classes.paperText} elevation={5}>
              <Grid item xs={12}>
                <Typography className={classes.typoTitreRaisin} variant="h4">
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
                <Image src={logo} alt="Logo" width={60} height={70} />
              </Grid>
              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Née en 1990, la maison Pinte est le produit d'un travail construit sur 3
                  générations. Située à Lisse-en-Champagne, le cépage chardonnay est la signature de
                  la Maison.
                </Typography>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Son raisin, issu principalement du Vitryat et de la Côte des Blancs est au cœur de
                  toutes ses cuvées.
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
            <Image
              style={{ objectFit: 'cover' }}
              fill
              sizes="60vw"
              src={isTablette ? brutTable1Mobile : brutTable1}
              alt="Logo"
              placeholder="blur"
              // blurDataURL={brutTable1Blur}
            />
          </Paper>{' '}
          <Grid
            style={{
              height: 0,
              marginLeft: isMob ? 'auto' : 0
            }}
          >
            <Paper className={classes.paperTextRight} elevation={5}>
              <Grid item xs={12}>
                <Typography className={classes.typoTitreRaisin} variant="h4">
                  LA GRANDEUR EST UNE RICHESSE
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Assemblés à partir des trois cépages majoritaires de la Champagne, le Pinot Noir,
                  le Pinot Meunier et le Chardonnay.
                </Typography>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Nos champagnes sont issus des plus grands vignobles, présents dans les 3 zones
                  principales de la Champagne. Leurs richesses et fertilité nous permettent de
                  choisir ce qu'il y a de meilleur.
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
            <Image
              style={{ objectFit: 'cover' }}
              fill
              sizes="40vw"
              src={isTablette ? franceMob : france}
              alt="Logo"
            />
          </Paper>
          <Grid className={classes.paperImage}>
            <Image
              style={{
                borderRadius: 10,
                width: '100%',
                height: 'auto'
              }}
              sizes="100vw"
              src={map}
              alt="map"
            />
          </Grid>
          <Grid
            style={{
              height: 0,
              position: 'relative'
            }}
          >
            <Paper className={classes.paperTextRight2} elevation={5}>
              <Grid item xs={12}>
                <Typography className={classes.typoTitreRaisin} variant="h4">
                  3 cépages majoritaires de la Champagne
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Terroir du Vitryat, de la Côte des Blancs et de la Vallée de la marne: Ces
                  vignobles reposent sur la craie que l’on distingue à l’œil nu et qui a donné son
                  nom à ce terroir.
                </Typography>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Le Chardonnay emblématique de notre maison, y est comme un roi, il exprime ici
                  tout son potentiel et donne des vins d’exception.
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          className={classes.gridtextRaisin}
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
            container
            direction={!isTablette ? 'row' : 'column'}
            justifyContent="space-around"
            rowSpacing={5}
          >
            <Grid
              className={classes.gridRaisin}
              style={{
                maxWidth: 530
              }}
              item
              xs
            >
              <motion.div key={uuid()} whileHover={{ scale: isWide ? 1.05 : 1 }}>
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
                      style={{ borderRadius: 10, objectFit: 'cover' }}
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
                    <Typography textAlign="justify" className={classes.typoRaisin} variant="h5">
                      Le Chardonnay représente 90% de notre vignoble, utilisé pour son élégance, se
                      caractérisent par des arômes délicats.
                    </Typography>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>

            <Grid
              className={classes.gridRaisin}
              style={{
                maxWidth: 530
              }}
              item
              xs
            >
              <motion.div key={uuid()} whileHover={{ scale: isWide ? 1.05 : 1 }}>
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
                      style={{ borderRadius: 10, objectFit: 'cover' }}
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
                    <Typography textAlign="justify" className={classes.typoRaisin} variant="h5">
                      Le Pinot Noir est utilisé pour son corps, donnant des notes de fruits rouges
                      et une structure marquée.
                    </Typography>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>

            <Grid
              className={classes.gridRaisin}
              style={{
                maxWidth: 530
              }}
              item
              xs
            >
              <motion.div key={uuid()} whileHover={{ scale: isWide ? 1.05 : 1 }}>
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
                      style={{ borderRadius: 10, objectFit: 'cover' }}
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
                    <Typography textAlign="justify" className={classes.typoRaisin} variant="h5">
                      Le Pinot Meunier que nous utilisons ici pour sa rondeur et son charnu. Il
                      donne des vins souples révélant des notes de fruits à chair blanche.
                    </Typography>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
        <Grid container alignItems="center" justifyContent="center" direction="row">
          <Grid style={{ marginTop: '10%' }} item xs={12}>
            <Typography className={classes.typoAdresse} variant="h4">
              Où nous trouver ?
            </Typography>
          </Grid>
          <Grid item className={classes.gridMapLisse}>
            <Grid className={classes.mapLisse} item>
              <Map />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.typoAdresse} variant="h4">
              6 Grand Rue, Lisse-en-Champagne, 51300 Champagne
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
