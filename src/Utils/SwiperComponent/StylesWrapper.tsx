/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react'
import { GlobalStyles } from '@mui/material'

interface StylesWrapperProps {
  backgroundColor?: string
  children: React.ReactNode
}
/**
 * TODO : Materialuiiser css
 */
const StylesWrapper: React.FC<StylesWrapperProps> = React.memo(({ children }) => (
  <>
    <GlobalStyles
      styles={{
        '.swiper-slide': {
          textAlign: 'center',
          fontSize: '18px',
          background: '#fff',

          display: 'flex',
          webKitBoxPack: 'center',
          msFlexPack: 'center',
          webkitJustifyContent: 'center',
          justifyContent: 'center',
          webkitBoxAlign: 'center',
          msFlexAlign: 'center',
          webkitAlignItems: 'center',
          alignItems: 'center',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'transparent',
          cursor: 'pointer'
        },

        '.swiper': {
          width: '100%',
          height: 200
        },

        '.mySwiper2': {
          height: 500,
          width: '100%',
          backgroundColor: 'transparent',
          border: 'none'
        },

        '.mySwiper': {
          height: 100,
          boxSizing: 'border-box',
          borderLeftWidth: 10,
          borderRightWidth: 10,

          backgroundColor: 'transparent'
        },

        '.mySwiper .swiper-slide': {
          width: '25%',
          height: 'initial',
          opacity: 0.4,
          borderRadius: '20px 20px 0px 0px'
        },

        '.mySwiper .swiper-slide-thumb-active': {
          opacity: 1,
          width: '100%'
        },

        '.swiper-slide img': {
          display: 'block',
          width: '100%',
          height: '100%'
        },
        '.mySwiper2Img': {
          objectFit: 'contain'
        },
        '.mySwiperImg': {
          objectFit: 'cover'
        }
      }}
    />

    {children}
  </>
))

export default StylesWrapper
