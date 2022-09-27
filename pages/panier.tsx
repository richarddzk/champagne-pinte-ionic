import React from 'react'
import dynamic from 'next/dynamic'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})

const Panier = dynamic(() => import('@/Modules/panier'), {
  loading: () => <Loading />
})
export default function panier() {
  return <Panier />
}
