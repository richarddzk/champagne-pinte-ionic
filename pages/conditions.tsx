import React from 'react'
import dynamic from 'next/dynamic'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})

const Conditions = dynamic(() => import('@/Modules/conditions'), {
  loading: () => <Loading />
})

export default function conditions() {
  return <Conditions />
}
