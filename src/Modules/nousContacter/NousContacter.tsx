import React from 'react'
import { useMutation } from '@apollo/client'
import { useSnackbar } from 'notistack'
import * as Yup from 'yup'
import PathLink from '@/Main/PathLink'
import dynamic from 'next/dynamic'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import Grid from '@mui/material/Grid'
import useScreen from '@/Utils/hooks/useScreen'
import FormControl from '@mui/material/FormControl'
import Divider from '@mui/material/Divider'
import FormControlLabel from '@mui/material/FormControlLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Radio, { RadioProps } from '@mui/material/Radio'
import CountrySelect from '@/Utils/CountrySelect'
import loading2 from 'react-useanimations/lib/loading2'

import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import { Main } from '@/Main'
import { useFormik } from 'formik'
import FormHelperText from '@mui/material/FormHelperText'
import router from 'next/router'
import useStyles, { BootstrapInput, BpCheckedIcon, BpIcon } from './style'
import SEND_CONTACT from './request'

const UseAnimations = dynamic(() => import('react-useanimations'), {
  loading: () => <>...</>
})

const TextField = dynamic(() => import('@mui/material/TextField'), {
  loading: () => <>...</>
})

// Inspired by blueprintjs
function BpRadio(props: RadioProps) {
  return (
    <Radio
      sx={{
        '&:hover': {
          bgcolor: 'transparent'
        }
      }}
      disableRipple
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  )
}

