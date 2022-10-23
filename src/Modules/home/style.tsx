import { Theme } from '@mui/material'
import { makeStyles } from '@/makeStyles'

const useStyles = makeStyles()((theme: Theme) => ({
  imageSlider: {
    maxHeight: 938,
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
    // to do : viré ça par du grid auto
    [theme.breakpoints.down(1595)]: {
      marginBottom: 350
    },
    [theme.breakpoints.down(900)]: {
      marginBottom: 400
    },
    [theme.breakpoints.down(810)]: {
      marginBottom: 425
    },
    [theme.breakpoints.down(750)]: {
      marginBottom: 450
    },
    [theme.breakpoints.down(610)]: {
      marginBottom: 550
    },
    [theme.breakpoints.down(480)]: {
      marginBottom: 720
    },
    [theme.breakpoints.down(420)]: {
      marginBottom: 780
    },
    [theme.breakpoints.down(390)]: {
      marginBottom: 830
    },
    [theme.breakpoints.down(360)]: {
      marginBottom: 950
    },
    [theme.breakpoints.down(310)]: {
      marginBottom: 1050
    },
    [theme.breakpoints.down(298)]: {
      marginBottom: 1250
    },
    [theme.breakpoints.down(250)]: {
      marginBottom: 1550
    },
    [theme.breakpoints.down(200)]: {
      marginBottom: 1750
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
    bottom: 250,
    position: 'relative',
    opacity: 0,
    transition: '.5s ease',
    textAlign: 'center',
    backgroundColor: 'transparent',
    [theme.breakpoints.down(700)]: {
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
    marginBottom: 200
  },
  gridMap: {
    width: '100%',
    height: 700,
    marginBottom: 20
  },
  gridMapLisse: {
    width: '100%',
    height: 700,
    marginBottom: 200
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
    font: ' italic 1.2em Times New Roman, serif',
    width: '10%',
    minWidth: 120,
    backgroundColor: theme.palette.background.default,
    ':hover': {
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
  image: {
    height: '100vh',
    width: '99.4vw',
    objectFit: 'cover'
  },
  boutiqueButton: {},
  boutiqueButtonDiv: {
    zIndex: 999,
    bottom: 1000,
    position: 'relative',
    font: ' italic 1.2em Times New Roman, serif',
    height: 0
  },
  gridProduct: {
    paddingTop: 200,
    paddingBottom: 200,
    backgroundColor: 'whitewhite'
  },
  button: {
    // backgroundColor: '#000',
  },
  typo: {
    font: 'italic 1.2em Times New Roman, serif'
  },
  gridButton: {
    height: 200,
    // width: 0,
    zIndex: 5,
    position: 'relative',
    bottom: 300,
    left: '50%'
  },
  center: {
    textAlign: '-webkit-center' as any
  },
  paperTextLeft: {
    textAlign: '-webkit-center' as any,
    bottom: 480,
    position: 'relative',
    zIndex: 9,
    maxWidth: 450,
    padding: 20,
    color: theme.palette.mode === 'dark' ? 'white' : 'black',
    backgroundColor: theme.palette.background.default,

    // left: 'max(-35vw,)',
    marginLeft: '5em',
    [theme.breakpoints.down(501)]: {
      bottom: 0,

      marginBottom: 350
    },

    [theme.breakpoints.down(1580)]: {
      marginLeft: '1em',
      marginRight: '2%',
      maxWidth: '100%',
      bottom: -40
    }
  },
  paperTextRight: {
    textAlign: '-webkit-center' as any,
    bottom: 500,
    position: 'relative',
    zIndex: 9,
    maxWidth: 450,
    padding: 20,
    color: theme.palette.mode === 'dark' ? 'white' : 'black',
    backgroundColor: theme.palette.background.default,
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    },
    [theme.breakpoints.down(501)]: {
      backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white',
      marginBottom: 350
    },
    // left: 'max(-35vw,)',
    marginLeft: '65%',

    [theme.breakpoints.down(1580)]: {
      marginLeft: '2%',
      marginRight: '2%',
      maxWidth: '100%',
      bottom: -40
    }
  },
  typoText: {
    // textAlign: '-webkit-center' as any,
    paddingBottom: 20,
    fontFamily: 'Fira Sans , serif',
    color: theme.palette.mode !== 'dark' ? 'black' : 'white'
  },
  typoAdresse: {
    textAlign: '-webkit-center' as any,
    marginBottom: 10,
    marginTop: 10,
    fontFamily: 'Fira Sans , serif',
    color: theme.palette.mode !== 'dark' ? 'black' : 'white'
  }
}))
export default useStyles
