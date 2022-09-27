import { Theme } from '@mui/material'
import { makeStyles } from '@/makeStyles'

const useStyles = makeStyles()((theme: Theme) => ({
  containerPaper: {
    width: '80vw',
    height: '90vh'
  },
  PaperSliderProduct: {
    background: 'transparent',
    borderRadius: 20,
    ':hover': {
      backgroundColor: theme.palette.mode === 'dark' ? 'black' : '#f3f3f3c7',

      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    }
  },
  container: {
    width: '80vw',
    height: '90vh',
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    }
  },
  productComponent: {
    maxWidth: '100%'
  },
  gridImage: {
    maxWidth: '30%',
    minWidth: 300,

    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    [theme.breakpoints.down(850)]: {
      minWidth: 500,
      paddingBottom: 280
    },
    [theme.breakpoints.down(520)]: {
      minWidth: 400,
      paddingBottom: 280
    },
    [theme.breakpoints.down(420)]: {
      minWidth: 300,
      paddingBottom: 280
    },
    [theme.breakpoints.down(320)]: {
      minWidth: 200,
      paddingBottom: 280
    },
    [theme.breakpoints.down(220)]: {
      minWidth: 150,
      paddingBottom: 280
    }
  },
  gridProductContainer: {
    height: 500
  },

  slideContainer: {
    height: '100%',
    textAlign: '-webkit-center' as any,
    display: 'block',
    justifyItems: 'center',
    justifyContent: 'center'
  },

  maisonButtonDiv: {
    height: 0,
    // width: 0,
    zIndex: 999,
    bottom: 20,
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
  divVideoSlideShow: {
    width: '100%',
    objectFit: 'cover',
    height: '100%'
  },
  containerSlideShow: {
    height: '100%',
    ':hover': {
      opacity: 1,
      visibility: 'visible'
    }
  },
  divImageSlideShow: {
    width: '99.9%',
    position: 'relative',
    overflow: ' auto'
  },
  decouvirButton: {
    marginBottom: 100,
    font: ' italic 1.2em "Fira Sans", serif',
    width: '45%'
  },

  gridProduct: {
    paddingTop: 200,
    paddingBottom: 200,
    backgroundColor: 'antiquewhite'
  },
  button: {
    // backgroundColor: '#000',
  },
  gridTypo: {
    color: theme.palette.mode === 'dark' ? 'white' : 'black',
    backgroundColor: theme.palette.mode === 'dark' ? 'black' : '#f3f3f3c7',

    borderRadius: '0px 0px 10px 10px'
  },
  typo: {
    // padding: 20,
    textAlign: 'center',
    fontFamily: 'Fira Sans , serif'
  },
  gridButton: {
    // height: 200,
    // width: 0,
    zIndex: 9,
    position: 'relative',
    bottom: -10,
    left: '50%'
  },
  paperText: {
    textAlign: 'center',
    bottom: 700,
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
    }
  },
  typoText: {
    textAlign: 'center',
    paddingBottom: 20,
    fontFamily: 'Fira Sans , serif'
  },
  paperProduct: {
    ':hover': {
      // backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white',
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    }
  }
}))
export default useStyles
