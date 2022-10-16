/* eslint-disable @typescript-eslint/naming-convention */
import React, { useEffect, useState } from 'react'
import Image from '@/Utils/MidgardImage'
import { Button, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { GlobalStyles } from 'tss-react'
import { StaticImageData } from 'next/future/image'

import { useDarkMode } from 'next-dark-mode'
import { Url } from 'url'
import { gql, useQuery } from '@apollo/client'
import Slideshow from '@/Utils/Slideshow'
import dynamic from 'next/dynamic'
import useScreen from '@/Utils/hooks/useScreen'
import raisinCoupe3 from '../../../public/image/vigne/raisinCoupe3.webp'
import { ButtonStyled, Main } from '../../Main'
import logoChampLisse from '../../../public/image/logo/pintechamplisse2Or.webp'
import serviceVigne2 from '../../../public/image/vigne/serviceVigne2.webp'
import tableChamp3 from '../../../public/image/table/tableChamp3.webp'
import tableChamp2 from '../../../public/image/table/tableChamp2.webp'
import useStyles from './style'

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

  const { query, push } = useRouter()

  const { redirect_status } = query

  const handleClose = () => {
    setOpen(false)
  }
  const handleClickOpen = () => {
    setOpen(true)
  }
  // const isWide = useMedia('(min-width: 501px)') as boolean

  const { isMob } = useScreen()

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
    <Main>
      <GlobalStyles
        styles={{
          '.slick-dots': {
            bottom: 200
          }
        }}
      />
      <SuccessDialog open={open} handleClose={handleClose} />
      <Grid container style={{ maxWidth: '100vw' }} justifyContent="center" direction="row">
        <Grid className={classes.imageSlider}>
          <Slideshow
            items={homeItems as any}
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
              push('/champagnes')
            }}
          />
        </Grid>
        <Grid
          container
          justifyContent="space-evenly"
          alignItems="center"
          className={classes.productComponent}
        >
          <HomeProduct
            loading={loading}
            products={products}
            buttonPanier={false}
            backgroundColor="transparent"
          />
        </Grid>
        <Grid item className={classes.maisonHome}>
          <ArticleComponent
            image={isMob ? tableChamp3 : tableChamp2}
            push={push}
            darkModeActive={darkModeActive}
            text={[
              "Née en 1990, la maison Pinte est le produit d'un travail construit sur 3 générations. Située à Lisse-en-Champagne, le cépage chardonnay est la signature de la Maison. ",
              'Son raisin, issu principalement du Vitryat et de la Côte des Blancs est au cœur de toutes ses cuvées.'
            ]}
            logo={
              <Grid
                onClick={() => {
                  push(' /lamaison')
                }}
                style={{
                  cursor: 'pointer',
                  paddingBottom: 20,
                  width: 342 * 0.8,
                  height: 108 * 0.8
                }}
                item
                xs={12}
              >
                <Image
                  priority
                  style={{ width: '100%', height: 'auto' }}
                  sizes="100vw"
                  src={logoChampLisse}
                  alt="Logo"
                />
              </Grid>
            }
            title="Découvrir la Maison"
            buttonTitle="Découvrir notre Maison"
            route="lamaison"
            position="left"
          />
        </Grid>
        <Grid item className={classes.maisonHome}>
          <ArticleComponent
            image={isMob ? serviceVigne2 : raisinCoupe3}
            push={push}
            darkModeActive={darkModeActive}
            text={[
              "À l'occasion des vendanges 2023, la Maison Pinte vous invite de fin août à mi-septembre. La période des vendanges, réalisées à la main, est d'environ de 8 à 15 jours en fonction des saisons.",
              "Primordial à l'élaboration de grands champagnes, cette cueillette artisanale sélectionne les meilleures grappes avec précaution afin de préserver leurs arômes."
            ]}
            title="En ce moment"
            buttonTitle="Découvrir nos Actualités"
            route="actualites"
            position="right"
          />
        </Grid>
        <Grid
          style={{ marginTop: '10%', textAlign: '-webkit-center' as any }}
          item
          className={classes.gridMap}
        >
          <Typography className={classes.typoText} variant="h4">
            Où sommes-nous?
          </Typography>
          <Grid className={classes.mapLisse} item>
            <Map />
            <Typography className={classes.typoAdresse} variant="h4">
              6 Grand Rue, Lisse-en-Champagne, 51300 Champagne
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
