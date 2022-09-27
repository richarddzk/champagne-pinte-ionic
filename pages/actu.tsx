import React from 'react'
import dynamic from 'next/dynamic'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})

const Actu = dynamic(() => import('@/Modules/actu'), {
  loading: () => <Loading />
})

export default function actu() {
  return <Actu />
}
