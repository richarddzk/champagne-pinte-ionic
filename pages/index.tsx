import React from 'react'
import dynamic from 'next/dynamic'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})

const Intro = dynamic(() => import('@/Modules/intro'), {
  loading: () => <Loading />
})

export default function index() {
  return <Intro />
}
