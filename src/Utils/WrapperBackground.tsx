import React from 'react'
import dynamic from 'next/dynamic'
import { ContainerProps } from './Container'

const BackgroundImage = dynamic(() => import('./BackgroundImage'), {
  ssr: false
})

const Grid = dynamic(() => import('@mui/material/Grid'), {
  ssr: false
})

const WrapperBackground: React.FC<ContainerProps> = (props: any) => {
  const { children, image, modal } = props

  return (
    <>
      {image && <BackgroundImage image={image} />}

      {modal ? (
        children
      ) : (
        <Grid
          style={{
            height: '100%',
            width: '100%',
            zIndex: 1,
            position: 'fixed',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex'
          }}
        >
          {children}
        </Grid>
      )}
    </>
  )
}

export default WrapperBackground
