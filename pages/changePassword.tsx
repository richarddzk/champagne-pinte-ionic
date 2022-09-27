import React from 'react'
import dynamic from 'next/dynamic'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})
const ChangePassword = dynamic(() => import('@/Modules/changePassword'), {
  loading: () => <Loading />
})

export default function changePassword() {
  return <ChangePassword />
}
