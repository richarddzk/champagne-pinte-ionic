import React, { useState } from 'react'
import Image from '@/Utils/MidgardImage'
import { Grid, Paper, Button, Typography, Divider, InputBase } from '@mui/material'
import { v4 as uuid } from 'uuid'
import { useDarkMode } from 'next-dark-mode'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import * as Yup from 'yup'
import { useSnackbar } from 'notistack'
import EmailIcon from '@mui/icons-material/Email'
import dynamic from 'next/dynamic'
import useScreen from '@/Utils/hooks/useScreen'
import useStyles from './style'
import Copyright from './Copyright'
import backgroundFooter from '../../public/image/cave/cave2.webp'
import mainLogoB from '../../public/image/logo/MainLogoChampBlack.webp'
import mainLogoW from '../../public/image/logo/MainLogoChampWhite.webp'
import logo2 from '../../public/image/logo/pintechamplisse2Or.webp'
import SEND_NEWSLETTER_CONFIRMATION from './requests'
import { PageMap, MediaMap } from './Menu/interfaces'
import stripeB from '../../public/image/utils/checkout/stripe1.webp'
import stripeW from '../../public/image/utils/checkout/stripe2.webp'
import legal from '../../public/image/logo/fr-legal.webp'
import ButtonStyled from './ButtonStyled'

const UseAnimations = dynamic(() => import('react-useanimations'), {
  loading: () => <>...</>
})

interface FooterProps {
  account?: boolean
  paddingLeft?: number | string
}

const Footer: React.FC<FooterProps> = ({ account, paddingLeft }) => {
  const [emailLocal, setEmailLocal] = useState<string | undefined>(undefined)
  const { classes, css } = useStyles()

  const router = useRouter()

  const { darkModeActive } = useDarkMode()

  const [sendNewsletterConfirmation] = useMutation(SEND_NEWSLETTER_CONFIRMATION)

  const { enqueueSnackbar } = useSnackbar()

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
  const { isWide, isTablette } = useScreen()

  return (
    <Grid className={classes.gridFooter} style={{ maxWidth: '100%' }} container direction="column">
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
            placeholder="blur"
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
                  placeholder="blur"
                  onClick={() => {
                    router.push('/accueil')
                  }}
                  className={classes.homeLogo}
                  alt="mainLogoB"
                  style={{ width: 85.5, height: 60.75, cursor: 'pointer' }}
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
                  Inscrivez-vous à la Newsletter afin de découvrir le monde de la maison Pinte et
                  rester informé de nos lancements et évènements futurs.
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
                    {!isTablette && 'Soumettre'}
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
            style={{ paddingTop: account ? 50 : 100, paddingLeft }}
            container
            justifyContent="space-evenly"
            direction="column"
          >
            <Grid container justifyContent="center" direction="row">
              {PageMap(classes).map(({ name, page }) => (
                <Button
                  key={uuid()}
                  onClick={() => {
                    router.push(`/${page}`)
                  }}
                >
                  <Grid
                    style={{
                      font: 'italic 1.2em Times New Roman, serif',
                      paddingTop: 5
                    }}
                  >
                    {name}
                  </Grid>
                </Button>
              ))}
              <Image
                alt="shiny"
                placeholder="blur"
                id="shiny"
                onClick={() => {
                  router.push('/accueil')
                }}
                style={{ width: 150, height: 80, cursor: 'pointer' }}
                src={logo2}
              />
            </Grid>

            <Grid container justifyContent="center" direction="row">
              {MediaMap.map((compo) => (
                <Button
                  key={uuid()}
                  onClick={() => {
                    window.open(compo.page, '_blank')
                  }}
                >
                  {compo.name}

                  <UseAnimations
                    key={uuid()}
                    strokeColor="#CCBF90"
                    size={45}
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
                    router.push('/charte')
                  }}
                >
                  Charte données personnelles & cookies
                </Button>
              </Grid>
              <Grid item>
                <Button
                  key={uuid()}
                  onClick={() => {
                    router.push('/conditions')
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
              <Grid
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  overflow: ' auto'
                }}
                container
                alignContent="center"
                justifyContent="center"
                direction="row"
              >
                <Grid
                  style={{
                    width: '33%',
                    height: '10vh',
                    minWidth: 180,

                    position: 'relative',
                    overflow: 'hidden',
                    textAlign: 'right'
                  }}
                  justifyContent="center"
                  alignItems="center"
                  item
                >
                  <Image
                    width={300 * 0.6}
                    height={168 * 0.6}
                    onClick={() => {
                      window.open('https://stripe.com/', '_blank')
                    }}
                    src={darkModeActive ? stripeB : stripeW}
                    alt="Stripe"
                    style={{ cursor: 'pointer' }}
                  />
                </Grid>
                <Grid
                  style={{
                    width: '33%',
                    minWidth: 150,
                    height: '10vh',
                    position: 'relative',
                    overflow: 'hidden',
                    textAlign: 'center'
                  }}
                  item
                >
                  {' '}
                  <ButtonStyled
                    title="Nous contacter"
                    key={uuid()}
                    onClick={() => {
                      router.push('/nousContacter')
                    }}
                  />
                </Grid>
                <Grid
                  style={{
                    width: '33%',
                    height: '10vh',
                    minWidth: 189,
                    position: 'relative',
                    overflow: 'hidden',
                    textAlign: 'left'
                  }}
                  justifyContent="center"
                  alignContent="center"
                  item
                >
                  <Image
                    width={315 * 0.6}
                    height={151 * 0.6}
                    src={legal}
                    onClick={() => {
                      window.open(
                        'https://www.permis-de-exploitation.com/394-l-alcool-au-mineur.html',
                        '_blank'
                      )
                    }}
                    alt="legal"
                    style={{ cursor: 'pointer' }}
                  />
                </Grid>
              </Grid>
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
