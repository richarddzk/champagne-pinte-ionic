import React, { useEffect } from 'react'
import { Button, Grid } from '@mui/material'
import Router from 'next/router'
import useI18n from '@/Utils/hooks/use-i18n'
import { useSnackbar } from 'notistack'
import { useAuth } from '@/Main/auth-provider/AuthProvider'
import Image from 'next/future/image'
import { TData } from '@/Main/auth-provider/interfaces'
import useStyles from '../styles'
import initFacebookSdk from './helpers'
import { LoginProps } from './interfaces'
import { useFacebook } from './provider/FacebookProvider'
import facebook from '../../../../public/img/utils/facebook.webp'

const Login: React.FC<LoginProps> = () => {
  const { classes } = useStyles()
  const { login } = useFacebook()
  const { enqueueSnackbar } = useSnackbar()
  const i18n = useI18n()
  const { activeLocale } = i18n
  const { auth } = useAuth()

  const onSuccess = (res: TData) => {
    enqueueSnackbar(`Bienvenue ${res.firstName} 😊`, {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      variant: 'success'
    })
    Router.push(`/${activeLocale ?? 'fr'}/`)
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
