import { encode } from 'blurhash'

export const loadImage = async (src: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image()
    image.onload = () => resolve(image)
    image.onerror = (...args) => reject(args)
    image.src = src
    return image
  })

export const getImageData = (image: HTMLImageElement) => {
  const canvas = document.createElement('canvas')
  canvas.width = image.width
  canvas.height = image.height
  const context = canvas.getContext('2d')
  context?.drawImage(image as any, 0, 0)
  return context?.getImageData(0, 0, image.width, image.height)
}

export const encodeImageToBlurhash = async (imageUrl: string) => {
  const image = await loadImage(imageUrl)
  const imageData = getImageData(image)
  return encode(
    imageData?.data as Uint8ClampedArray,
    imageData?.width ?? 0,
    imageData?.height ?? 0,
    4,
    4
  )
}
