import React from 'react'
import dynamic from 'next/dynamic'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})

const Home = dynamic(() => import('@/Modules/home'), {
  loading: () => <Loading />
})

export default function home() {
  return <Home />
}
