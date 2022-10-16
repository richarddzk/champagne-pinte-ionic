import { Theme } from '@mui/material'
import { makeStyles } from '@/makeStyles'

const useStyles = makeStyles()((theme: Theme) => ({
  containerPaper: {
    width: '80vw',
    height: '90vh'
  },
  PaperSliderProduct: {
    padding: 20,
    paddingBottom: 100,
    backgroundColor: 'transparent',
    borderRadius: 20,
    backgroundImage: 'none',
    boxShadow: 'none',
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    }
  },
  container: {
    width: '80vw',
    height: '100vh',
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    }
  },
  productComponent: {
    maxWidth: '100%',
    height: '100vh'
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
    [theme.breakpoints.down(701)]: {
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
    },
    [theme.breakpoints.down(701)]: {
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
    font: ' italic 1.2em Times New Roman, serif',
    width: '45%'
  },

  gridProduct: {
    paddingTop: 200,
    paddingBottom: 200,
    backgroundColor: 'white'
  },
  button: {
    // backgroundColor: '#000',
  },
  gridTypo: {
    color: theme.palette.mode === 'dark' ? 'white' : 'black',
    backgroundColor: theme.palette.background.default,
    borderRadius: '0px 0px 10px 10px'
  },
  typo: {
    textAlign: 'center',
    fontFamily: 'Times New Roman , serif'
  },
  typoJust: {
    padding: 20,
    fontFamily: 'Times New Roman , serif'
  },
  gridButton: {
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
    backgroundColor: theme.palette.background.default,
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
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
    backgroundColor: theme.palette.background.default,
    ':hover': {
      // backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white',
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    }
  }
}))
export default useStyles
