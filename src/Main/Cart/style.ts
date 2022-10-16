import { makeStyles } from '@/makeStyles'
import { alpha, Theme } from '@mui/material/styles'

const drawerWidth = 600

const useStyles = makeStyles<{ darkModeActive: boolean }>()((theme: Theme) => ({
  drawerPaper: {
    width: drawerWidth,
  },
  MainGrid: {
    height: '100%',
  },
  gridCartItem: {
    padding: 20,
    borderRadius: 10,

  },
  paperCartItem: {

  },
  panierTextfield: {
    maxWidth: 80,
    color: theme.palette.mode === 'light' ? '#000' : '#fff',
    '& .MuiInputBase-input': {
      padding: 5,
      color: theme.palette.mode === 'light' ? '#000' : '#fff',
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
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
    }
  },
  textfield: {
    paddingTop: 2,
    color: theme.palette.mode === 'light' ? '#000' : '#fff',
    '& .MuiInputBase-input': {
      padding: 5,
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
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
    }
  },
  CartGrid: {
    height: '100%',
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#0e121c',
  },
  typo: {
    alignSelf: 'center',
    color: theme.palette.mode === 'light' ? '#000' : '#fff',
    font: ' 1.2em "Fira Sans", serif',
  },
  typoMaj: {
    color: theme.palette.mode === 'light' ? '#000' : '#fff',
    font: 'italic bold 0.8em "Fira Sans", serif',
  },
  buttonMaj: {
    height: 30,
    width: 'max-content',
    paddingLeft: 0
  },

  buttonMajPanier: {
    height: 30,
    width: 'max-content',
    paddingLeft: 0,
    marginTop: 5
  },
  typoButton: {
    color: theme.palette.mode === 'light' ? '#000' : '#fff',

    font: ' 1.0em "Fira Sans", serif',
    padding: 10,
  },
  gridCard: {
    alignSelf: 'center',
    margin: 20,
    font: ' 1em "Fira Sans", serif',
  },

  gridCardEmpty: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}))
export default useStyles
