import React, { useEffect, Suspense } from 'react'
import dynamic from 'next/dynamic'
import Grid from '@mui/material/Grid'
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
  isTablette?: boolean
  paddingLeft?: number | string
}

const Main: React.FC<MainProps> = (props: any) => {
  const { fixed, children, menuOnly, account, paddingLeft } = props
  const { classes } = useStyles()
  const { ReLog } = useAuth()

  useEffect(() => {
    ReLog()
  }, [])

  return (
    <Grid style={{ overflowX: 'hidden', overflowY: 'auto' }} className={classes.container}>
      <Menu fixed={fixed} />
      <Suspense fallback={<Loading />}>{children}</Suspense>
      {!menuOnly && <Footer account={account} paddingLeft={paddingLeft} />}
    </Grid>
  )
}

export default Main
