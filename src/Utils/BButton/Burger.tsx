import React from 'react'
import { motion, Transition } from 'framer-motion'

interface Props {
  isOpen?: boolean
  color?: string
  strokeWidth?: string | number
  transition?: Transition | null
  lineProps?: any
  width?: number
  height?: number
  onClick?: () => any
  style?: any
  ripple?: boolean
}

const Burger: React.FC<Props> = ({
  isOpen = false,
  width = 24,
  height = 24,
  strokeWidth = 1,
  color = '#000',
  transition = null,
  lineProps = null,
  onClick,
  style,
}) => {
  const variant = isOpen ? 'opened' : 'closed'
  // const rippleRef = React.useRef(null)
  // const onRippleStart = (e) => {
  //   rippleRef.current.start(e)
  // }
  // const onRippleStop = (e) => {
  //   rippleRef.current.stop(e)
  // }
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  }
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  }
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
    },
  }
  let tmpProps = lineProps
  // eslint-disable-next-line no-param-reassign
  tmpProps = {
    stroke: color,
    strokeWidth: strokeWidth as number,
    vectorEffect: 'non-scaling-stroke',
    initial: 'closed',
    animate: variant,
    transition,
    style,

    ...tmpProps,
  }
  const unitHeight = 4
  const unitWidth = (unitHeight * (width as number)) / (height as number)

  return (
    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      onClick={onClick}
      {...tmpProps}
    >
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="0"
        y2="0"
        variants={top}
        {...tmpProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="2"
        y2="2"
        variants={center}
        {...tmpProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="4"
        y2="4"
        variants={bottom}
        {...tmpProps}
      />
    </motion.svg>
  )
}

export default Burger
