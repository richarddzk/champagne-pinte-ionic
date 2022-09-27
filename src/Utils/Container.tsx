import React from 'react'
import dynamic from 'next/dynamic'

const Grid = dynamic(() => import('@mui/material/Grid'), {
  ssr: false
})

export interface ContainerProps {
  children: any
  image?: any
  modal?: boolean
}

const Container: React.FC<ContainerProps> = (props: any) => {
  const { children } = props

  return <Grid style={{ height: '100vh', width: '100vw' }}>{children}</Grid>
}

export default Container
