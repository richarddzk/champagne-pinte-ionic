import React from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

interface AccountProps {
  id: string
}
const Supplier = dynamic(() => import('@/Main/Supplier'), {
  loading: () => <>...</>
})
const Account = dynamic(() => import('@/Modules/account'), {
  loading: () => <>...</>
})

const AccountIndex: React.FC<AccountProps> = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <Supplier>
      <Account id={id as string} />
    </Supplier>
  )
}

// export async function getStaticProps({ params }: any) {
//   return {
//     props: {
//       id: params.id,
//     },
//   }
// }

export default AccountIndex
