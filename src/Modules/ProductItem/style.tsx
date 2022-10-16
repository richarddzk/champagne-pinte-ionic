import { makeStyles } from '@/makeStyles'
import { alpha, Theme } from '@mui/material/styles'

const useStyles = makeStyles()((theme: Theme) => ({
  image: {
    alignSelf: 'center',
    textAlign: 'center'
  },

  typo: {
    margin: 10,
    color: theme.palette.mode === 'dark' ? 'white' : 'black',
    fontFamily: 'Fira Sans , serif'
  },
  GridTitre: {
    alignContent: 'center',
    padding: 100,
    [theme.breakpoints.down(1400)]: {
      padding: 50,
      paddingLeft: 45
    },
    [theme.breakpoints.down(1000)]: {
      padding: 10,
      paddingLeft: 5
    },
    [theme.breakpoints.down(800)]: {
      padding: 10,
      paddingRight: 50,
      paddingLeft: 45
    },
    [theme.breakpoints.down(600)]: {
      padding: 10,
      paddingRight: 20,
      paddingLeft: 20
    },
    [theme.breakpoints.down(400)]: {
      padding: 10
    }
  },

  typoTitre: {
    margin: 10,
    fontFamily: 'Fira Sans , serif'
  },
  buttton: {
    margin: 20,
    fontFamily: 'Fira Sans , serif'
  },
  textField: {
    width: 160,
    paddingRight: 10,
    '& .MuiInputBase-input': {
      padding: 5,
      height: 44,

      borderRadius: 4,
      position: 'relative',
      // backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
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
