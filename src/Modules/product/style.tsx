import { Theme } from '@mui/material'
import { makeStyles } from '@/makeStyles'

// @ts-ignore
const useStyles = makeStyles()((theme: Theme) => ({
  gridProduct: {
    paddingTop: 70,
    paddingBottom: 200,
    textAlign: 'center',

    backgroundColor: theme.palette.mode !== 'dark' ? 'antiquewhite' : '#a39a8e',
  },
  center: {
    textAlign: '-webkit-center' as any,
  },
  gridImage: {
    minWidth: 520,
    backgroundColor: theme.palette.mode !== 'dark' ? 'antiquewhite' : '#a39a8e',

    [theme.breakpoints.down(910)]: {
      textAlign: '-webkit-center' as any,
      minWidth: 320,
    },
  },
  ProductDescription: {
    minWidth: 400,
  },
  gridProductContainer: {
    backgroundColor: theme.palette.mode !== 'dark' ? 'antiquewhite' : '#a39a8e',
  },
  gridMainDescription: {
    paddingTop: 100,
    margin: 0,
  },
  gridComposition: {
    maxWidth: 500,
  },
  typo: {
    margin: 10,
    textAlign: 'center',
    fontFamily: 'Fira Sans , serif',
  },
  typo2: {
    margin: 10,
    textAlign: 'start',
    fontFamily: 'Fira Sans , serif',
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
    height: '85vh',
    minWidth: 400,
    maxWidth: '60vw',
    backgroundColor: theme.palette.mode !== 'dark' ? 'antiquewhite' : '#a39a8e',
    maxHeight: '85vh',

    width: '100%',
  },
  img: {
    maxHeight: '85vh',
    objectFit: 'cover',
    width: '100%',

    maxWidth: '100%',
    height: 'auto',
  },
  paperText: {
    margin: '9%',
    maxWidth: 500,
    padding: 20,
    color: theme.palette.mode === 'dark' ? 'white' : 'black',
    backgroundColor: theme.palette.mode === 'dark' ? '#121212b0' : '#ffffffc7',
    ':hover': {
      backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white',
    },
  },
  paperTextRight: {
    margin: '9%',
    maxWidth: 500,
    minWidth: 'fit-content',
    marginLeft: '60%',
    padding: 20,
    color: theme.palette.mode === 'dark' ? 'white' : 'black',
    backgroundColor: theme.palette.mode === 'dark' ? '#121212b0' : '#ffffffc7',
    ':hover': {
      backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white',
    },
    [theme.breakpoints.down(1600)]: {
      marginLeft: '50%',
    },
    [theme.breakpoints.down(1200)]: {
      marginLeft: '40%',
    },
    [theme.breakpoints.down(1000)]: {
      marginLeft: '20%',
    },
  },
}))
export default useStyles
