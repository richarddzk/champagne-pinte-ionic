/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Image from '@/Utils/MidgardImage'
import { useDarkMode } from 'next-dark-mode'
import { useSnackbar } from 'notistack'
import Router from 'next/router'
import InputOutlinedIcon from '@mui/icons-material/InputOutlined'
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined'
import {
  Stepper,
  Step,
  StepButton,
  IconButton,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  FormControl,
  FormHelperText,
  Divider
} from '@mui/material'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import Encrypt from '@/Utils/Encrypt'
import useScreen from '@/Utils/hooks/useScreen'
import { useAuth } from '../auth-provider/AuthProvider'

import mainLogoW from '../../../public/image/logo/MainLogoChampWhite.webp'
import mainLogoB from '../../../public/image/logo/MainLogoChampBlack.webp'
import tableChamp from '../../../public/image/table/tableChamp1.webp'
import tableChamp1Mob from '../../../public/image/table/tableChamp1Mob.webp'
import LoginGoogle from './google'
import LoginFacebook from './facebook'
import useStyles from './styles'
import Copyright from '../Copyright'
import PasswordResend from './PasswordResend'

const steps = [
  { label: 'Connectez-vous', icon: <InputOutlinedIcon /> },
  { label: 'Créer votre compte', icon: <AccountBoxOutlinedIcon /> }
]

interface MyForm {
  username: string
  password: string
  remember: boolean
  confirmPwd: string
  email: string
  confirmEmail: string
  firstName: string
  lastName: string
}

