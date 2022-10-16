import * as React from 'react'
import { useRouter } from 'next/router'
import Image from '@/Utils/MidgardImage'
import dynamic from 'next/dynamic'
import { useSnackbar } from 'notistack'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import ButtonStyled from '@/Main/ButtonStyled'
import useStyles from '@/Main/style'
import AlcoolLegalList from '@/Utils/AlcoolLegalList'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import DialogContent from '@mui/material/DialogContent'
import Link from '@mui/material/Link'

import { useDarkMode } from 'next-dark-mode'
import CountrySelect from '@/Utils/CountrySelect'
import { GlobalStyles } from 'tss-react'
import useScreen from '@/Utils/hooks/useScreen'
import infoTriLogo from '../../../public/image/logo/infoTri.webp'
import infoCaloriesLogoW from '../../../public/image/logo/infoCalories.webp'
import mainLogoB from '../../../public/image/logo/MainLogoChampBlack.webp'

export const ACCEPT_CONDITIONS = 'ACCEPT_CONDITIONS_CHAMPAGNE_PINTE'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})

const SkeletonFallBack = dynamic(() => import('./SkeletonFallBack'), {
  loading: () => <Loading />
})

const TextField = dynamic(() => import('@mui/material/TextField'), {
  loading: () => <Loading />
})

interface ConditionsDialogProps {
  conditionsAccepted?: any
}

const ConditionsDialog: React.FC<ConditionsDialogProps> = ({ conditionsAccepted }) => {
  const [country_local, setCountry_local] = React.useState<{
    label: string | null
    value: string | null
  }>({
    label: 'France',
    value: 'FR'
  })
  const [value, setValue] = React.useState<Date>(new Date().setFullYear(1998) as unknown as Date)

  const { enqueueSnackbar } = useSnackbar()
  const router = useRouter()
  const { darkModeActive, switchToLightMode } = useDarkMode()
  React.useEffect(() => {
    if (darkModeActive) switchToLightMode()
  }, [])
  const { classes } = useStyles()

  const { isMob } = useScreen()

  const StoreConditionAccepted = () => {
    const current = new Date().getFullYear()
    let age = 0
    if (value) age = current - new Date(value).getFullYear()

    // @ts-ignore
    const legalAge = AlcoolLegalList[`${country_local.label}`]

    if (age >= legalAge) {
      localStorage.setItem(
        ACCEPT_CONDITIONS,
        JSON.stringify({ alcool: { allow: true }, cookies: { allow: true } })
      )
      router.push('/accueil')
    } else {
      enqueueSnackbar('Vous n etes pas autorisé légalement à acceder à ce site', {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right'
        },
        variant: 'error'
      })
    }
  }

  return (
    <Dialog
      fullScreen={isMob ? true : undefined}
      open
      aria-labelledby="responsive-dialog-title"
      PaperProps={{
        sx: {
          borderRadius: 20,
          borderStyle: 'solid',
          overflow: 'hidden'
        }
      }}
    >
      <GlobalStyles
        styles={{
          '.MuiAutocomplete-listbox': {
            height: 300
          }
        }}
      />
      <DialogTitle id="responsive-dialog-title">
        <Grid item style={{ textAlign: 'center' }} xs={12}>
          <Image
            priority
            alt="mainLogo"
            style={{ width: 85.5 * 1.5, height: 60.75 * 1.5 }}
            src={mainLogoB}
          />
        </Grid>
      </DialogTitle>
      <DialogContent>
        {conditionsAccepted === undefined ? (
          <SkeletonFallBack />
        ) : (
          <>
            <Typography className={classes.typoBody1}>
              L’abus d’alcool est dangereux pour la santé. À consommer avec modération
            </Typography>
            <Typography className={classes.typoTitle} variant="body2">
              PAYS / RÉGION & DATE DE NAISSANCE
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CountrySelect country={country_local} setCountry={setCountry_local} noTitle />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    disableFuture
                    maxDate={new Date()} // maxDate
                    views={['year']}
                    value={value}
                    onChange={(newValue) => {
                      if (newValue) setValue(newValue)
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth helperText={null} />}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item style={{ textAlign: 'center' }} xs={12}>
                <ButtonStyled
                  height={!isMob ? 50 : 25}
                  width={!isMob ? 150 : 75}
                  title="Valider"
                  onClick={() => StoreConditionAccepted()}
                />
              </Grid>
              <Grid item style={{ textAlign: 'center', paddingBottom: 10 }} xs={12}>
                <Grid container direction="row">
                  <Grid className={classes.typoBody2} item xs={10}>
                    <Typography variant="body2" gutterBottom>
                      En cliquant sur "valider", j'accepte les{' '}
                      <Link style={{ color: '#786622' }} href="/conditions" variant="body2">
                        Conditions Générales d'Utilisation
                      </Link>{' '}
                      et déclare avoir lu la{' '}
                      <Link style={{ color: '#786622' }} href="/charte" variant="body2">
                        Charte données personnelles et cookies.
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Image
                      priority
                      className={classes.infoCalories}
                      onClick={() => {
                        window.open('https://info-calories-alcool.org/', '_blank')
                      }}
                      alt="infoCaloriesLogoB"
                      style={{
                        width: !isMob ? 225 * 0.32 : 225 * 0.2,
                        height: !isMob ? 193 * 0.32 : 193 * 0.2
                      }}
                      src={infoCaloriesLogoW}
                    />
                  </Grid>
                </Grid>
                <Typography className={classes.typoBody2} variant="body2" gutterBottom>
                  La maison Pinte est en faveur d'une consommation modérée de ses produits. L'ABUS
                  D'ALCOOL EST DANGEREUX POUR LA SANTÉ, À CONSOMMER AVEC MODÉRATION.
                </Typography>
                <Grid container className={classes.consignes} direction="row">
                  <Grid item className={classes.typoBody2} xs={10}>
                    <Typography
                      onClick={() => {
                        window.open('https://www.triercestdonner.fr/guide-du-tri', '_blank')
                      }}
                      variant="body2"
                      gutterBottom
                    >
                      Nos emballages peuvent faire l'objet de consigne de tri. www.consignedetri.fr
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Image
                      onClick={() => {
                        window.open('https://www.triercestdonner.fr/guide-du-tri', '_blank')
                      }}
                      alt="mainLogoB"
                      style={{
                        width: !isMob ? 178 * 0.25 : 178 * 0.2,
                        height: !isMob ? 180 * 0.25 : 180 * 0.2
                      }}
                      src={infoTriLogo}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
export default ConditionsDialog
