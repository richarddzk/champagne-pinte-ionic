import { Theme } from '@mui/material'
import { makeStyles } from '@/makeStyles'

const useStyles = makeStyles()((theme: Theme) => ({
  imgSlider: {
    height: '100%',
    width: '100%',
    ':hover': {
      boxShadow:
        'box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;'
    }
  },
  ButtonCuve: {
    marginTop: 100
  },
  maisonHome: {
    marginTop: '20%',

    [theme.breakpoints.down(1595)]: {
      marginBottom: 250
    },
    [theme.breakpoints.down(500)]: {
      marginBottom: 350
    },
    [theme.breakpoints.down(360)]: {
      marginBottom: 450
    },
    [theme.breakpoints.down(310)]: {
      marginBottom: 550
    }
  },
  containerPaper: {
    width: '80vw',
    height: '90vh'
  },

  container: {
    width: '80vw',
    height: 600,
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    }
  },
  productComponent: {
    marginTop: 100,
    maxWidth: '100%'
  },
  gridImage: {
    maxWidth: '30%'
  },
  gridProductContainer: {
    height: 500
  },

  slideContainer: {
    textAlign: '-webkit-center' as any,
    display: 'block',
    justifyItems: 'center',
    justifyContent: 'center'
  },

  maisonButtonDiv: {
    height: 0,
    // width: 0,
    zIndex: 999,
    bottom: 200,
    position: 'relative',
    opacity: 0,
    transition: '.5s ease',
    textAlign: 'center',
    backgroundColor: 'transparent',
    [theme.breakpoints.down(501)]: {
      opacity: 1,
      visibility: 'visible'
    },
    ':hover': {
      opacity: 0.3
    }
  },
  containerSlideShow: {
    ':hover': {
      opacity: 1,
      visibility: 'visible'
    }
  },

  mapLisse: {
    width: '100%',
    height: 700,
    marginBottom: 200,
    ':hover': {
      backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white',
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    }
  },
  gridMap: {
    width: '70%',
    height: 700,
    marginBottom: 20,
    ':hover': {
      backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white'
    }
  },
  gridMapLisse: {
    width: '70%',
    height: 700,
    marginBottom: 200,
    ':hover': {
      backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white',
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    }
  },
  MapDiv: {
    zIndex: 0,
    bottom: 600,
    position: 'relative',

    borderRadius: 10,
    width: '50vw',
    height: 0
  },
  decouvrirButton: {
    marginTop: 100,
    font: ' italic 1.2em "Fira Sans", serif',
    width: '10%',
    minWidth: 120,
    ':hover': {
      backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white',
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    },
    [theme.breakpoints.down(501)]: {
      marginTop: 100
    }
  },
  mapButton: {
    marginTop: 100,

    width: '100%',

    marginBottom: 150,
    [theme.breakpoints.down(501)]: {
      marginTop: 100
    }
  },
  img: {
    height: '100vh',
    width: '99.4vw',
    objectFit: 'cover'
  },
  boutiqueButton: {},
  boutiqueButtonDiv: {
    zIndex: 999,
    bottom: 1000,
    position: 'relative',
    font: ' italic 1.2em "Fira Sans", serif',
    height: 0
  },
  // slideContainer: {
  //   textAlign: '-webkit-center' as any,
  //   display: 'block',
  //   justifyItems: 'center',
  //   height: '100vh',
  //   justifyContent: 'center',
  // },
  gridProduct: {
    paddingTop: 200,
    paddingBottom: 200,
    backgroundColor: 'antiquewhite'
  },
  button: {
    // backgroundColor: '#000',
  },
  typo: {
    font: 'italic 1.2em "Fira Sans", serif'
  },
  gridButton: {
    height: 200,
    // width: 0,
    zIndex: 5,
    position: 'relative',
    bottom: 300,
    left: '50%'
  },
  paperTextLeft: {
    textAlign: 'center',
    bottom: 400,
    position: 'relative',
    zIndex: 9,
    maxWidth: 450,
    padding: 20,
    color: theme.palette.mode === 'dark' ? 'white' : 'black',
    backgroundColor: theme.palette.mode === 'dark' ? '#121212b0' : '#ffffffc7',
    ':hover': {
      backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white'
    },
    // left: 'max(-35vw,)',
    marginLeft: '5em',
    [theme.breakpoints.down(1100)]: {
      bottom: 200,
      maxWidth: '100%',
      marginLeft: 0,
      margin: '5%'
    },
    [theme.breakpoints.down(270)]: {
      bottom: 350
    }
  },
  paperTextRight: {
    textAlign: 'center',
    bottom: 400,
    position: 'relative',
    zIndex: 9,
    maxWidth: 450,
    padding: 20,
    color: theme.palette.mode === 'dark' ? 'white' : 'black',
    backgroundColor: theme.palette.mode === 'dark' ? '#121212b0' : '#ffffffc7',
    ':hover': {
      backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white'
    },
    // left: 'max(-35vw,)',
    marginLeft: '65%',
    [theme.breakpoints.down(1100)]: {
      bottom: 200,
      maxWidth: '100%',
      marginLeft: 0,
      margin: '5%'
    },
    [theme.breakpoints.down(270)]: {
      bottom: 350
    },
    [theme.breakpoints.down(250)]: {
      bottom: 400
    }
  },
  typoText: {
    textAlign: 'center',
    paddingBottom: 20,
    fontFamily: 'Fira Sans , serif',
    color: theme.palette.mode !== 'dark' ? 'black' : 'white'
  },
  typoAdresse: {
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
    fontFamily: 'Fira Sans , serif',
    fontStyle: 'italic',
    color: theme.palette.mode !== 'dark' ? 'black' : 'white'
  }
}))
export default useStyles
