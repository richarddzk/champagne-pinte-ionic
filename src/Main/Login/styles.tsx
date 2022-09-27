import { Theme } from '@mui/material'
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
  gridImage: {
    position: 'relative',
    height: '100%'
  },
  gridForm: {
    position: 'relative',
    bottom: '95%',
    minWidth: 440,
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
    font: '1.3em "Fira Sans", serif'
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
    font: '1.2em "Fira Sans", serif'
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
    minWidth: 'fit-content'
  },
  center: {
    textAlign: '-webkit-center' as any
  }
}))
export default useStyles
