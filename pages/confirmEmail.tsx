import React from 'react'
import dynamic from 'next/dynamic'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})

const ConfirmEmail = dynamic(() => import('@/Modules/confirmEmail'), {
  loading: () => <Loading />
})
export default function confirmEmail() {
  return <ConfirmEmail />
}
