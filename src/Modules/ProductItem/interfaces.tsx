import { Theme } from '@mui/system'
import { ReactElement } from 'react'

export interface ProductComponentProps {
  product: Product
  classes: any
  noProduct?: boolean
  noTitle?: boolean
  elevation?: number
  noButton?: boolean
  noAnimation?: boolean
  height?: number | string
  width?: number | string
  backgroundColor?: string
  theme?: Theme
  buttonPanier?: boolean
  slideDotBottom?: number
  slideDotColor?: string
  description?: ReactElement<any>
}
export interface ImageObject {
  src: string
  blur?: string
  altText: string
  caption: string
  header: string
  key: string
  name: string
  page: string
  id: string
  title: string
}
export interface ProductImageProps {
  images: (classes: any) => ImageObject[] | ImageObject[]
  classes: any
  noAnimation?: boolean
  height?: number | string
  backgroundColor?: string
  width?: number | string
}
export interface ProductImageSwiperProps {
  images: ImageObject[]
  classes: any
  noAnimation?: boolean
  height?: number | string
  backgroundColor?: string
  onClick: () => void
}
export interface ProductDescriptionProps {
  product: Product
}

export interface TitreProduitProps {
  product: Product
  classes: any
  darkMode: boolean
}
export interface Product {
  title?: string
  name?: string
  description?: string
  id: string
  price: number | string
  currency?: string
  images: ImageObject[]
  amount: number
}

export const DefaultProduct = {
  title: 'string',
  name: 'string',
  description: 'string',
  id: 'string',
  price: 1,
  currency: 'euro',
  images: { titre: 'string', src: 'string' },
  amount: 1
}
