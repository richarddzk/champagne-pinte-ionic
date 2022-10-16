import React, { useState } from 'react'
import Image from '@/Utils/MidgardImage'
import { Grid, Button, Paper, Divider, InputBase, Typography } from '@mui/material'
import { useDarkMode } from 'next-dark-mode'
import { useMutation } from '@apollo/client'
import EmailIcon from '@mui/icons-material/Email'
import { useSnackbar } from 'notistack'
import * as Yup from 'yup'
import SEND_NEWSLETTER_CONFIRMATION from '@/Main/requests'
import PathLink from '@/Main/PathLink'
import LoginIcon from '@mui/icons-material/Login'
import Router from 'next/router'
import { useAuth } from '@/Main/auth-provider/AuthProvider'

import { Main } from '../../Main'
import useStyles from './style'
import mainLogoB from '../../../public/image/logo/MainLogoChampBlack.webp'
import mainLogoW from '../../../public/image/logo/MainLogoChampWhite.webp'

const Newsletter: React.FC = () => {
  const [emailLocal, setEmailLocal] = useState<string | undefined>(undefined)

  const { classes } = useStyles()

  const { darkModeActive } = useDarkMode()

  const [sendNewsletterConfirmation] = useMutation(SEND_NEWSLETTER_CONFIRMATION)
  const { enqueueSnackbar } = useSnackbar()
  const { auth } = useAuth()

  const SendNewsletterConfirmation = async () => {
    const schema = Yup.object().shape({
      email: Yup.string().email().required()
    })

    if (!(await schema.isValid({ email: emailLocal }))) {
      return enqueueSnackbar('Cette adresse mail existe déjà ou ne possede pas le bon format', {
        variant: 'error'
      })
    }

    sendNewsletterConfirmation({
      variables: {
        email: emailLocal
      }
    })
      .catch(() => {
        enqueueSnackbar('Cette adresse mail existe déjà ou ne possede pas le bon format', {
          variant: 'error'
        })
      })
      .then((res) => {
        if (res) {
          enqueueSnackbar('Vous allez recevoir un email de confirmation', {
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'center'
            },
            variant: 'success'
          })
        }
      })

    return true
  }

  return (
    <Main account>
      <Grid container className={classes.container} direction="column">
        <Grid item xs={12}>
          <PathLink />
        </Grid>
        <Grid container>
          <Grid className={classes.gridNewsletter}>
            <Grid container justifyContent="center">
              <Image
                alt="mainLogoB"
                className={classes.homeLogo}
                width={85.5}
                height={60.75}
                src={!darkModeActive ? mainLogoB : mainLogoW}
              />
            </Grid>

            <Grid container justifyContent="center" direction="column">
              <Typography
                style={{
                  maxWidth: '100%',
                  textAlign: 'center',
                  padding: 10,
                  paddingTop: 20,
                  fontWeight: 'bold'
                }}
                variant="h6"
              >
                Ne rien manquer de l'actualité de la Maison !
              </Typography>
              <Typography style={{ maxWidth: '100%', padding: 10 }} variant="body1">
                Inscrivez vous à la Newsletter afin de découvrir le monde de la maison Pinte et
                rester informé de nos lancements et événements futurs.
              </Typography>

              <Paper
                style={{ maxWidth: '100%', padding: 10 }}
                sx={{
                  p: '10px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  maxWidth: '100%'
                }}
              >
                <InputBase
                  style={{ maxWidth: '100%' }}
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Adresse mail"
                  inputProps={{ 'aria-label': 'Adresse mail' }}
                  onChange={(e: { target: { value: string } }) => {
                    setEmailLocal(e?.target?.value as string)
                  }}
                  value={emailLocal}
                />

                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <Button
                  endIcon={<EmailIcon />}
                  onClick={() => {
                    SendNewsletterConfirmation()
                  }}
                >
                  {' '}
                  Soumettre
                </Button>
              </Paper>
            </Grid>
            {!auth && (
              <>
                <Grid
                  className={classes.center}
                  justifyContent="center"
                  alignItems="center"
                  item
                  xs={12}
                >
                  <Divider
                    textAlign="center"
                    variant="middle"
                    style={{ paddingTop: 50, width: '50%' }}
                  />
                </Grid>

                <Grid item style={{ maxWidth: '100%', marginTop: 50 }} xs>
                  <Typography style={{ padding: 10 }} variant="body1">
                    Vous pouvez également vous creer un compte afin de faciliter vos prochaines
                    commandes, et de vous inscrire à notre Newsletter
                  </Typography>
                </Grid>
                <Grid item xs>
                  {/* <Divider
                      sx={{ height: 28, m: 0.5 }}
                      orientation="vertical"
                    /> */}
                  <Button
                    style={{ minWidth: 'fit-content', padding: 10 }}
                    endIcon={<LoginIcon />}
                    onClick={() => {
                      Router.push('  /connexion')
                    }}
                  >
                    {' '}
                    S'inscrire
                  </Button>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Main>
  )
}
export default Newsletter
