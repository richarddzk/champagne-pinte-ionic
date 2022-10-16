import React, { useEffect, useLayoutEffect, useState } from 'react'
import { usePrevious } from 'react-use'

interface ScrollProviderProps {
  children: any
}
const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0)

  const previousY = usePrevious(scrollY) ?? 0
  const [checked, setChecked] = React.useState(true)

  useLayoutEffect(() => {
    const updateScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', updateScroll)
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  const scrolled = scrollY === 0

  useEffect(() => {
    if (scrolled || previousY > scrollY) {
      setChecked(true)
    } else {
      setChecked(false)
    }
  }, [scrollY])

  return children && children(checked, scrollY)
}
export default ScrollProvider
