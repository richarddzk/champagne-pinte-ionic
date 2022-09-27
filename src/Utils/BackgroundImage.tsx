import React, { useEffect, useState } from 'react'
import Image from 'next/future/image'
import { makeStyles } from '@/makeStyles'
import Box from '@mui/system/Box'

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
        <Image
          priority
          src={image}
          style={{ objectFit: 'cover' }}
          alt="Introduction BackGround"
          width={width}
          height={height}
        />
      </Box>
    )
  }

  return null
}

export { getWindowDimensions }
export default BackgroundImage