const NousContacter: React.FC = () => {
  const { classes } = useStyles()
  const [SendContact, { loading: loadingSendContact }] = useMutation(SEND_CONTACT)
  const { enqueueSnackbar } = useSnackbar()

  const { isTablette } = useScreen()
  const handleError = (message: string) => {
    enqueueSnackbar(message, {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      },
      variant: 'error'
    })
  }

  const HandleContactConfirmation = async (e: {
    sujet: string
    civilite: string
    firstName: string
    lastName: string
    email: string
    telephone: string
    codePostal: string
    message: string
    pays: string
    birthday: Date | undefined
  }) => {
    const {
      email,
      firstName,
      lastName,
      civilite,
      telephone,
      codePostal,
      message,
      pays,
      birthday,
      sujet
    } = e

    SendContact({
      variables: {
        data: {
          email,
          firstName,
          lastName,
          civilite,
          telephone,
          codePostal,
          message,
          pays,
          birthday,
          sujet
        }
      }
    })
      .then((res) => {
        if (res) {
          enqueueSnackbar('Votre message à bien été communiqué à notre équipe', {
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'center'
            },
            variant: 'success'
          })

          router.push('/nousContacter')
        }
      })
      .catch((error) => handleError(error))

    return true
  }

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validationSchema = Yup.object({
    telephone: Yup.string()
      .matches(phoneRegExp, 'Le numero de telephone est invalide')
      .min(10, 'Le numero de telephone est trop court')
      .max(10, 'Le numero de telephone est trop long'),
    email: Yup.string().email('Format Incorrect')
  })
  const [newDate, setNewDate] = React.useState<Date>()
  const [country_local, setCountry_local] = React.useState<{
    label: string | null
    value: string | null
  }>({
    label: 'France',
    value: 'FR'
  })
  const formik = useFormik({
    initialValues: {
      sujet: null ?? 'other',
      civilite: null,
      firstName: null,
      lastName: null,
      email: null,
      telephone: null,
      codePostal: null,
      message: null,
      pays: 'fr',
      birthday: Date || undefined
    },
    validationSchema,
    onSubmit: (values) => {
      HandleContactConfirmation({
        ...values,
        birthday: newDate,
        pays: country_local.label ?? 'fr'
        // sujet: null ?? 'other'
      } as any)
    }
  })

  return (
    <Main>
      <Grid
        container
        className={classes.container}
        style={{ paddingTop: isTablette ? 10 : 70 }}
        direction="column"
      >
        <Grid item xs={12}>
          <PathLink />
        </Grid>
        <Grid container>
          <form
            className={classes.form}
            // @ts-ignore
            onSubmit={formik.handleSubmit}
          >
            <Grid className={classes.MainGrid} direction="column" container rowSpacing={2}>
              <Grid item justifyContent="center">
                <Typography className={classes.typo} variant="h3">
                  Contact
                </Typography>
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
                    style={{ marginBottom: 10, paddingTop: 10, width: '70%' }}
                  />
                </Grid>
                <Typography
                  style={{ maxWidth: '100%', padding: 10, fontFamily: 'Times New Roman, serif' }}
                  variant="body1"
                >
                  Merci de sélectionner le sujet pour lequel vous souhaitez nous contacter.
                </Typography>
              </Grid>
              <Grid direction="row" container>
                <FormControl
                  className={classes.MenuItem}
                  fullWidth
                  error={formik.touched.sujet && Boolean(formik.errors.sujet)}
                  required
                >
                  <InputLabel className={classes.TextField} shrink id="civilite">
                    Sujet
                  </InputLabel>
                  <Select
                    required
                    placeholder="Sujet"
                    name="sujet"
                    autoFocus
                    input={<BootstrapInput />}
                    value={formik.values.sujet}
                    onChange={formik.handleChange}
                    error={formik.touched.sujet && Boolean(formik.errors.sujet)}
                  >
                    <MenuItem className={classes.MenuItem} value="infoProduit">
                      Information produit
                    </MenuItem>
                    <MenuItem className={classes.MenuItem} value="visites">
                      Visites
                    </MenuItem>
                    <MenuItem className={classes.MenuItem} value="pointDeVente">
                      Point de vente
                    </MenuItem>
                    <MenuItem className={classes.MenuItem} value="receptionSurMesure">
                      Récéption sur mesure
                    </MenuItem>
                    <MenuItem className={classes.MenuItem} value="reclamation">
                      Réclamation
                    </MenuItem>
                    <MenuItem className={classes.MenuItem} value="autre">
                      Autre
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid
                direction="row"
                sx={{
                  mt: 2
                }}
                container
              >
                <FormControl error={formik.touched.civilite && Boolean(formik.errors.civilite)}>
                  <InputLabel className={classes.TextField} shrink id="civilite">
                    Civilité
                  </InputLabel>
                  <RadioGroup
                    row
                    className={classes.radio}
                    aria-labelledby="civilite"
                    name="civilite"
                    value={formik.values.civilite}
                    onChange={formik.handleChange}
                  >
                    <FormControlLabel
                      className={classes.radio}
                      value="female"
                      control={<BpRadio />}
                      label="Mme."
                    />
                    <FormControlLabel
                      className={classes.radio}
                      value="male"
                      control={<BpRadio />}
                      label="Mr."
                    />
                  </RadioGroup>
                  <FormHelperText>
                    {formik.touched.civilite && formik.errors.civilite}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid
                direction="row"
                sx={{
                  mt: 1
                }}
                container
                spacing={2}
              >
                <Grid item xs>
                  <TextField
                    margin="dense"
                    className={classes.TextField}
                    InputLabelProps={{
                      shrink: true
                    }}
                    required
                    fullWidth
                    name="firstName"
                    label="Prénom"
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    margin="dense"
                    className={classes.TextField}
                    InputLabelProps={{
                      shrink: true
                    }}
                    required
                    fullWidth
                    name="lastName"
                    label="Nom"
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                  />
                </Grid>
              </Grid>
              <Grid
                sx={{
                  mt: 1
                }}
                direction="row"
                container
                spacing={2}
              >
                <Grid item xs>
                  <TextField
                    margin="dense"
                    className={classes.TextField}
                    InputLabelProps={{
                      shrink: true
                    }}
                    required
                    fullWidth
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    name="email"
                    label="Adresse E-Mail"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid item xs>
                  <TextField
                    margin="dense"
                    className={classes.TextField}
                    InputLabelProps={{
                      shrink: true
                    }}
                    required
                    fullWidth
                    error={formik.touched.telephone && Boolean(formik.errors.telephone)}
                    helperText={formik.touched.telephone && formik.errors.telephone}
                    value={formik.values.telephone}
                    onChange={formik.handleChange}
                    name="telephone"
                    label="Numéro de téléphone"
                  />
                </Grid>
              </Grid>
              <Grid direction="row" container spacing={2}>
                <Grid style={{ paddingTop: 1 }} item xs>
                  <CountrySelect
                    className={classes.CountrySelect}
                    size="small"
                    country={country_local}
                    setCountry={setCountry_local}
                  />
                </Grid>

                <Grid item xs>
                  <TextField
                    margin="dense"
                    className={classes.TextField}
                    InputLabelProps={{
                      shrink: true
                    }}
                    required
                    fullWidth
                    name="codePostal"
                    label="Code postal"
                    error={formik.touched.codePostal && Boolean(formik.errors.codePostal)}
                    helperText={formik.touched.codePostal && formik.errors.codePostal}
                    value={formik.values.codePostal}
                    onChange={formik.handleChange}
                  />
                </Grid>
              </Grid>
              <Grid
                sx={{
                  mt: 1
                }}
                direction="row"
                container
              >
                <LocalizationProvider dateAdapter={AdapterDateFns} className={classes.TextField}>
                  {/* <DateCompo onChange={formik.handleChange} /> */}
                  <DatePicker
                    className={classes.TextField}
                    disableFuture
                    openTo="year"
                    views={['year', 'month', 'day']}
                    maxDate={new Date()} // maxDate
                    label="Date de naissance"
                    value={newDate}
                    onChange={(value) => {
                      if (value) setNewDate(value)
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        name="birthday"
                        InputLabelProps={{
                          shrink: true
                        }}
                        required
                        fullWidth
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid
                sx={{
                  mt: 4
                }}
                direction="row"
                container
              >
                <TextField
                  margin="dense"
                  className={classes.TextFieldMulti}
                  InputLabelProps={{
                    shrink: true
                  }}
                  required
                  fullWidth
                  error={formik.touched.message && Boolean(formik.errors.message)}
                  helperText={formik.touched.message && formik.errors.message}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  label="Message"
                  name="message"
                  multiline
                  rows={8}
                  placeholder="Votre message ici ...."
                />
              </Grid>

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
                  style={{ marginBottom: 10, paddingTop: 10, width: '70%' }}
                />
              </Grid>
              <Grid justifyContent="center" direction="row" container>
                <Button
                  type="submit"
                  style={{ fontFamily: 'Times New Roman, serif' }}
                  variant="outlined"
                >
                  {loadingSendContact ? (
                    <UseAnimations
                      strokeColor="#CCBF90"
                      size={35}
                      // wrapperStyle={{ marginTop: '5px' }}
                      animation={loading2}
                    />
                  ) : (
                    'Envoyer'
                  )}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Main>
  )
}
export default NousContacter
