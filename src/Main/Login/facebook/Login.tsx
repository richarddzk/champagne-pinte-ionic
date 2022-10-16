import React, { useEffect } from 'react'
import { Button, Grid } from '@mui/material'
import Router from 'next/router'

import { useSnackbar } from 'notistack'
import { useAuth } from '@/Main/auth-provider/AuthProvider'
import Image from '@/Utils/MidgardImage'
import { TData } from '@/Main/auth-provider/interfaces'
import useStyles from '../styles'
import initFacebookSdk from './helpers'
import { LoginProps } from './interfaces'
import { useFacebook } from './provider/FacebookProvider'
import facebook from '../../../../public/image/utils/facebook.webp'

const Login: React.FC<LoginProps> = () => {
  const { classes } = useStyles()
  const { login } = useFacebook()
  const { enqueueSnackbar } = useSnackbar()

  const { auth } = useAuth()

  const onSuccess = (res: TData) => {
    enqueueSnackbar(`Bienvenue ${res.firstName} 😊`, {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      variant: 'success'
    })
    Router.push(' /')
  }

  useEffect(() => {
    // wait for facebook sdk before startup
    initFacebookSdk()
  }, [])
  const handleLogin = (res: TData | undefined) => {
    if (res) {
      onSuccess(res)
    }
  }
  useEffect(() => {
    handleLogin(auth)
  }, [auth])
  return (
    <>
      <Button
        onClick={async () => {
          await login()
        }}
        type="button"
        className={classes.googeGridButton}
      >
        <Grid
          className={classes.gridLoginButton}
          container
          justifyContent="center"
          alignItems="center"
          direction="row"
        >
          <Image style={{ objectFit: 'contain' }} fill src={facebook} alt="facebook login" />
        </Grid>
      </Button>
    </>
  )
}

export default Login
