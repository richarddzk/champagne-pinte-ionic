import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import PathLink from '@/Main/PathLink'

import { useAuth } from '@/Main/auth-provider/AuthProvider'
import { ButtonStyled, Main } from '../../Main'
import useStyles from './style'
import CONFIRM_EMAIL, { RESEND_EMAIL } from './request'

const ConfirmEmail: React.FC = () => {
  const { classes } = useStyles()

  const { auth } = useAuth()

  const email = (auth && auth.email) ?? 'no email'

  const [confirmEmail] = useMutation(CONFIRM_EMAIL)
  const [resendEmail] = useMutation(RESEND_EMAIL)
  const { query, push } = useRouter()
  const { token } = query
  const [message, setMessage] = useState<string>('')
  const [success, setSuccess] = useState(true)

  useEffect(() => {
    if (token) {
      confirmEmail({
        variables: {
          token
        }
      }).catch((e: any) => {
        setMessage(e.message)
        setSuccess(false)
      })
      setMessage('Votre adresse mail a bien été confirmé !')
    }
  }, [token])
  return (
    <Main>
      <Grid container className={classes.container} direction="column">
        <Grid item xs={12}>
          <PathLink />
        </Grid>
        <Grid container>
          <Grid className={classes.gridNewsletter}>
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
                {message}
              </Typography>
            </Grid>
            <Grid container justifyContent="center" item>
              <ButtonStyled
                onClick={async () => {
                  if (success) {
                    push(' /champagnes')
                  } else {
                    const res = await resendEmail({
                      variables: {
                        email
                      }
                    }).catch(() => {
                      setMessage('Email déja confirmé')
                      setSuccess(false)
                    })
                    if (res) {
                      setMessage('Email renvoyé')
                    }
                  }
                }}
                width={300}
                title={success ? 'Decouvir notre champagne' : 'Relancer le mail de confimations'}
                height={55}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Main>
  )
}
export default ConfirmEmail
