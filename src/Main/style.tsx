import { makeStyles } from '@/makeStyles'
import { Theme } from '@mui/system'

const useStyles = makeStyles()((theme: Theme) => ({
  slideContainer: {
    textAlign: '-webkit-center' as any,
    background: 'white',
    height: 800,
    width: '100%',
    justifyItems: 'center',
    justifyContent: 'center'
  },
  slideProduct: {
    textAlign: '-webkit-center' as any,
    background: 'white',
    height: 400,
    width: '100%',
    justifyItems: 'center',
    justifyContent: 'center'
  },

  root: {
    flexGrow: 1
  },
  typoTitle: {
    paddingBottom: 10,
    font: '1.1em bold, serif',

    [theme.breakpoints.down(400)]: {
      font: ' 0.8em '
    }
  },
  typoBody1: {
    paddingBottom: 25,
    font: ' 1.2em ',

    [theme.breakpoints.down(400)]: {
      font: ' 1.0em '
    }
  },
  typoBody2: {
    textAlign: 'left'
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.background.default
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    color: '#CCBF90',
    fontStyle: 'bold'
  },
  image: {
    maxWidth: '100%'
  },
  gridTitle: {
    marginTop: 30,
    textAlign: 'center',
    zIndex: 99,
    height: 0
  },

  main: {
    justifyItems: 'center',
    justifyContent: 'center'
  },

  blackItalic: {
    fontStyle: 'italic',
    color: 'black'
  },
  black: {
    color: 'black'
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  paperNewsletter: {
    padding: 20,
    width: '50%',
    margin: 'auto',
    zIndex: 4,
    bottom: 300,
    minWidth: 300,
    backgroundImage: 'none',
    backgroundColor: theme.palette.background.second,
    [theme.breakpoints.down(320)]: {
      padding: 5,
      minWidth: 200
    }
  },
  gridNewsletter: {
    height: 0,
    zIndex: 4,
    bottom: 200,
    position: 'relative'
  },
  gridFooter: {},
  Footer: {
    paddingTop: 150,
    [theme.breakpoints.down(1200)]: {
      paddingBottom: 100
    },
    color: 'white',
    backgroundColor: theme.palette.background.default
  },
  homeLogo: {},

  consignes: {
    cursor: 'pointer'
  },
  infoCalories: {
    cursor: 'pointer',
    textAlign: 'center'
  }
  // SnackbarInfo: {
  //   backgroundColor: theme.palette.mode === 'dark' ? '#12121200' : '#ffffffd9',
  //   color: theme.palette.mode === 'dark' ? 'white' : 'dark',
  // },
}))
export default useStyles
