import React from 'react'
import dynamic from 'next/dynamic'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})

const Charte = dynamic(() => import('@/Modules/charte'), {
  loading: () => <Loading />
})
export default function charte() {
  return <Charte />
}
