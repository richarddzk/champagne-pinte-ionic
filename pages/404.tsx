import React from 'react'
import dynamic from 'next/dynamic'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})

const Error404Page = dynamic(() => import('@/Main/404'), {
  loading: () => <Loading />
})

export default function Error404() {
  return <Error404Page />
}
