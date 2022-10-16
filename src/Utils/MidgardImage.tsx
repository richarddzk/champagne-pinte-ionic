import React from 'react'
import Image, { ImageProps } from 'next/future/image'

// interface StaticRequire {
//   default: StaticImageData
// }
// declare type StaticImport = StaticRequire | StaticImageData

const customLoader = ({ src }: { src: any }) => src

/**
 * Custom Image loader no-op
 * @param All Next Image props
 *
 * @returns NextImage with cutom loader
 */
export default function MidgardImage(props: ImageProps) {
  return <Image {...props} loader={customLoader} />
}
