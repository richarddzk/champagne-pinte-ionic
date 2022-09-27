import Router from 'next/router'
import { useSnackbar } from 'notistack'
import { useAuth } from '../../auth-provider/AuthProvider'
import useI18n from '../../../Utils/hooks/use-i18n'

function useFacebookAuthentication() {
  const { facebookAuthentification, checkRegistred } = useAuth()
  const { enqueueSnackbar } = useSnackbar()
  const i18n = useI18n()
  const { activeLocale } = i18n

  const failureRegister = () => {
    enqueueSnackbar('Vous etes déja inscrit 😅', {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      variant: 'error'
    })
  }
  const failureConnexion = () => {
    enqueueSnackbar("Vous n'etes pas inscris 😅", {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      variant: 'error'
    })
  }
  const successRegister = (txt: string) => {
    enqueueSnackbar(`Bienvenue ${txt}  😊`, {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      variant: 'success'
    })
    Router.push(`/${activeLocale ?? 'fr'}/`)
  }
  const handleConnexion = async (result: any) => {
    const registred = await checkRegistred(result.id)
    if (registred.error) {
      failureConnexion()
    } else {
      const res = facebookAuthentification(result)
      if (res) {
        successRegister(res.name)
      }
    }
  }
  const handleRegister = async (result: any) => {
    const registred = await checkRegistred(result.id)
    if (registred.error) {
      const res = facebookAuthentification(result)
      if (res) {
        successRegister(res.name)
      }
    } else {
      failureRegister()
    }
  }
  return {
    handleConnexion,
    handleRegister
  }
}

export default useFacebookAuthentication
