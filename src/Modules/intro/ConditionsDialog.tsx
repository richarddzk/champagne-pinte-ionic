import * as React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/future/image'
import dynamic from 'next/dynamic'
import { useSnackbar } from 'notistack'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import ButtonStyled from '@/Main/ButtonStyled'
import useStyles from '@/Main/style'
import AlcoolLegalList from '@/Utils/AlcoolLegalList'

import useMediaQuery from '@mui/material/useMediaQuery'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import DialogContent from '@mui/material/DialogContent'
import Link from '@mui/material/Link'

import infoTriLogo from '../../../public/img/logo/infoTri.webp'
import infoCaloriesLogoW from '../../../public/img/logo/infoCalories.webp'
import mainLogoB from '../../../public/img/logo/MainLogoChampBlack.webp'

export const ACCEPT_CONDITIONS = 'ACCEPT_CONDITIONS_CHAMPAGNE_PINTE'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})

const SkeletonFallBack = dynamic(() => import('./SkeletonFallBack'), {
  loading: () => <Loading />
})

const CountrySelect = dynamic(() => import('@/Utils/CountrySelect'), {
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

  const { classes, theme } = useStyles()

  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

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
      router.push('/home')
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
    <Dialog fullScreen={fullScreen} open aria-labelledby="responsive-dialog-title">
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
              Pour visiter notre site, vous devez être en âge de consommer de l'alcool dans votre
              pays/région. S'il n'y a pas d'âge légal de consommation, vous devez avoir plus de 21
              ans.
            </Typography>
            <Typography className={classes.typoTitle}>PAYS / RÉGION & DATE DE NAISSANCE</Typography>
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
                  height={50}
                  width={150}
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
                        window.location.href = 'https://info-calories-alcool.org/'
                      }}
                      alt="infoCaloriesLogoB"
                      style={{ width: 225 * 0.32, height: 193 * 0.32 }}
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
                        window.location.href = 'https://www.triercestdonner.fr/guide-du-tri'
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
                        window.location.href = 'https://www.triercestdonner.fr/guide-du-tri'
                      }}
                      alt="mainLogoB"
                      style={{ width: 180 * 0.25, height: 178 * 0.25 }}
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
