import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper'
import { v4 as uuid } from 'uuid'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { ImageObject } from '@/Modules/ProductItem/interfaces'
import { Item } from '@/Main/interfaces'
import Image from 'next/future/image'
import StylesWrapper from './StylesWrapper'

interface SwiperComponentProps {
  items: ImageObject[]
  backgroundColor?: string
  onClick: () => void
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({ items, backgroundColor, onClick }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
  const sliderRef = useRef(null)
  return (
    <StylesWrapper backgroundColor={backgroundColor}>
      <Swiper
        ref={sliderRef}
        style={{
          // borderRadius: '20px 20px 0px 0px',
          // @ts-ignore
          '--swiper-navigation-color': '#CCBF90',
          paddingBottom: 5
        }}
        loop
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {items.map((item: Item | ImageObject) => (
          <SwiperSlide key={uuid()}>
            <Image
              alt={item.name}
              onClick={onClick}
              sizes="40vw"
              fill
              className="mySwiper2Img"
              src={item.src}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        // @ts-ignore
        style={{
          borderRadius: '0px 0px 20px 20px'
        }}
        onSwiper={setThumbsSwiper}
        loop
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {items.map((item: Item | ImageObject) => (
          <SwiperSlide key={uuid()}>
            <Image
              alt={item.name}
              width={100}
              height={300}
              style={{ objectFit: 'cover' }}
              className="mySwiperImg"
              src={item.src}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </StylesWrapper>
  )
}

export default SwiperComponent
