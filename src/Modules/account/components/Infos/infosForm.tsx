/* eslint-disable no-underscore-dangle */
// import { useMutation } from '@apollo/client'
import React, { useEffect } from 'react'
import { Grid, TextField } from '@mui/material'
import { v4 as uuid } from 'uuid'
import ButtonStyled from '@/Main/ButtonStyled'
import { user_data as User } from '@/Modules/account/__generated__/user'
import alertCircle from 'react-useanimations/lib/alertCircle'
import dynamic from 'next/dynamic'
import { useDarkMode } from 'next-dark-mode'
import UPD_CUSTOMER from '@/Main/Providers/request'
import { ApolloError, useMutation } from '@apollo/client'
import { useSnackbar } from 'notistack'
import { RESEND_EMAIL } from '@/Modules/confirmEmail/request'
import { useRouter } from 'next/router'
import { useAuth } from '@/Main/auth-provider/AuthProvider'
import SEND_PASSWORD_LINK from '@/Modules/changePassword/request'
import { resendEmailVariables, resendEmail } from '@/Modules/confirmEmail/__generated__/resendEmail'
import {
  updateCustomerVariables,
  updateCustomer
} from '@/Main/Providers/__generated__/updateCustomer'
import { InfosProps } from './interfaces'
import useStyles from '../../style'
import { UPD_USER } from '../../request'
import InfosFormDialog from './InfosFormDialog'
import {
  sendPasswordLink,
  sendPasswordLinkVariables
} from '../../../changePassword/__generated__/sendPasswordLink'
import { updateUserVariables, updateUser } from '../../__generated__/updateUser'

const UseAnimations = dynamic(() => import('react-useanimations'), {
  loading: () => <>...</>
})

const sameUser = (user1: User, user2: User) => {
  if (user1.firstName !== user2.firstName) return false
  if (user1.lastName !== user2.lastName) return false
  if (user1.email !== user2.email) return false
  if (user1.customers[0].phone !== user2.customers[0].phone) return false

  return true
}

const InfosForm: React.FC<InfosProps> = () => {
  const { classes } = useStyles()
  const { UserInfos: user, checkRegistred } = useAuth()

  const userData = user && user
  const [openMail, setOpenMail] = React.useState(false)
  const [localUser, setLocalUser] = React.useState({ ...userData })
  const [updated, setUpdated] = React.useState(false)
  const [mdp, setMdp] = React.useState(false)
  const { enqueueSnackbar } = useSnackbar()
  const router = useRouter()

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
  const [resendEmailMutation] = useMutation<resendEmail, resendEmailVariables>(RESEND_EMAIL, {
    onError: handleError,
    onCompleted: () => {
      checkRegistred(userData?.id)
      setUpdated(false)
      router.reload()
    }
  })
  const [sendPasswordLinkMutation] = useMutation<sendPasswordLink, sendPasswordLinkVariables>(
    SEND_PASSWORD_LINK,
    {
      onError: handleError,
      onCompleted: () => {
        handleSuccess('Email envoyé à votre adresse')
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

  const [updCustomer] = useMutation<updateCustomerVariables, updateCustomer>(UPD_CUSTOMER, {
    onError: handleError,
    onCompleted: () => {
      handleSuccess('Mise à jour effectué')

      checkRegistred(userData && userData?.id)
      setUpdated(false)
    }
  })
  const [updUser] = useMutation<updateUserVariables, updateUser>(UPD_USER, {
    onError: handleError
  })
  const { darkModeActive } = useDarkMode()

  /**
   * @TODO : virer tout le typage customers[0] et les any du aux mutations
   */
  const maj = async () => {
    if (localUser && localUser.id && localUser.email && localUser.firstName && localUser.lastName) {
      await updUser({
        variables: {
          where: {
            id: localUser.id
          },
          data: {
            email: localUser.email,
            firstName: localUser.firstName,
            lastName: localUser.lastName,
            username: localUser.email,
            __typename: localUser.__typename,
            customers: localUser.customers
          }
        } as any
      }).then(async (data) => {
        if (data && localUser.customers && localUser.customers[0] && localUser.customers[0].id) {
          await updCustomer({
            variables: {
              where: {
                id: localUser.customers[0].id
              },
              data: {
                phone: localUser.customers[0].phone,
                firstName: localUser.firstName,
                lastName: localUser.lastName,
                email: localUser.email
              }
            } as any
          })
        }
      })
    }
    return true
  }

  const handleClickOpen = () => {
    setOpenMail(true)
    setMdp(true)
  }

  const handleClose = () => {
    setOpenMail(!openMail)
  }
  useEffect(() => {
    if (!sameUser(localUser, { ...userData })) {
      setUpdated(true)
    } else if (updated) {
      setUpdated(false)
    }
  }, [localUser])

  const localCustomer = localUser && localUser.customers && localUser.customers[0]
  return (
    <Grid direction="column" container>
      <InfosFormDialog
        email={localUser.email !== userData.email}
        open={openMail}
        onClose={handleClose}
        classes={classes}
        user={localUser}
        mdp={mdp}
        maj={maj}
        SendMailChangePassword={SendMailChangePassword}
        resendEmail={resendEmailMutation}
      />
      <Grid direction="row" container>
        <Grid item className={classes.gridTextfield}>
          <TextField
            id="firstName"
            label="Prénom"
            className={classes.panierTextfield}
            onChange={(res: { target: { value: string } }) => {
              setLocalUser({ ...localUser, firstName: res.target.value })
            }}
            value={localUser.firstName}
            InputLabelProps={{
              shrink: true
            }}
            autoFocus
          />
        </Grid>
        <Grid item className={classes.gridTextfield}>
          <TextField
            id="Nom"
            label="Nom"
            className={classes.panierTextfield}
            onChange={(res: { target: { value: string } }) => {
              setLocalUser({ ...localUser, lastName: res.target.value })
            }}
            value={localUser.lastName}
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
      </Grid>
      <Grid direction="row" container>
        <Grid item className={classes.gridTextfield}>
          <TextField
            id="Email"
            label="Email"
            className={classes.panierTextfield}
            onChange={(res: { target: { value: string } }) => {
              setLocalUser({ ...localUser, email: res.target.value })
            }}
            value={localUser.email}
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item className={classes.gridTextfield}>
          <TextField
            id="Phone"
            label="Phone"
            className={classes.panierTextfield}
            onChange={(res: { target: { value: string } }) => {
              setLocalUser({
                ...localUser,
                customers: [{ ...localCustomer, phone: res.target.value }]
              })
            }}
            value={localCustomer.phone}
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
      </Grid>
      <Grid direction="row" container>
        <Grid item className={classes.gridButton}>
          <ButtonStyled
            width={200}
            title="Changer mot de passe"
            onClick={() => {
              handleClickOpen()
            }}
          />
        </Grid>
        {updated && (
          <Grid item className={classes.gridButton}>
            <ButtonStyled
              width={200}
              title="Mettre à jour"
              onClick={() => {
                if (localUser.email !== userData.email) {
                  setOpenMail(true)
                } else {
                  maj()
                }
              }}
              startIcon={
                <UseAnimations
                  key={uuid()}
                  strokeColor={darkModeActive ? 'white' : 'black'}
                  size={45}
                  aria-label="maj"
                  loop
                  animation={alertCircle}
                />
              }
            />
          </Grid>
        )}
      </Grid>
    </Grid>
  )
}

export default InfosForm
