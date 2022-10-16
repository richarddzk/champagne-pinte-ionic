import React from 'react'
import dynamic from 'next/dynamic'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})

const Savoir = dynamic(() => import('@/Modules/savoirFaire'), {
  loading: () => <Loading />
})
export default function savoirfaire() {
  return <Savoir />
}
