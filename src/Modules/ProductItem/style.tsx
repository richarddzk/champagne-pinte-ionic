import { makeStyles } from '@/makeStyles'
import { alpha, Theme } from '@mui/material/styles'

const useStyles = makeStyles()((theme: Theme) => ({
  image: {
    alignSelf: 'center',
    textAlign: 'center',
  },
  typo: {
    margin: 10,

    fontFamily: 'Fira Sans , serif',
  },
  buttton: {
    margin: 20,
    fontFamily: 'Fira Sans , serif',
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
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
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
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
      '&:hover': {
        borderColor: theme.palette.primary.main,
      },
    },
  },
}))
export default useStyles
