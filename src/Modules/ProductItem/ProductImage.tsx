import Slideshow from '@/Utils/Slideshow'
import { Grid } from '@mui/material'
import React from 'react'
import { ProductImageProps } from './interfaces'

const ProductImage: React.FC<ProductImageProps> = ({
  images,
  classes,
  noAnimation,
  height,
  width
}) => {
  if (noAnimation) {
    return (
      <Grid className={classes.imageSlider}>
        <Slideshow
          items={images}
          itemsToShow={1}
          classes={classes}
          speed={1000}
          autoplaySpeed={10000}
          pauseOnHover
          fade
          initialSlide={1}
          button={false}
          height={height}
          width={width}
          objectFit="contain"
        />
      </Grid>
    )
  }

  return (
    <Grid className={classes.imageSlider}>
      <Slideshow
        items={images}
        itemsToShow={1}
        classes={classes}
        speed={1000}
        autoplaySpeed={10000}
        pauseOnHover
        fade
        initialSlide={1}
        button={false}
        height={height}
        width={width}
        objectFit="contain"
      />
    </Grid>
  )
}

export default React.memo(ProductImage)
