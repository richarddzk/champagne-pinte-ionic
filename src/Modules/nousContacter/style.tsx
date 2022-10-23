import { makeStyles } from '@/makeStyles'
import { alpha, styled } from '@mui/system'
import InputBase from '@mui/material/InputBase'
import { Theme } from '@mui/material'

const useStyles = makeStyles()((theme: Theme) => ({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.background.default,
    textAlign: 'center'
  },

  menuButton: {
    marginTop: 10,
    marginLeft: 200,
    padding: 5
  },
  center: {
    textAlign: '-webkit-center' as any
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
        'Times New Roman, serif',
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
  TextFieldMulti: {
    paddingTop: 20,
    '& .MuiInputBase-root': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #ced4da',
      fontSize: 16,
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow'
      ]) as any,
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        'Times New Roman, serif',
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
  CountrySelect: {
    paddingTop: 22,
    '& .MuiOutlinedInput-root.MuiInputBase-sizeSmall': {
      paddingTop: 2.5,
      paddingBottom: 2.5
    },
    '& .MuiInputBase-root': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #ced4da',
      fontSize: 16,
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow'
      ]) as any,
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        'Times New Roman, serif',
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
  radio: {
    paddingTop: 10,
    paddingLeft: 5,
    '& .MuiFormControlLabel-label': {
      fontSize: 16,
      fontFamily: [
        'Times New Roman, serif',
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
      ].join(',')
    }
  },
  MainGrid: {
    minWidth: 'fit-content',
    padding: 20,
    width: '50%',
    margin: 'auto',
    zIndex: 4,
    bottom: 300,
    color: theme.palette.mode === 'dark' ? 'white' : 'black',
    backgroundColor: `${theme.palette.background.default}fc`,
    marginTop: 250,
    borderRadius: 10
  },
  form: {
    width: '100%',
    height: '100vh',
    marginBottom: 700,
    minWidth: 0,
    backgroundImage: "url('/image/produit/brut/raisinCoupe.webp')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
  typo: {
    maxWidth: '100%',
    textAlign: 'center',
    padding: 10,
    paddingTop: 20,
    fontWeight: 'bold',
    fontFamily: 'Times New Roman, serif'
  },
  MenuItem: {
    fontWeight: 'bold',
    fontFamily: 'Times New Roman, serif'
  }
}))

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  paddingTop: 10,
  'label + &': {
    marginTop: theme.spacing(3)
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',

    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Times New Roman, serif',
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
}))

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5'
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)'
  }
}))

const BpCheckedIcon = styled(BpIcon)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    content: '""'
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.primary.main
  }
}))

export { BpCheckedIcon, BpIcon, BootstrapInput }
export default useStyles
