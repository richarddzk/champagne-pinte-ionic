import { alpha, Theme } from '@mui/material'
import { makeStyles } from '@/makeStyles'

const useStyles = makeStyles()((theme: Theme) => ({
  container: {
    backgroundColor: theme.palette.mode !== 'dark' ? '#f5f5f5eb' : 'black',
    height: '100vh',
    width: '100vw'
  },
  Image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover'
  },
  TextField: {
    paddingTop: 20,
    '& .MuiInputBase-input': {
      padding: 5,
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #ced4da',
      fontSize: 16,
      textAlign: '-webkit-center' as any,
      transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main
      },
      '&:hover': {
        borderColor: theme.palette.primary.main
      }
    }
  },
  typo: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,

    font: ' 1.5em Times New Roman, serif',
    [theme.breakpoints.down(1200)]: {
      marginLeft: 0
    }
  },
  typoHeader: {
    marginTop: 10,
    marginBottom: 30,
    textAlign: '-webkit-center' as any,
    font: ' italic 1.2em Times New Roman, serif'
  },
  gridImage: {
    position: 'relative',
    height: '100%',
    width: '100%'
  },
  gridForm: {
    position: 'relative',
    bottom: '95%',
    minWidth: 300,
    zIndex: 5,
    backgroundColor: theme.palette.mode !== 'dark' ? '#f5f5f5eb' : '#000000e0',
    margin: 'auto',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 10,
    padding: 5,
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    }
  },
  googeGridButton: {
    width: 120,
    height: 50,

    cursor: 'pointer',
    display: 'block',
    boxSizing: 'content-box',
    boxShadow: '0px 16px 60px rgba(78, 79, 114, 0.08)'
  },
  gridLoginButton: {
    width: '100%',
    height: '100%',
    padding: 5
  },
  googeButtonText: {
    color: 'white',
    // fontWeight: 'bold',
    font: '1.3em Times New Roman, serif'
  },
  googeIcon: { marginTop: 10, paddingRight: 5 },
  googeGridText: {
    marginTop: 10,
    paddingRight: 5
  },
  facebookGridButton: {
    cursor: 'pointer',

    display: 'block',
    fontSize: '1.3em',
    boxSizing: 'content-box',
    boxShadow: '0px 16px 60px rgba(78, 79, 114, 0.08)'
  },
  facebookButton: {
    color: '#4285f4',
    fontWeight: 'bold',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
    font: '1.2em Times New Roman, serif'
  },
  stepper: {
    marginBottom: 40,
    marginTop: 20
  },
  button: {
    marginBottom: 30,
    padding: 5
  },
  form: {
    width: '100%',
    minWidth: 0,

    [theme.breakpoints.down(1200)]: {
      padding: 20
    },
    [theme.breakpoints.down(800)]: {
      padding: 10
    },
    [theme.breakpoints.down(500)]: {
      padding: 0
    }
  },
  center: {
    textAlign: '-webkit-center' as any
  }
}))
export default useStyles
