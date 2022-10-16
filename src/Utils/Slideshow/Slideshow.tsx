import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import Router from 'next/router'
import Image from '@/Utils/MidgardImage'
import { GlobalStyles } from 'tss-react'

import { ButtonStyled } from '@/Main'
import { Item } from '@/Main/interfaces'
import { ImageObject } from '@/Modules/ProductItem/interfaces'
import { v4 as uuid } from 'uuid'
import Grid from '@mui/material/Grid'

import { SlideshowProps } from './interface'
import useScreen from '../hooks/useScreen'

const Slideshow: React.FC<SlideshowProps> = ({
  items,
  speed,
  itemsToShow,
  classes,
  pauseOnHover,
  fade,
  initialSlide,
  autoplaySpeed,
  button,
  height,
  width = '100vw',
  objectFit = 'contain'
}) => {
  const settings = {
    className: classes.slideContainer,
    arrows: false,
    slidesToShow: itemsToShow,
    slidesToScroll: itemsToShow,
    dots: true,
    infinite: true,
    speed,
    fade,
    pauseOnHover,
    initialSlide,
    adaptiveHeight: true,
    autoplay: !!autoplaySpeed,
    // autoplay: false,
    autoplaySpeed
  }
  const { isMob } = useScreen()

  return (
    <div
      id="containerSlideShow"
      style={{
        height
      }}
      className={classes.containerSlideShow}
    >
      <GlobalStyles
        styles={{
          '#containerSlideShow:hover #ButtonSlideShow': {
            opacity: 1,
            visibility: 'visible'
          }
        }}
      />
      <Slider {...settings}>
        {items(classes, isMob).map((item: Item | ImageObject) => {
          const { src } = item

          return (
            <div
              key={uuid()}
              style={{
                overflowX: 'hidden',
                height,
                maxHeight: 937
              }}
            >
              <div
                style={{
                  width,
                  height,
                  position: 'relative',
                  maxHeight: 937,
                  overflow: 'hidden'
                }}
              >
                {' '}
                {item.header !== 'video' ? (
                  <Image
                    priority
                    alt="Slideshow"
                    sizes="100vw"
                    style={{ maxHeight: 937, objectFit }}
                    fill
                    placeholder={item.blur ? 'blur' : undefined}
                    blurDataURL={item.blur ? item.blur : undefined}
                    src={src}
                  />
                ) : (
                  <video
                    autoPlay
                    loop
                    muted
                    style={{ maxHeight: 937, width: '100%', height: '100vh', objectFit }}
                  >
                    <source src={src} type="video/mp4" />
                  </video>
                )}
              </div>
              {button && (
                <Grid id="ButtonSlideShow" className={classes.maisonButtonDiv}>
                  <ButtonStyled
                    width={200}
                    image={classes.maisonButton}
                    title={item.name}
                    fullybackground={1}
                    onClick={() => {
                      Router.push(` ${item.page}`)
                    }}
                  />
                </Grid>
              )}
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default Slideshow
