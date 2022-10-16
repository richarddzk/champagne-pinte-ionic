import { makeStyles } from '@/makeStyles'
import { alpha } from '@mui/material'

const useStyles = makeStyles()((theme: any) => ({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.background.default,

    textAlign: 'center',
    paddingTop: 70,
    paddingBottom: 200
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

    margin: 'auto',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 5,
    textAlign: '-webkit-center' as any,
    backgroundColor: theme.palette.background.default,
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    }
  },
  button: {
    marginBottom: 30,
    padding: 5
  },
  form: {
    width: 'fit-content',
    padding: 30,
    margin: 30,
    backgroundColor: theme.palette.background.second,
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    }
  },

  center: {
    textAlign: '-webkit-center' as any
  },
  panierTextfield: {
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
  }
}))
export default useStyles
