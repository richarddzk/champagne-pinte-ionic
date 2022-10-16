import useMediaQuery from '@mui/material/useMediaQuery'

const useScreen = () => {
  const isWide = useMediaQuery('(min-width: 501px)')
  const isMob = !useMediaQuery('(min-width: 700px)')
  const isWideMob = !useMediaQuery('(min-width: 800px)')
  const isTablette = !useMediaQuery('(min-width: 1200px)')
  const isTiny = !useMediaQuery('(min-width: 350px)')
  const isLittleDesk = !useMediaQuery('(min-width: 1300px)')

  return { isWide, isMob, isTablette, isTiny, isLittleDesk, isWideMob }
}
export default useScreen
