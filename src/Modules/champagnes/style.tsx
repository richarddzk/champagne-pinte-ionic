import { Theme } from '@mui/material'
import { makeStyles } from '@/makeStyles'

const useStyles = makeStyles()((theme: Theme) => ({
  gridProduct: {
    paddingTop: 70,
    paddingBottom: 200,
    textAlign: 'center',
    backgroundColor: theme.palette.mode !== 'dark' ? 'antiquewhite' : '#a39a8e',
  },
  productComponent: {
    marginBottom: '10%',
    maxWidth: '100%',
  },
  gridImage: {
    minWidth: 400,
  },
  button: {
    // backgroundColor: '#000',
  },
  typo: {
    font: 'italic 1.2em "Fira Sans", serif',
  },
  gridProductContainer: {
    minHeight: '85vh',
  },
  gridButton: {
    height: 200,
    // width: 0,
    zIndex: 5,
    position: 'relative',
    bottom: 400,
    left: '50%',
  },
  slideContainer: {
    textAlign: '-webkit-center' as any,
    display: 'block',
    justifyItems: 'center',
    justifyContent: 'center',
  },
  imgSlider: {
    marginTop: 10,
    minWidth: 400,
    maxWidth: '30vw',
    height: '80vh',

    width: '100%',
  },
  img: {
    maxHeight: '80vh',
    minHeight: '80vh',
    objectFit: 'cover',
    width: '100%',

    maxWidth: '100%',
    height: 'auto',
  },
}))
export default useStyles
