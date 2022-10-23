import React from 'react'
import Grid from '@mui/material/Grid'
import ButtonStyled from '@/Main/ButtonStyled'
import { useRouter } from 'next/router'
import ShreddedProvider from '@/Modules/intro/ShreddedProvider'

const Error404Page = () => {
  const { push } = useRouter()

  return (
    <ShreddedProvider>
      <Grid
        container
        style={{
          marginTop: 50,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <h1>404</h1>
        <h2>
          <ButtonStyled
            width={250}
            height={50}
            fullybackground
            title="Page d'accueil"
            onClick={() => {
              push('/accueil')
            }}
          />
        </h2>
        <h2>Perdu dans une parcelle de vigne trop grande...</h2>
        <Grid
          sx={{
            position: 'relative',
            borderRadius: 10,
            height: 400,
            minWidth: 200
          }}
          item
          xs
        >
          <video
            autoPlay
            loop
            muted
            style={{
              width: '100%',
              height: 400,
              objectFit: 'cover'
            }}
          >
            <source src="/image/vigne/videoVigne2.mp4" type="video/mp4" />
          </video>
        </Grid>
      </Grid>
    </ShreddedProvider>
  )
}

export default Error404Page
