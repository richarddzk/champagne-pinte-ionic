import React from 'react'
import { Logout } from '@mui/icons-material'
import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
import { v4 as uuid } from 'uuid'
import { resendEmailVariables } from '@/Modules/confirmEmail/__generated__/resendEmail'
import { InfosFormDialogProps } from './interfaces'

const InfosFormDialog: React.FC<InfosFormDialogProps> = (Props) => {
  const { onClose, open, classes, user, mdp, SendMailChangePassword, resendEmail, maj } = Props
  const { email } = user
  const ConfirmEmail = async () => {
    await maj(user).then((data) => {
      if (data) {
        resendEmail({
          variables: {
            email
          } as resendEmailVariables
        })
      }
    })

    return true
  }

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog open={open} onClose={handleClose} aria-describedby="alert-dialog-slide-description">
      <DialogTitle className={classes.typo}>
        {mdp
          ? ` Voulez vous envoyer un mail à l adresse ${user.email} pour changer votre mot de passe ?`
          : ' Vous avez modifié votre adresse email, nous allons vous envoyer un email de confirmation et mettre a jour votre profil'}
      </DialogTitle>

      <DialogActions>
        <Button
          className={classes.typo}
          startIcon={<KeyboardReturnIcon fontSize="small" />}
          onClick={handleClose}
        >
          Non
        </Button>
        <Button
          key={uuid()}
          startIcon={<Logout fontSize="small" />}
          onClick={async () => {
            handleClose()
            if (mdp) await SendMailChangePassword(email)
            else await ConfirmEmail()

            //
          }}
          className={classes.typo}
        >
          Oui
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default InfosFormDialog
