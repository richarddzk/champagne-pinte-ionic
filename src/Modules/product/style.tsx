import { makeStyles } from '@/makeStyles'

// @ts-ignore
const useStyles = makeStyles()((theme: Theme) => ({
  gridProduct: {
    paddingTop: 70,
    paddingBottom: 200,
    textAlign: 'center',
    [theme.breakpoints.down(1200)]: {
      paddingTop: 0
    },
    backgroundColor: theme.palette.background.second
  },
  GridTitre: {
    alignContent: 'center',
    alignItems: 'center',

    backgroundColor: theme.palette.background.default
  },
  center: {
    textAlign: '-webkit-center' as any
  },
  gridImage: {
    backgroundColor: theme.palette.background.default,

    [theme.breakpoints.down(910)]: {
      textAlign: '-webkit-center' as any
    }
  },
  ProductDescription: {
    minWidth: 200,
    alignContent: 'center',
    [theme.breakpoints.down(910)]: {
      textAlign: '-webkit-center' as any
    }
  },
  gridProductContainer: {
    backgroundColor: theme.palette.background.default
  },
  gridMainDescription: {
    paddingTop: 100,
    margin: 0
  },
  gridComposition: {
    maxWidth: 500
  },
  typo: {
    margin: 10,
    textAlign: 'center',
    fontFamily: 'Fira Sans , serif'
  },
  typo2: {
    margin: 10,
    textAlign: 'start',
    fontFamily: 'Fira Sans , serif'
  },
  gridButton: {
    height: 200,
    // width: 0,
    zIndex: 5,
    position: 'relative',
    bottom: 400,
    left: '50%'
  },
  slideContainer: {
    textAlign: '-webkit-center' as any,
    display: 'block',
    justifyItems: 'center',
    justifyContent: 'center'
  },
  imageSlider: {
    marginTop: 10,
    height: '85vh',
    minWidth: 400,
    maxWidth: '60vw',
    backgroundColor: theme.palette.background.default,
    maxHeight: '85vh',

    width: '100%'
  },
  image: {
    maxHeight: '85vh',
    objectFit: 'cover',
    width: '100%',

    maxWidth: '100%',
    height: 'auto'
  },
  paperText: {
    margin: '9%',
    maxWidth: 500,
    padding: 20,
    color: theme.palette.mode === 'dark' ? 'white' : 'black',
    backgroundColor: theme.palette.background.default,
    ':hover': {
      backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white'
    },
    [theme.breakpoints.down(370)]: {
      margin: 0,
      padding: 0
    }
  },
  paperTextRight: {
    margin: '9%',
    maxWidth: 500,
    minWidth: 'fit-content',
    marginLeft: '60%',
    padding: 20,
    color: theme.palette.mode === 'dark' ? 'white' : 'black',
    backgroundColor: theme.palette.background.default,
    ':hover': {
      backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white'
    },
    [theme.breakpoints.down(1600)]: {
      marginLeft: '50%'
    },
    [theme.breakpoints.down(1200)]: {
      marginLeft: '40%'
    },
    [theme.breakpoints.down(800)]: {
      marginLeft: '20%'
    },
    [theme.breakpoints.down(500)]: {
      margin: 10,
      padding: 10
    },
    [theme.breakpoints.down(370)]: {
      margin: 0,
      padding: 0
    }
  }
}))
export default useStyles
