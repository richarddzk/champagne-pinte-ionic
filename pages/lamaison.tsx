import React from 'react'
import dynamic from 'next/dynamic'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})

const About = dynamic(() => import('@/Modules/about'), {
  loading: () => <Loading />
})
export default function about() {
  return <About />
}
