/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import Image from 'next/future/image'
import { Grid, Typography, Paper, Link } from '@mui/material'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useDarkMode } from 'next-dark-mode'
import { v4 as uuid } from 'uuid'
import { useSnackbar } from 'notistack'
import PathLink from '@/Main/PathLink'
import actionSnack from '@/Main/Menu/interfaces'
import vendange2 from '../../../public/img/vigne/vendange2.webp'
import cave1 from '../../../public/img/cave/cave6.webp'
// import cave2 from '../../../public/img/cave/cave4.webp'
import vigne from '../../../public/img/vigne/vigneExtrait1.webp'
import pinteOr from '../../../public/img/logo/logoViergeAvecFleur14.webp'
import bottle from '../../../public/img/logo/champBottle2.webp'
import useStyles from './style'

function HomeActu() {
  const { classes } = useStyles()
  const { darkModeActive } = useDarkMode()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

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
        paddingTop: 70
      }}
      justifyContent="center"
      direction="row"
    >
      <PathLink />
      <Grid style={{ justifyContent: 'center' }} container item xs={12}>
        <Grid item xs={12}>
          <Typography className={classes.typoTitre} variant="h5">
            Actualités de la Maison
          </Typography>
        </Grid>

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
          <Image style={{ objectFit: 'cover' }} fill sizes="100vw" src={vendange2} alt="Logo" />
        </Paper>

        <Grid className={classes.gridPaperText2}>
          <Paper className={classes.paperText2}>
            <Grid item xs={12}>
              <Typography className={classes.typoTextBold} variant="h5">
                Découvrir les vendanges
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align="justify" className={classes.typoText} variant="h6">
                À l'occasion des vendanges 2022, la Maison Pinte vous invite de fin août à
                mi-septembre. les vendanges durent en général de 8 à 15 jours , nos vendanges sont
                réalisées à la main et donc prennent plus de temps que les vendanges mécaniques, car
                les grappes sont sélectionnées avec précaution pour l’élaboration des grands
                champagnes.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align="justify" className={classes.typoText} variant="h6">
                Pour l’anecdote, ce ne sont pas les viticulteurs qui décident du début des
                vendanges. Ils doivent attendre d’obtenir une autorisation préfectorale pour
                commencer à vendanger leurs parcelles. Cela s’appelle "le ban des vendanges".
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align="justify" className={classes.typoTextBold} variant="h6">
                Venez (re)découvrir les vendanges de Champagne, prendre le déjeuner de vendanges,
                une visite de l’exploitation et découverte du pressoir en fonctionnement suivie
                d’une dégustation de Champagne.
              </Typography>

              <Link
                style={{
                  color: darkModeActive ? '#fff' : '#000'
                }}
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
                    Mise en place de certificat d'authenticité numérique (NFT) Plus d'infos,
                    Tokenomics et NFTs à venir...
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
          <Grid className={classes.gridNftContainer} item xs={8}>
            <motion.div key={uuid()} whileHover={{ scale: 1.05 }}>
              <Grid className={classes.gridNFT}>
                <Typography className={classes.typoNftTitre} variant="h5">
                  Pourquoi avoir un NFT pour chaque bouteille de champagne
                </Typography>
                <Typography align="justify" className={classes.typoNftText} variant="h6">
                  Un <strong>NFT (non-fungible ou non-interchangeable token)</strong> est un fichier
                  numérique unique crypté, incluant <strong>un droit de propriété </strong>. Il
                  établit un lien indéfectible entre l'objet physique et un unique propriétaire par
                  l’intermédiaire d’une blockchain, c’est-à-dire un réseau de serveurs informatiques
                  qui valide et effectue des transactions numériques.
                </Typography>
                <Typography align="justify" className={classes.typoNftText} variant="h6">
                  Un NFT contient toutes les informations relatives à la{' '}
                  <strong>certification d’un produit ou d'un objet </strong>: nom du produit, nom du
                  producteur, nombre de bouteilles, taille, volume, support, etc.
                </Typography>
                <Typography align="justify" className={classes.typoNftText} variant="h6">
                  Pourquoi avoir un NFT pour chaque bouteille de champagne ? Afin de permettre à
                  toutes personnes de certifier et d'identifier nos bouteilles de champagnes. C'est
                  un <strong> certificat d’authenticité </strong>. Un certificat d’authenticité
                  physique ne pouvant être identifié que par les personnes qui l’ont édité ou par
                  des experts, dans le cas des NFT, tous les maillons de la chaîne (producteur,
                  consommateur, revendeur, public, expert, etc.) peuvent{' '}
                  <strong>vérifier l’authenticité de ce certificat</strong> dans la blockchain. Avec
                  les NFT, la source de l’information est totalement fiable et l’information
                  elle-même est certaine.
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
                <source src="/img/cave/cave4.mp4" type="video/mp4" />
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
            <Grid className={classes.gridImage} item xs>
              <Image style={{ objectFit: 'cover' }} fill sizes="60vw" src={vigne} alt="Logo" />
            </Grid>

            <Grid
              className={classes.gridRaisin}
              style={{
                alignSelf: 'center',
                padding: 25
              }}
              item
              xs
            >
              <Grid item xs={12}>
                <Typography className={classes.typoTextBold} variant="h5">
                  Venez visiter notre Maison
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography align="justify" className={classes.typoText} variant="h6">
                  La Maison Pinte ouvre ces portes et vous invite à déguster une coupe de champagne
                  dans notre établissements et (re)découvrir toute la richesse des terroirs de
                  Champagne, et le savoir-faire unique de notre Maison.
                </Typography>{' '}
                <Typography align="justify" className={classes.typoText} variant="h6">
                  Pour accéder à cette offre, Pour acceder a cette offre vous devez être client ou
                  le devenir en achetant une bouteille de Champagne AOC Pinte sur notre site
                  internet ou directement chez nous à Lisse en Champagne.
                </Typography>
                <Link
                  style={{
                    color: darkModeActive ? '#fff' : '#000'
                  }}
                  className={classes.typoTextBold}
                  component="button"
                  variant="h5"
                  onClick={comingSoon}
                >
                  Réserver votre visite
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
