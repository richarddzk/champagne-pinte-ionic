import React, { useEffect, Suspense } from 'react'
import dynamic from 'next/dynamic'
import useStyles from './style'
import { useAuth } from './auth-provider/AuthProvider'
import Menu from './Menu'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <>...</>
})

const Footer = dynamic(() => import('./Footer'), {
  loading: () => <>...</>
})

export interface MainProps {
  fixed?: boolean
  menuOnly?: boolean
  account?: boolean
  children: any
  overflowX?: string
}

const Main: React.FC<MainProps> = (props: any) => {
  const { fixed, children, menuOnly, overflowX, account } = props
  const { classes } = useStyles()
  const { ReLog } = useAuth()
  useEffect(() => {
    ReLog()
  }, [])

  return (
    <div style={{ overflowX }} className={classes.container}>
      <Menu fixed={fixed} />
      <Suspense fallback={<Loading />}>{children}</Suspense>
      {!menuOnly && <Footer account={account} />}
    </div>
  )
}

export default Main
