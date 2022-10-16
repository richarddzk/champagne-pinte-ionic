import React from 'react'
import { Grid, Button } from '@mui/material'
import { useGoogleLogin } from 'react-google-login'
import Image from '@/Utils/MidgardImage'
import { useSnackbar } from 'notistack'
import google from '../../../../public/image/utils/google.webp'
import useGoogleAuthentication from './useGoogleAuthentification'
import useStyles from '../styles'

const clientId = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID

interface LoginProps {
  register: any
}

const Login: React.FC<LoginProps> = () => {
  const { enqueueSnackbar } = useSnackbar()
  const onFailure = () => {
    enqueueSnackbar('Failed to login to your Goggle account 😢 ', {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      variant: 'error'
    })
  }
  const { classes } = useStyles()

  const { handleSuccess } = useGoogleAuthentication()
  const onSuccess = (res: any) => {
    handleSuccess(res.tokenObj.access_token)
  }
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: clientId ?? '',
    accessType: 'offline'
  })

  return (
    <>
      <Button type="button" onClick={signIn} className={classes.googeGridButton}>
        <Grid
          className={classes.gridLoginButton}
          container
          justifyContent="center"
          alignItems="center"
          direction="row"
        >
          <Image style={{ objectFit: 'contain' }} fill src={google} alt="google login" />
        </Grid>
      </Button>
    </>
  )
}

export default Login
