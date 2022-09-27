import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Supplier from './Supplier'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})

const Page: React.FC = ({ children }) => (
  <Supplier>
    <Suspense fallback={<Loading />}>{children}</Suspense>
  </Supplier>
)

export default Page
