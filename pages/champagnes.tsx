import React from 'react'
import dynamic from 'next/dynamic'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})

const Champagnes = dynamic(() => import('@/Modules/champagnes'), {
  loading: () => <Loading />
})

export default function champagnes() {
  return <Champagnes />
}
