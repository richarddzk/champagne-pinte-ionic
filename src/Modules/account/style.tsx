import { makeStyles } from '@/makeStyles'
import { alpha } from '@mui/material/styles'

const useStyles = makeStyles()((theme: any) => ({
  container: {
    height: '100%',
    width: '100%'
  },
  center: {
    textAlign: '-webkit-center' as any
  },
  menuButton: {
    marginTop: 10,
    marginLeft: 200,
    padding: 5
  },
  shippingRadioButton: {
    color: theme.palette.primary.principal
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
  gridOrders: {
    [theme.breakpoints.down(480)]: {
      padding: 0
    }
  },
  typoOrderLines: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,

    font: '1.2em Times New Roman, serif'
  },
  typoHeader: {
    marginTop: 10,
    marginBottom: 30,
    textAlign: '-webkit-center' as any,
    font: ' italic 1.7em Times New Roman, serif'
  },
  gridTextfield: {
    padding: 20,
    margin: 20
  },
  gridButton: {
    padding: 20,
    paddingTop: 30,
    margin: 20
  },
  gridWallet: {
    width: '100%',
    alignContent: 'center',
    backgroundColor: theme.palette.mode === 'dark' ? '#1a1f2a' : '#fff'
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