const Login: React.FC = () => {
  const { classes } = useStyles()

  const { darkModeActive } = useDarkMode()
  const { login, Register } = useAuth()
  const { enqueueSnackbar } = useSnackbar()
  const [activeStep, setActiveStep] = useState(0)
  const handleStep = (step: number) => () => {
    setActiveStep(step)
  }
  const [openMail, setOpenMail] = React.useState(false)

  const handleClickOpen = () => {
    setOpenMail(true)
  }
  const handleClose = () => {
    setOpenMail(!openMail)
  }

  const formSchema = Yup.object().shape({
    password: Yup.string().min(8, 'Au moins 8 character'),
    confirmPwd: Yup.string().oneOf([Yup.ref('password')], 'Les mots de passe ne correspondent pas'),
    email: Yup.string().email('Format Incorrect'),
    confirmEmail: Yup.string().oneOf([Yup.ref('email')], 'Les E-mails ne correspondent pas')
  })
  const formOptions = { resolver: yupResolver(formSchema) }
  const { register, handleSubmit, formState } = useForm(formOptions)

  const handleError = (message: string) => {
    enqueueSnackbar(message, {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      },
      variant: 'error'
    })
  }

  const submit = async (e: any) => {
    const { username, password, remember, email, confirmEmail, confirmPwd, firstName, lastName } = e

    const hashedPassword = await Encrypt.hash(password)

    if (activeStep === 0) {
      await login({ username, password: hashedPassword }, remember).catch(() => {
        handleError('Email ou mot de passe non valide 😢')
      })
    } else {
      if (email !== confirmEmail || password !== confirmPwd) {
        handleError('Email ou mot de passe non valide 😢')
      }
      await Register({
        username,
        email,
        password: hashedPassword,
        firstName,
        lastName
      }).catch((exp: any) => {
        handleError(exp)
      })
    }
  }
  const onSubmit = (data: MyForm) => {
    if (activeStep === 0) {
      const credential = {
        username: data.email,
        password: data.password,
        remember: data.remember ? true : data.remember
      }
      submit(credential)
    } else {
      const credential = {
        username: data.email,
        password: data.password,
        confirmPwd: data.confirmPwd,
        email: data.email,
        confirmEmail: data.confirmEmail,
        firstName: data.firstName,
        lastName: data.lastName
      }

      submit(credential)
    }
  }

  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const { isMob } = useScreen()

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }
  const { errors } = formState
  useEffect(() => {
    if (errors.confirmPwd) {
      handleError((errors.confirmPwd.message as unknown as string) ?? 'Error in logins')
    }
    if (errors.email) {
      handleError((errors.email.message as unknown as string) ?? 'Error in logins')
    }
  }, [errors.length])

  return (
    <Grid container component="main" className={classes.container}>
      <CssBaseline />
      <PasswordResend open={openMail} onClose={handleClose} />
      <Grid item xs={12} className={classes.gridImage}>
        <Image
          fill
          className={classes.Image}
          src={isMob ? tableChamp1Mob : tableChamp}
          alt="tableChamp"
          placeholder="blur"
        />
      </Grid>

      <Grid className={classes.gridForm} item xs={4}>
        <Button
          onClick={() => {
            Router.push(' /')
          }}
          className={classes.button}
        >
          <Image
            alt="mainLogoB"
            style={{ width: 85.5 * 1.5, height: 60.75 * 1.5 }}
            src={!darkModeActive ? mainLogoB : mainLogoW}
          />
        </Button>
        <Stepper className={classes.stepper} nonLinear activeStep={activeStep}>
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepButton
                style={{
                  color: activeStep === index ? '#CCBF90' : 'black'
                }}
                icon={step.icon}
                onClick={handleStep(index)}
              >
                {step.label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <form
          className={classes.form}
          // @ts-ignore
          onSubmit={handleSubmit(onSubmit)}
        >
          {activeStep === 0 ? (
            <Grid>
              {' '}
              <Grid>
                <TextField
                  required
                  fullWidth
                  margin="dense"
                  className={classes.TextField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  color="primary"
                  error={Boolean(errors.email)}
                  helperText={(errors.email ? errors.email.message : ' ') as any}
                  id="email"
                  label="Adresse E-Mail"
                  autoComplete="email"
                  autoFocus
                  {...register('email')}
                />
              </Grid>
              <Grid>
                <FormControl className={classes.TextField} fullWidth>
                  <InputLabel shrink htmlFor="outlined-adornment-password">
                    Mot de passe
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    margin="dense"
                    error={Boolean(errors.password)}
                    label="Mot de passe"
                    autoComplete="password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    {...register('password')}
                  />
                  <FormHelperText id="component-helper-text">
                    {(errors.password ? errors.password.message : ' ') as any}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid container direction="row" justifyContent="space-around" alignItems="center">
                <Grid>
                  <FormControlLabel
                    control={
                      <Checkbox value="remember" color="primary" {...register('remember')} />
                    }
                    style={{
                      color: '#CCBF90',
                      font: ' italic 1.2em Times New Roman, serif'
                    }}
                    label="Se souvenir de moi"
                  />
                </Grid>
                <Grid>
                  <Link
                    style={{
                      font: 'italic  1.2em Times New Roman, serif',
                      cursor: 'pointer'
                    }}
                    onClick={() => {
                      handleClickOpen()
                    }}
                    variant="body2"
                  >
                    Mot de passe oublié
                  </Link>
                </Grid>
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
                  style={{ marginBottom: 5, paddingTop: 10, width: '70%' }}
                />
              </Grid>
              <Button
                type="submit"
                variant="outlined"
                style={{
                  font: 'italic bold 1.2em Times New Roman, serif',
                  borderRadius: 24
                }}
                sx={{ mt: 3, mb: 2 }}
              >
                Se connecter
              </Button>
              <Grid
                className={classes.center}
                justifyContent="center"
                alignItems="center"
                container
                direction="row"
              >
                <Grid item xs={6}>
                  <LoginGoogle register={false} />
                </Grid>
                <Grid item xs={6}>
                  <LoginFacebook register={false} />
                </Grid>
              </Grid>
            </Grid>
          ) : (
            // @ts-ignore
            <>
              <Grid direction="column" container>
                <Grid direction="row" container>
                  <TextField
                    margin="dense"
                    className={classes.TextField}
                    InputLabelProps={{
                      shrink: true
                    }}
                    required
                    fullWidth
                    id="firstName"
                    label="Prenom"
                    autoComplete="firstName"
                    autoFocus
                    {...register('firstName')}
                  />

                  <TextField
                    margin="dense"
                    className={classes.TextField}
                    InputLabelProps={{
                      shrink: true
                    }}
                    required
                    fullWidth
                    id="lastName"
                    label="Nom"
                    autoComplete="lastName"
                    {...register('lastName')}
                  />
                </Grid>
                <Grid direction="row" container>
                  <TextField
                    margin="dense"
                    className={classes.TextField}
                    InputLabelProps={{
                      shrink: true
                    }}
                    required
                    fullWidth
                    error={Boolean(errors.email)}
                    helperText={(errors.email ? errors.email.message : ' ') as any}
                    id="email"
                    label="Adresse E-Mail"
                    autoComplete="email"
                    {...register('email')}
                  />

                  <TextField
                    margin="dense"
                    className={classes.TextField}
                    InputLabelProps={{
                      shrink: true
                    }}
                    required
                    fullWidth
                    error={Boolean(errors.confirmEmail)}
                    helperText={(errors.confirmEmail ? errors.confirmEmail.message : ' ') as any}
                    id="confirmEmail"
                    label="Confirmer Adresse E-Mail"
                    autoComplete="confirmEmail"
                    {...register('confirmEmail')}
                  />
                </Grid>
                <Grid direction="row" justifyContent="space-between" container spacing={1}>
                  <Grid item>
                    <FormControl className={classes.TextField}>
                      <InputLabel shrink htmlFor="outlined-password">
                        Mot de passe
                      </InputLabel>
                      <OutlinedInput
                        required
                        id="outlined-password"
                        type={showPassword ? 'text' : 'password'}
                        margin="dense"
                        fullWidth
                        error={Boolean(errors.password)}
                        label="Mot de passe"
                        autoComplete="password"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="Voir les mots de passes"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                        {...register('password')}
                      />
                      <FormHelperText id="component-helper-text">
                        {(errors.password ? errors.password.message : ' ') as any}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl className={classes.TextField}>
                      <InputLabel shrink htmlFor="outlined-adornment-confirmPwd">
                        Confirmer Mot de passe
                      </InputLabel>
                      <OutlinedInput
                        required
                        id="outlined-adornment-confirmPwd"
                        type={showPassword ? 'text' : 'password'}
                        margin="dense"
                        label="Confirmer Mot de passe"
                        fullWidth
                        error={Boolean(errors.confirmPwd)}
                        autoComplete="confirmPwd"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="Voir les mots de passes"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                        {...register('confirmPwd')}
                      />
                      <FormHelperText id="component-helper-text">
                        {(errors.confirmPwd ? errors.confirmPwd.message : ' ') as any}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
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
                    variant="outlined"
                    style={{
                      font: 'italic bold 1.2em Times New Roman, serif',
                      borderRadius: 24
                    }}
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Creer mon compte
                  </Button>
                </Grid>
              </Grid>
              <Grid
                className={classes.center}
                justifyContent="center"
                alignItems="center"
                container
                direction="row"
              >
                <Grid item xs={6}>
                  <LoginGoogle register />
                </Grid>
                <Grid item xs={6}>
                  <LoginFacebook register />
                </Grid>
              </Grid>
            </>
          )}
        </form>
        <Grid className={classes.center} justifyContent="center" alignItems="center" item xs={12}>
          <Divider
            textAlign="center"
            variant="middle"
            style={{ marginBottom: 10, paddingTop: 10, width: '90%' }}
          />
        </Grid>
        <Grid container alignContent="center" justifyContent="center" direction="row">
          <Copyright />
        </Grid>
      </Grid>
    </Grid>
  )
}
export default Login
