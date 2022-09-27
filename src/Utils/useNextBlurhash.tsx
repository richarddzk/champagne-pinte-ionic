import { useEffect } from 'react'
import { decode } from 'blurhash'
import { createCanvas } from 'canvas'

export default function useBlurData(
  blurHash: string,
  width: number = 160,
  height: number = 120,
  punch?: number
) {
  let pixels
  let canvas
  let ctx
  let imageData
  let blurDataUrl
  useEffect(() => {
    pixels = decode(blurHash, width, height, punch)
    canvas = createCanvas(width, height)
    ctx = canvas.getContext('2d')
    imageData = ctx.createImageData(width, height)
    imageData.data.set(pixels)
    ctx.putImageData(imageData, 0, 0)
    blurDataUrl = canvas.toDataURL()
  }, [])

  return [blurDataUrl]
}
