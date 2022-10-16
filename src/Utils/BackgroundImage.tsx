import React, { Suspense, useEffect, useState } from 'react'
import Image from '@/Utils/MidgardImage'
import { makeStyles } from '@/makeStyles'
import dynamic from 'next/dynamic'

const Loading = dynamic(() => import('@/Utils/Loading'), {
  loading: () => <></>
})

const Box = dynamic(() => import('@mui/system/Box'), {
  loading: () => <Loading />
})

const useStyles = makeStyles()(() => ({
  box: {
    position: 'fixed',
    zIndex: 9,
    top: 0
  }
}))

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

const BackgroundImage: React.FC<{ image: string }> = ({ image }) => {
  const [width, setWidth] = useState<number>()
  const [height, setheight] = useState<number>()
  const { classes } = useStyles()
  useEffect(() => {
    const { width: xwidth, height: xheight } = getWindowDimensions()

    setWidth(xwidth)
    setheight(xheight)
  }, [])

  useEffect(() => {
    function handleResize() {
      const { width: xwidth, height: xheight } = getWindowDimensions()

      setWidth(xwidth)
      setheight(xheight)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (width && height) {
    return (
      <Box className={classes.box}>
        <Suspense fallback={<Loading />}>
          <Image
            priority
            src={image}
            style={{ objectFit: 'cover' }}
            alt="Introduction BackGround"
            width={width}
            height={height}
            placeholder="blur"
          />
        </Suspense>
      </Box>
    )
  }

  return null
}

export { getWindowDimensions }
export default BackgroundImage
