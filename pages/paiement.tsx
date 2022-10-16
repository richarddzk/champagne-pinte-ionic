import React from 'react'
import dynamic from 'next/dynamic'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})

const Checkout = dynamic(() => import('@/Modules/checkout'), {
  loading: () => <Loading />
})

export default function checkout() {
  return <Checkout />
}
