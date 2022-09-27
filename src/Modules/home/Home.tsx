/* eslint-disable @typescript-eslint/naming-convention */
import React, { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/future/image'
import { Button, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useDarkMode } from 'next-dark-mode'
import { Url } from 'url'
import { gql, useQuery } from '@apollo/client'
import Slideshow from '@/Utils/Slideshow'
import dynamic from 'next/dynamic'
import vendange2 from '../../../public/img/vigne/vendange2.webp'
import { ButtonStyled, Main } from '../../Main'
import pinteBlack from '../../../public/img/logo/pinteBlack.webp'
import tabledouble1 from '../../../public/img/table/tabledouble1.webp'
import pinteWhite from '../../../public/img/logo/pinteWhite.webp'
import useStyles from './style'
import useI18n from '../../Utils/hooks/use-i18n'
import { homeItems } from './Interfaces'
import SuccessDialog from './SuccessDialog'
import { GET_PRODUCTS as GET_PRODUCTS_TYPE } from '../champagnes/__generated__/GET_PRODUCTS'
import ArticleComponent from './ArticleComponent'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})

const Map = dynamic(() => import('@/Utils/Map'), {
  loading: () => <Loading />
})

const HomeProduct = dynamic(() => import('./HomeProduct'), {
  loading: () => <Loading />
})

const GET_PRODUCTS = gql`
  query GET_PRODUCTS {
    products {
      id
      price
      updatedAt
      title
      images {
        id
        src
        updatedAt
        title
      }
    }
  }
`
export interface ArticleComponentProps {
  image: string | StaticImageData
  size?: { width: number; height: number }
  noProduct?: boolean
  push?: (url: Url, as?: Url, options?: any) => Promise<boolean>
  activeLocale: any
  darkModeActive: boolean
}

// export interface HomeProps {
//   loading: boolean
//   data?: GET_PRODUCTS_TYPE
// }
/**
 *
 * TRYING
 *
 */
// This function will be called by the server
// export const getServerSideProps: GetServerSideProps = async () => {
//   const { loading, data } = await apolloClient.query<GET_PRODUCTS_TYPE>({ query: GET_PRODUCTS })
//   if (!data) {
//     return {
//       notFound: true
//     }
//   }

//   // Returning the fetched data
//   return { props: { loading, data } }
// }

const Home: React.FC = () => {
  const [isBrowser, setIsBrowser] = useState(false)
  const [open, setOpen] = useState(false)

  const { loading, data } = useQuery<GET_PRODUCTS_TYPE>(GET_PRODUCTS, {
    fetchPolicy: 'network-only'
  })
  const { products } = data ?? { products: [] }

  const { classes } = useStyles()
  const i18n = useI18n()
  const { activeLocale } = i18n
  const { query, push } = useRouter()

  const { redirect_status } = query
  const handleClose = () => {
    setOpen(false)
  }
  const handleClickOpen = () => {
    setOpen(true)
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    redirect_status && handleClickOpen()
  }, [redirect_status])

  useEffect(() => {
    setIsBrowser(true)
  }, [])
  const { darkModeActive } = useDarkMode()
  if (!isBrowser) {
    return null
  }

  return (
    <Main overflowX="hidden">
      <SuccessDialog open={open} handleClose={handleClose} />
      <Grid container style={{ maxWidth: '100vw' }} justifyContent="center" direction="row">
        <Grid className={classes.imgSlider}>
          <Slideshow
            items={homeItems}
            itemsToShow={1}
            classes={classes}
            speed={1000}
            autoplaySpeed={10000}
            pauseOnHover
            fade
            initialSlide={0}
            button
            icon={false}
            height="100vh"
            objectFit="cover"
          />
        </Grid>
        <Grid className={classes.ButtonCuve} item>
          <ButtonStyled
            width={250}
            height={50}
            fullybackground={1}
            title="Découvrez nos cuvées"
            onClick={() => {
              push(`/${activeLocale ?? 'fr'}/champagnes/`)
            }}
          />
        </Grid>
        <Grid
          container
          justifyContent="space-evenly"
          alignItems="center"
          className={classes.productComponent}
        >
          <HomeProduct loading={loading} products={products} buttonPanier={false} />
        </Grid>
        <Grid item className={classes.maisonHome}>
          <ArticleComponent
            image={tabledouble1}
            push={push}
            activeLocale={activeLocale}
            darkModeActive={darkModeActive}
            text="Née en 1990, Pinte est une Maison de champagne construite
            sur 3 générations. Située à Lisse-en-Champagne, le cépage chardonnay est la signature de
            la Maison Pinte. Son raisin, issu principalement du Vitryat
            et de la Côte des Blancs est au cœur de toutes ses cuvées."
            logo={
              <Image
                priority
                width={342 * 0.8}
                height={108 * 0.8}
                src={!darkModeActive ? pinteBlack : pinteWhite}
                alt="Logo"
              />
            }
            title="Découvrir la Maison"
            buttonTitle="Découvrir notre Maison"
            route="about"
            position="left"
          />
        </Grid>
        <Grid item className={classes.maisonHome}>
          <ArticleComponent
            image={vendange2}
            push={push}
            activeLocale={activeLocale}
            darkModeActive={darkModeActive}
            text="À l'occasion des vendanges 2022, la Maison Pinte vous invite de fin août à mi-septembre, les vendanges durent en général de 8 à 15 jours , nos vendanges sont réalisées à la main et donc prennent plus de temps que les vendanges mécaniques, car les grappes sont sélectionnées avec précaution pour l’élaboration des grands champagnes."
            title="En ce moment"
            buttonTitle="Découvrir notre Actualités"
            route="actu"
            position="right"
          />
        </Grid>
        {/* <video
          autoPlay
          loop
          muted
          style={{ width: '90vw', height: '1080px', objectFit: 'cover' }}
        >
          <source src="/img/cave/cave4.mp4" type="video/mp4" />
        </video> */}

        <Grid style={{ marginTop: '10%' }} item className={classes.gridMap}>
          <Typography className={classes.typoText} variant="h4">
            Où nous trouver ?
          </Typography>
          <Grid className={classes.mapLisse} item>
            <Map layer={1} />
            <Typography className={classes.typoAdresse} variant="h4">
              1 Grand Rue, Lisse-en-Champagne, 51300 Champagne
            </Typography>
          </Grid>
        </Grid>
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
    </Main>
  )
}
export default Home
export { GET_PRODUCTS }
