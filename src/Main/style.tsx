import { Theme } from '@mui/material'
import { makeStyles } from '@/makeStyles'

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
    font: '1.1em bold, serif'
  },
  typoBody1: {
    paddingBottom: 25,
    font: ' 1.2em '
  },
  typoBody2: {
    textAlign: 'left'
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.mode !== 'dark' ? '#fefefe' : '#a39a8e'
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    color: '#CCBF90',
    fontStyle: 'bold'
  },
  img: {
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
    color: 'white',
    backgroundColor: theme.palette.mode === 'dark' ? '#000' : 'white'
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
