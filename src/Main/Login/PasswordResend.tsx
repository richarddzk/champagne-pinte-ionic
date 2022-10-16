import React, { useEffect } from 'react'
import { Logout } from '@mui/icons-material'
import { Dialog, DialogTitle, DialogActions, Button, Typography } from '@mui/material'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
import { v4 as uuid } from 'uuid'
import { useSnackbar } from 'notistack'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { ApolloError, useMutation } from '@apollo/client'
import SEND_PASSWORD_LINK from '@/Modules/changePassword/request'
import dynamic from 'next/dynamic'
import {
  sendPasswordLink,
  sendPasswordLinkVariables
} from '@/Modules/changePassword/__generated__/sendPasswordLink'
import useStyles from './styles'

const TextField = dynamic(() => import('@mui/material/TextField'), {
  loading: () => <>...</>
})

interface PasswordResendProps {
  onClose: () => void
  open: boolean
}

const PasswordResend: React.FC<PasswordResendProps> = (props) => {
  const { onClose, open } = props
  const [localEmail, setLocalEmail] = React.useState()
  const { classes } = useStyles()

  const { enqueueSnackbar } = useSnackbar()

  const handleError = (error: ApolloError | string) => {
    enqueueSnackbar(typeof error === 'string' ? error : error.message, {
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
  const handleClose = () => {
    onClose()
  }
  const [sendPasswordLinkMutation] = useMutation<sendPasswordLink, sendPasswordLinkVariables>(
    SEND_PASSWORD_LINK,
    {
      onError: handleError,
      onCompleted: () => {
        handleSuccess('Email envoyé à votre adresse')
        handleClose()
      }
    }
  )

  const SendMailChangePassword = async (email: string) => {
    await sendPasswordLinkMutation({
      variables: {
        email
      }
    })
  }

  const formSchema = Yup.object().shape({
    password: Yup.string().min(8, 'Au moins 8 character'),
    confirmPwd: Yup.string().oneOf([Yup.ref('password')], 'Les mots de passe ne correspondent pas'),
    email: Yup.string().email('Format Incorrect'),
    confirmEmail: Yup.string().oneOf([Yup.ref('email')], 'Les E-mails ne correspondent pas')
  })
  const formOptions = { resolver: yupResolver(formSchema) }
  const { handleSubmit, formState } = useForm(formOptions)

  const submit = async (e: any) => {
    const { email } = e
    SendMailChangePassword(email)
  }

  const onSubmit = (data: { email: string }) => {
    const credential = {
      email: data.email
    }
    submit(credential)
  }
  const { errors } = formState
  useEffect(() => {
    if (errors.email) {
      handleError((errors.email.message as unknown as string) ?? 'Error in logins')
    }
  }, [errors.length])
  return (
    <Dialog open={open} onClose={handleClose} aria-describedby="alert-dialog-slide-description">
      <DialogTitle className={classes.typo}>
        <Typography className={classes.typoHeader} color="primary">
          Veuillez entrer votre adresse mail
        </Typography>
        <TextField
          className={classes.TextField}
          margin="dense"
          required
          fullWidth
          value={localEmail}
          onChange={(event) => {
            setLocalEmail(event.target.value as any)
          }}
          error={Boolean(errors.email)}
          helperText={(errors.email ? errors.email.message : ' ') as any}
          id="email"
          label="Adresse E-Mail"
          autoComplete="email"
          InputLabelProps={{
            shrink: true
          }}
          autoFocus
        />
      </DialogTitle>

      <DialogActions>
        <Button
          className={classes.typoHeader}
          startIcon={<KeyboardReturnIcon fontSize="small" />}
          onClick={handleClose}
        >
          Non
        </Button>
        <Button
          key={uuid()}
          startIcon={<Logout fontSize="small" />}
          type="submit"
          onClick={() => {
            if (localEmail) handleSubmit(onSubmit({ email: localEmail }) as any)
            else handleSuccess('Veuillez entrer une adresse mail correct')
          }}
          className={classes.typoHeader}
        >
          Oui
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PasswordResend
