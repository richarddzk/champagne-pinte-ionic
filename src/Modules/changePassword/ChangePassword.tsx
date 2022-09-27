/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Image from 'next/future/image'
import { useDarkMode } from 'next-dark-mode'
import Router from 'next/router'
import {
  IconButton,
  InputAdornment,
  FormControl,
  FormHelperText,
  Divider,
  TextField
} from '@mui/material'
import { useSnackbar } from 'notistack'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import { useAuth } from '@/Main/auth-provider/AuthProvider'
import { ApolloError, useMutation } from '@apollo/client'
import { ButtonStyled, Main } from '@/Main'
import PathLink from '@/Main/PathLink'
import Encrypt from '@/Utils/Encrypt'
import useI18n from '../../Utils/hooks/use-i18n'
import mainLogoW from '../../../public/img/logo/MainLogoChampWhite.webp'
import mainLogoB from '../../../public/img/logo/MainLogoChampBlack.webp'
import useStyles from './styles'
import { CHANGE_PASSWORD } from './request'
import { changePassword, changePasswordVariables } from './__generated__/changePassword'

interface MyForm {
  password: string
  confirmPwd: string
}

const ChangePassword: React.FC = () => {
  const { classes } = useStyles()
  const i18n = useI18n()
  const { activeLocale } = i18n
  const { darkModeActive } = useDarkMode()
  const { UserInfos } = useAuth()

  const formSchema = Yup.object().shape({
    password: Yup.string().min(8, 'Au moins 8 character'),
    confirmPwd: Yup.string().oneOf([Yup.ref('password')], 'Les mots de passe ne correspondent pas')
  })
  const formOptions = { resolver: yupResolver(formSchema) }
  const { register, handleSubmit, formState } = useForm(formOptions)
  const { enqueueSnackbar } = useSnackbar()
  const handleError = (error: ApolloError) => {
    enqueueSnackbar(error.message, {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      },
      variant: 'error'
    })
  }
  const handleSuccess = (subject: string) => {
    enqueueSnackbar(subject, {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      variant: 'success'
    })
  }
  const [changePasswordMutation] = useMutation<changePassword, changePasswordVariables>(
    CHANGE_PASSWORD,
    {
      onError: handleError,
      onCompleted: () => {
        handleSuccess('Mot de passe updated')
        Router.push(`/${activeLocale ?? 'fr'}/`)
      }
    }
  )

  const submit = async (e: { password: string; confirmPwd: string }) => {
    const { password, confirmPwd } = e
    const hashedPassword = await Encrypt.hash(password)
    if (password !== confirmPwd) {
      return handleError({ message: 'Email ou mot de passe non valide 😢' } as ApolloError)
    }
    if ((UserInfos && !UserInfos.id) || !UserInfos) {
      return handleError({
        message: 'vous devez etre connecté pour changé de mot de passe'
      } as ApolloError)
    }
    return changePasswordMutation({
      variables: {
        id: UserInfos.id,
        password: hashedPassword
      }
    }).catch((exp: any) => {
      handleError(exp)
    })
  }
  const onSubmit = (data: MyForm) => {
    const credential = {
      password: data.password,
      confirmPwd: data.confirmPwd
    }

    submit(credential)
  }

  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }
  const { errors } = formState
  useEffect(() => {
    if (errors.confirmPwd) {
      const message = {
        message: errors.confirmPwd.message ?? 'Error in passwords'
      } as ApolloError
      handleError(message)
    }
  }, [errors.length])
  return (
    <Main>
      <Grid container className={classes.container} direction="column">
        <Grid item xs={12}>
          <PathLink />
        </Grid>
        <Grid container component="main" className={classes.container}>
          <Grid className={classes.gridForm} item xs={4}>
            <Button
              onClick={() => {
                Router.push(`/${activeLocale ?? 'fr'}/`)
              }}
              className={classes.button}
            >
              <Image
                alt="mainLogoB"
                width={85.5 * 1.5}
                height={60.75 * 1.5}
                src={!darkModeActive ? mainLogoB : mainLogoW}
              />
            </Button>

            <form
              className={classes.form}
              // @ts-ignore
              onSubmit={handleSubmit(onSubmit)}
            >
              <Grid direction="column" container>
                <Grid direction="row" justifyContent="space-between" container spacing={1}>
                  <Grid item>
                    <FormControl variant="outlined">
                      <TextField
                        required
                        type={showPassword ? 'text' : 'password'}
                        className={classes.panierTextfield}
                        fullWidth
                        error={Boolean(errors.password)}
                        label="Mot de passe"
                        autoComplete="password"
                        InputProps={{
                          endAdornment: (
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
                          )
                        }}
                        InputLabelProps={{
                          shrink: true
                        }}
                        {...register('password')}
                      />
                      <FormHelperText id="component-helper-text">
                        {(errors.password ? errors.password.message : ' ') as any}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl variant="outlined">
                      <TextField
                        required
                        type={showPassword ? 'text' : 'password'}
                        className={classes.panierTextfield}
                        label="Confirmer Mot de passe"
                        fullWidth
                        error={Boolean(errors.confirmPwd)}
                        autoComplete="confirmPwd"
                        InputLabelProps={{
                          shrink: true
                        }}
                        InputProps={{
                          endAdornment: (
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
                          )
                        }}
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
                  <Button type="submit">
                    <ButtonStyled title="Confirmer" height={55} />
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Main>
  )
}

export default ChangePassword
