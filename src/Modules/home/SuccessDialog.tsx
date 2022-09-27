import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'

export interface SuccessDialogProps {
  open: boolean
  handleClose: () => void
}

const SuccessDialog: React.FC<SuccessDialogProps> = (props) => {
  const { open, handleClose } = props

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{'Paiement Reussi ! '}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Vous allez recevoir votre facture à l'adresse mail indiqué sur votre compte.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button size="large" startIcon={<CloseIcon />} onClick={handleClose} autoFocus>
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default SuccessDialog
