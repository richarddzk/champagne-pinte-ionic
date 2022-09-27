import React from 'react'
import SwiperComponent from '@/Utils/SwiperComponent'
import { ImageObject, ProductImageSwiperProps } from './interfaces'

const ProductImageSwiper: React.FC<ProductImageSwiperProps> = ({
  images,
  noAnimation,
  backgroundColor,
  onClick
}) => {
  if (noAnimation) {
    return (
      <SwiperComponent
        items={images as unknown as ImageObject[]}
        backgroundColor={backgroundColor}
        onClick={onClick}
      />
    )
  }

  return (
    <SwiperComponent
      items={images as unknown as ImageObject[]}
      backgroundColor={backgroundColor}
      onClick={onClick}
    />
  )
}

export default React.memo(ProductImageSwiper)
