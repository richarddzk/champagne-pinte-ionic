import React from 'react'
import dynamic from 'next/dynamic'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})

const NousContacter = dynamic(() => import('@/Modules/nousContacter'), {
  loading: () => <Loading />
})
export default function nousContacter() {
  return <NousContacter />
}
