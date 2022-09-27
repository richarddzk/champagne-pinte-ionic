import Router from 'next/router'
import { useAuth } from '../../auth-provider/AuthProvider'
import useI18n from '../../../Utils/hooks/use-i18n'

function useGoogleAuthentication() {
  const { googleAuthentification } = useAuth()
  const i18n = useI18n()
  const { activeLocale } = i18n

  const handleSuccess = async (accessToken: string) => {
    await googleAuthentification({
      token: accessToken
    }).then((res: any) => {
      if (res) {
        Router.push(`/${activeLocale ?? 'fr'}/`)
      }
    })
  }

  return {
    handleSuccess
  }
}

export default useGoogleAuthentication
