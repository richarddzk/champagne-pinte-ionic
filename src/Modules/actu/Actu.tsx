/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import Image from '@/Utils/MidgardImage'
import { Grid, Typography, Paper, Link } from '@mui/material'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { v4 as uuid } from 'uuid'
import { useSnackbar } from 'notistack'
import useScreen from '@/Utils/hooks/useScreen'

import PathLink from '@/Main/PathLink'
import actionSnack from '@/Main/Menu/interfaces'
import vendange2 from '../../../public/image/vigne/vendange2.webp'
import vendange2Mob from '../../../public/image/vigne/vendange2Mob.webp'

import cave1 from '../../../public/image/cave/cave6.webp'
import pinteOr from '../../../public/image/logo/logoViergeAvecFleur14.webp'
import bottle from '../../../public/image/logo/champBottleLogo2.webp'
import useStyles from './style'

const HomeActu: React.FC = () => {
  const { classes } = useStyles()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const { isMob, isTablette } = useScreen()
  const comingSoon = () =>
    enqueueSnackbar('    Coming soon...!', {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      variant: 'info',
      action: (key) => actionSnack(key, closeSnackbar)
    })
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0
  })
  const { ref: refL2, inView: inViewL2 } = useInView({
    /* Optional options */
    threshold: 0
  })
  const controlsL2 = useAnimation()
  const controls = useAnimation()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  useEffect(() => {
    if (inViewL2) {
      controlsL2.start('visible')
    }
  }, [controlsL2, inViewL2])
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
      <PathLink />
      <Grid style={{ justifyContent: 'center' }} container item xs={12}>
        <Grid className={classes.imageGrid} item xs={12}>
          <Image width={367 * 0.5} height={246 * 0.5} src={pinteOr} alt="Logo" />
        </Grid>
      </Grid>
      <Grid style={{ justifyContent: 'center' }} container item xs={12}>
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
            src={isMob ? vendange2Mob : vendange2}
            alt="Logo"
            placeholder="blur"
          />
        </Paper>

        <Grid className={classes.gridPaperText2}>
          <Paper className={classes.paperText2}>
            <Grid item xs={12}>
              <Typography className={classes.typoTitre} variant="h5">
                D??couvrir les vendanges
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align="justify" className={classes.typoText} variant="h6">
                ?? l'occasion des vendanges 2023, la Maison Pinte vous invite de fin ao??t ??
                mi-septembre. La periode des vendanges est d'environ de 8 ?? 15 jours en fonction des
                saison. Nos vendanges sont r??alis??es ?? la main et prennent par consequent plus de
                temps que les vendanges m??caniques.
              </Typography>
              <Typography align="justify" className={classes.typoText} variant="h6">
                Primordial ?? l'??laboration de grand champagne, cette cueillette artisanale
                selectionne les meilleures grappes avec pr??caution et preserve leurs ar??mes.
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography align="justify" className={classes.typoTextBold} variant="h6">
                Venez (re)d??couvrir les vendanges de Champagne, prendre le d??jeuner de vendanges,
                une visite de l???exploitation et d??couverte du pressoir en fonctionnement suivie
                d???une d??gustation de Champagne.
              </Typography>

              <Link
                color="primary"
                className={classes.typoTextBold}
                component="button"
                variant="h5"
                onClick={comingSoon}
              >
                Pour plus d'informations et reserver votre visite
              </Link>
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
          justifyContent="space-evenly"
        >
          <Grid className={classes.gridRaisin} item xs={3}>
            <motion.div key={uuid()} whileHover={{ scale: 1.05 }}>
              <Grid className={classes.gridNFT}>
                <Grid
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '400px',
                    alignSelf: 'center'
                  }}
                  item
                >
                  <Image style={{ objectFit: 'cover' }} fill sizes="60vw" src={bottle} alt="Logo" />
                </Grid>
                <Grid item xs={12}>
                  <Typography align="justify" className={classes.typoTitreRaisin} variant="h5">
                    <strong> Mise en place de certificat d'authenticit?? num??rique (NFT) </strong>
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
          <Grid className={classes.gridNftContainer} item xs={8}>
            <motion.div key={uuid()} whileHover={{ scale: 1.05 }}>
              <Grid className={classes.gridNFT}>
                <Typography className={classes.typoTitre} variant="h5">
                  Pourquoi avoir un NFT pour chaque bouteille de champagne
                </Typography>
                <Typography align="justify" className={classes.typoNftText} variant="h6">
                  Un <strong>NFT (non-fungible ou non-interchangeable token)</strong> est un fichier
                  num??rique unique crypt??, incluant <strong>un droit de propri??t?? </strong>. Il
                  ??tablit un lien ind??fectible entre l'objet physique et un unique propri??taire par
                  l???interm??diaire d???une blockchain, c???est-??-dire un r??seau de serveurs informatiques
                  qui valide et effectue des transactions num??riques.
                </Typography>
                <Typography align="justify" className={classes.typoNftText} variant="h6">
                  Un NFT contient toutes les informations relatives ?? la{' '}
                  <strong>certification d???un produit ou d'un objet </strong>: nom du produit, nom du
                  producteur, nombre de bouteilles, taille, volume, support, etc.
                </Typography>
                <Typography align="justify" className={classes.typoTitre} variant="h6">
                  Pourquoi avoir un NFT pour chaque bouteille de champagne ?
                </Typography>
                <Typography align="justify" className={classes.typoNftText} variant="h6">
                  Afin de permettre ?? toutes personnes de certifier et d'identifier nos bouteilles
                  de champagnes. C'est un <strong>certificat d???authenticit??</strong>. Les certificat
                  physique ne pouvant ??tre identifi?? que par les personnes qui l???ont ??dit??, cr???? ou
                  des expert, le NFT ne recquiert pas de 3 ??me partie.
                </Typography>
                <Typography align="justify" className={classes.typoNftText} variant="h6">
                  Tous les maillons de la cha??ne (producteur, consommateur, revendeur, public,
                  expert, etc.) peuvent <strong>v??rifier l???authenticit?? de ce certificat</strong>{' '}
                  grace au propri??t?? du regisrtre distribu?? qui constitue la blockchain sur laquelle
                  il est contruit.
                </Typography>
                <Typography align="justify" className={classes.typoNftText} variant="h6">
                  Avec les NFT, le certificat est totalement <strong>immuable</strong>, v??rifiable
                  par le propri??taire et permet de prouver l'identit?? du propri??t??.
                </Typography>
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
      <motion.div
        ref={refL2}
        animate={controlsL2}
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
        <Grid direction="row" justifyItems="center" className={classes.gridContainer} container>
          <Grid item xs>
            <Grid className={classes.gridImage} item xs>
              <Image style={{ objectFit: 'cover' }} fill sizes="60vw" src={cave1} alt="Logo" />
            </Grid>
            <Grid className={classes.gridImage} item xs>
              <video
                autoPlay
                loop
                muted
                style={{
                  width: '100%',
                  height: 800,
                  objectFit: 'cover'
                }}
              >
                <source src="/image/cave/cave4.mp4" type="video/mp4" />
              </video>
            </Grid>
          </Grid>
          <Grid
            item
            style={{
              marginBottom: 150
            }}
            xs
          >
            {!isMob && (
              <Grid className={classes.gridImage} item xs>
                <video
                  autoPlay
                  loop
                  muted
                  style={{
                    width: '100%',
                    height: 800,
                    objectFit: 'cover'
                  }}
                >
                  <source src="/image/vigne/videoVigne1.mp4" type="video/mp4" />
                </video>
              </Grid>
            )}
            <Grid
              className={classes.gridRaisin}
              style={{
                alignSelf: 'center',
                padding: 25,
                margin: 30
              }}
              item
              xs
            >
              <Grid item xs={12}>
                <Typography color="primary" className={classes.typoTitre} variant="h5">
                  Venez visiter notre Maison
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  La Maison Pinte ouvre ces portes et vous invite ?? d??guster une coupe de champagne
                  dans notre ??tablissements.
                </Typography>{' '}
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Pour acc??der ?? cette offre, vous devez ??tre client (ou le devenir) en achetant une
                  bouteille de Champagne AOC Pinte sur notre site internet ou directement ?? un point
                  de vente de notre maison.
                </Typography>
                <Link
                  color="primary"
                  className={classes.typoTextBold}
                  component="button"
                  variant="h5"
                  onClick={comingSoon}
                >
                  R??server votre visite
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </motion.div>
    </Grid>
  )
}
export default React.memo(HomeActu)
