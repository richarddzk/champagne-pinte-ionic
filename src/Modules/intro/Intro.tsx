import React from 'react'
import Loading from '@/Utils/Loading'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { ACCEPT_CONDITIONS } from './ConditionsDialog'
import sceauChampBlur from '../../../public/image/table/sceauChampBlur.webp'

const ConditionsDialog = dynamic(() => import('./ConditionsDialog'), {
  loading: () => <Loading />
})
const WrapperBackground = dynamic(() => import('@/Utils/WrapperBackground'), {
  loading: () => <Loading />
})

const ShreddedProvider = dynamic(() => import('./ShreddedProvider'), {
  loading: () => <Loading />
})

const Intro: React.FC = () => {
  const [conditionsAccepted, setConditionsAccepted] = React.useState<any>(undefined)

  const router = useRouter()

  React.useEffect(() => {
    const { asPath } = router
    if (asPath !== '/charte/' && asPath !== '/conditions/') {
      const localConditionsAccepted = localStorage.getItem(ACCEPT_CONDITIONS)

      if (localConditionsAccepted) {
        setConditionsAccepted(JSON.parse(localConditionsAccepted))
      } else {
        setConditionsAccepted(false)
      }
    }
  }, [])
  if (conditionsAccepted) {
    if (conditionsAccepted && conditionsAccepted.alcool.allow && conditionsAccepted.cookies.allow) {
      router.push('/accueil')
    }
  }
  if (conditionsAccepted === false) {
    return (
      <ShreddedProvider>
        <WrapperBackground image={sceauChampBlur} modal>
          <ConditionsDialog conditionsAccepted={conditionsAccepted} />
        </WrapperBackground>
      </ShreddedProvider>
    )
  }
  if (conditionsAccepted === undefined) {
    return <></>
  }

  return (
    <ShreddedProvider>
      <WrapperBackground image={sceauChampBlur} modal>
        <ConditionsDialog />
      </WrapperBackground>
    </ShreddedProvider>
  )
}

export default Intro
