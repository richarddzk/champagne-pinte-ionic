import React from 'react'
import dynamic from 'next/dynamic'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})

const Login = dynamic(() => import('@/Main/Login'), {
  loading: () => <Loading />
})
export default function login() {
  return <Login />
}
