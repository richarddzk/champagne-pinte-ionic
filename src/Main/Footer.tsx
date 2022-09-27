import React, { useState } from 'react'
import Image from 'next/future/image'
import { Grid, Paper, Button, Typography, Divider, InputBase } from '@mui/material'
import { v4 as uuid } from 'uuid'
import { useDarkMode } from 'next-dark-mode'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import * as Yup from 'yup'
import { useSnackbar } from 'notistack'
import EmailIcon from '@mui/icons-material/Email'
import { useMedia } from 'react-use'
import dynamic from 'next/dynamic'
import useStyles from './style'
import Copyright from './Copyright'
import backgroundFooter from '../../public/img/cave/cave2.webp'
import mainLogoB from '../../public/img/logo/MainLogoChampBlack.webp'
import mainLogoW from '../../public/img/logo/MainLogoChampWhite.webp'
import logo2 from '../../public/img/logo/pintechamplisse2Or.webp'
import useI18n from '../Utils/hooks/use-i18n'
import SEND_NEWSLETTER_CONFIRMATION from './requests'
import actionSnack, { PageMap, MediaMap } from './Menu/interfaces'

const UseAnimations = dynamic(() => import('react-useanimations'), {
  loading: () => <>...</>
})

interface FooterProps {
  account?: boolean
}

const Footer: React.FC<FooterProps> = ({ account }) => {
  const [emailLocal, setEmailLocal] = useState<string | undefined>(undefined)
  const { classes, css } = useStyles()

  const i18n = useI18n()
  const { t, activeLocale } = i18n
  const router = useRouter()

  const { darkModeActive } = useDarkMode()

  const [sendNewsletterConfirmation] = useMutation(SEND_NEWSLETTER_CONFIRMATION)

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
  const isWide = useMedia('(min-width: 750px)', false)
  return (
    <Grid
      className={classes.gridFooter}
      style={{ maxWidth: account ? 'calc(100% - 248px)' : '100%', marginLeft: account ? 248 : 0 }}
      container
      direction="column"
    >
      <Grid container>
        <Grid
          className={css({
            lineHeight: 0,
            overflow: 'hidden',
            width: '100%',
            height: account ? 350 : 500
          })}
          item
        >
          <Image
            src={backgroundFooter}
            alt="Logo"
            style={{
              width: '100%',
              height: account ? 350 : 500,
              objectPosition: 'left top',
              objectFit: 'cover'
            }}
          />
        </Grid>

        {!account && (
          <Grid className={classes.gridNewsletter} item xs>
            <Paper className={classes.paperNewsletter} elevation={10}>
              <Grid container justifyContent="center" item>
                <Image
                  className={classes.homeLogo}
                  alt="mainLogoB"
                  style={{ width: 85.5, height: 60.75 }}
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
                    style={{ maxWidth: '100%', minWidth: isWide ? 160 : 100 }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Adresse mail"
                    inputProps={{ 'aria-label': 'Adresse mail' }}
                    onChange={(e) => {
                      setEmailLocal(e?.target?.value as string)
                    }}
                    value={emailLocal}
                  />

                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                  <Button
                    style={{ textAlign: 'center', minWidth: isWide ? 125 : 20 }}
                    endIcon={<EmailIcon />}
                    onClick={() => {
                      SendNewsletterConfirmation()
                    }}
                  >
                    {' '}
                    {isWide && 'Soumettre'}
                  </Button>
                </Paper>
              </Grid>
            </Paper>
          </Grid>
        )}
      </Grid>
      <Grid className={classes.Footer} item>
        <footer>
          <Grid
            style={{ paddingTop: account ? 50 : 100 }}
            container
            justifyContent="space-evenly"
            direction="column"
          >
            <Grid container justifyContent="center" direction="row">
              {PageMap(classes).map(({ name, page }) => (
                <Button
                  key={uuid()}
                  onClick={() => {
                    router.push(`/${activeLocale}${page}`)
                  }}
                >
                  <Grid
                    style={{
                      font: 'italic 1.2em "Fira Sans", serif',
                      paddingTop: 5
                    }}
                  >
                    {t(`${name}`)}
                  </Grid>
                </Button>
              ))}
              <Image alt="shiny" id="shiny" style={{ width: 150, height: 80 }} src={logo2} />
            </Grid>

            <Grid container justifyContent="center" direction="row">
              {MediaMap.map((compo) => (
                <Button
                  key={uuid()}
                  // onClick={() => {
                  //   router.push(`/${activeLocale}${compo.page}`)
                  // }}
                >
                  {compo.name}

                  <UseAnimations
                    key={uuid()}
                    strokeColor="#CCBF90"
                    size={45}
                    onClick={comingSoon}
                    loop={compo.loop}
                    // wrapperStyle={{ marginTop: '5px' }}
                    animation={compo.icon}
                  />
                </Button>
              ))}
            </Grid>

            <Grid
              container
              style={{ paddingTop: 20 }}
              alignContent="center"
              justifyContent="center"
              direction="row"
            >
              <Grid item>
                <Button
                  key={uuid()}
                  onClick={() => {
                    router.push(`/${activeLocale}/charte`)
                  }}
                >
                  Charte données personnelles & cookies
                </Button>
              </Grid>
              <Grid item>
                <Button
                  key={uuid()}
                  onClick={() => {
                    router.push(`/${activeLocale}/conditions`)
                  }}
                >
                  Conditions générales d’utilisation
                </Button>
              </Grid>
            </Grid>

            <Grid
              style={{ paddingTop: 20 }}
              container
              alignContent="center"
              justifyContent="center"
              direction="row"
            >
              <Typography
                color="primary"
                style={{
                  maxWidth: '100%',
                  textAlign: 'center',
                  padding: 10,
                  paddingTop: 20
                }}
                variant="body1"
              >
                L’abus d’alcool est dangereux pour la santé. À consommer avec modération
              </Typography>
            </Grid>
            <Divider variant="middle" />
            <Grid container alignContent="center" justifyContent="center" direction="row">
              <Copyright />
            </Grid>
          </Grid>
        </footer>
      </Grid>
    </Grid>
  )
}
export default Footer
