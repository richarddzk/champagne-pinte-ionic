import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import Router from 'next/router'
import Image from 'next/future/image'
import { GlobalStyles, Grid } from '@mui/material'
import { ButtonStyled } from '@/Main'
import { Item } from '@/Main/interfaces'
import { ImageObject } from '@/Modules/ProductItem/interfaces'
import { v4 as uuid } from 'uuid'
import useI18n from '../hooks/use-i18n'
import { SlideshowProps } from './interface'

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
  const i18n = useI18n()
  const { activeLocale } = i18n
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
        {items(classes).map((item: Item | ImageObject) => {
          const { src } = item

          return (
            <div
              key={uuid()}
              style={{
                overflowX: 'hidden',
                height
              }}
            >
              <div
                style={{
                  width,
                  height,
                  position: 'relative',
                  maxHeight: '100%',
                  overflow: 'hidden'
                }}
              >
                {' '}
                {item.header !== 'video' ? (
                  <Image
                    priority
                    alt="Slideshow"
                    sizes="100vw"
                    style={{ objectFit }}
                    fill
                    src={src}
                  />
                ) : (
                  <video autoPlay loop muted style={{ width: '100%', height: '100vh', objectFit }}>
                    <source src={src} type="video/mp4" />
                  </video>
                )}
              </div>
              {button && (
                <Grid id="ButtonSlideShow" className={classes.maisonButtonDiv}>
                  <ButtonStyled
                    width={170}
                    image={classes.maisonButton}
                    title={item.name}
                    fullybackground={1}
                    onClick={() => {
                      Router.push(`/${activeLocale ?? 'fr'}${item.page}`)
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
