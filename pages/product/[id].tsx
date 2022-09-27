import React from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

interface ProductIndexProps {
  id: string
}

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})
const Supplier = dynamic(() => import('@/Main/Supplier'), {
  loading: () => <Loading />
})
const Product = dynamic(() => import('@/Modules/product'), {
  loading: () => <Loading />
})

const ProductIndex: React.FC<ProductIndexProps> = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <Supplier>
      {' '}
      <Product id={id as string} />
    </Supplier>
  )
}

export default ProductIndex
