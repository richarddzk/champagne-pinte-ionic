import Router from 'next/router'
import { useAuth } from '../../auth-provider/AuthProvider'

function useGoogleAuthentication() {
  const { googleAuthentification } = useAuth()

  const handleSuccess = async (accessToken: string) => {
    await googleAuthentification({
      token: accessToken
    }).then((res: any) => {
      if (res) {
        Router.push(' /')
      }
    })
  }

  return {
    handleSuccess
  }
}

export default useGoogleAuthentication
