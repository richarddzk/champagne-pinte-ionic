import { Item } from '@/Main/interfaces'
import { ImageObject } from '@/Modules/ProductItem/interfaces'

export interface SlideshowProps {
  height?: number | string
  items: (classes: any, isWide: boolean) => (Item | ImageObject)[]
  itemsToShow?: number
  classes: any
  speed: number
  pauseOnHover: boolean
  fade: boolean
  initialSlide: number
  autoplaySpeed: number
  button: boolean
  icon?: any
  border?: string
  objectFit?: any
  width?: string | number
}
