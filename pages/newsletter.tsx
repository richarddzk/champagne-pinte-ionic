import React from 'react'
import dynamic from 'next/dynamic'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})

const Newsletter = dynamic(() => import('@/Modules/newsletter'), {
  loading: () => <Loading />
})
export default function boutique() {
  return <Newsletter />
}
