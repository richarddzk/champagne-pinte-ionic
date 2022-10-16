import { Grid } from '@mui/material'
import { useAnimation, motion } from 'framer-motion'
import React, { useEffect } from 'react'

import { useInView } from 'react-intersection-observer'

import { ProductImageProps } from './interfaces'

const OtherProducts: React.FC<ProductImageProps> = ({ classes, noAnimation }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0
  })
  const controls = useAnimation()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  if (noAnimation) {
    return (
      <Grid className={classes.imageSlider}>
        {/* <Slideshow
          items={images}
          itemsToShow={1}
          classes={classes}
          speed={1000}
          autoplaySpeed={10000}
          pauseOnHover
          fade={false}
          initialSlide={1}
          button={false}
        /> */}
      </Grid>
    )
  }

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ delay: 0.5, duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
    >
      <Grid className={classes.imageSlider}>
        {/* <Slideshow
          items={images}
          itemsToShow={1}
          classes={classes}
          speed={1000}
          autoplaySpeed={10000}
          pauseOnHover
          fade={false}
          initialSlide={1}
          button={false}
        /> */}
      </Grid>
    </motion.div>
  )
}

export default React.memo(OtherProducts)
