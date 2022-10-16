import { Theme } from '@mui/material'
import { makeStyles } from '@/makeStyles'

const useStyles = makeStyles()((theme: Theme) => ({
  container: {
    height: '100vh',
    width: '100vw'
  },
  item: {
    alignSelf: 'center',
    textAlignLast: 'center'
  },
  stripeMain: {
    textAlign: 'center'
  },
  appBar: {
    backgroundColor: theme.palette.background.default,
    placeContent: 'center'
  },
  center: {
    textAlign: '-webkit-center' as any
  },
  typo: {
    marginLeft: 10,
    marginRight: 10,
    // marginTop: 10,
    marginBottom: 10,

    font: ' 1.5em Times New Roman, serif'
  },
  typoButtonCommander: {
    marginBottom: 10,

    font: ' 1.5em Times New Roman, serif'
  },
  typoButton: {
    textAlign: 'center',
    alignSelf: 'center',
    font: ' 1.3em Times New Roman, serif'
  },
  typoHeader: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 30,
    textAlign: 'center',
    font: ' italic 1.7em Times New Roman, serif'
  },
  MainGrid: {
    overflowX: 'hidden',
    overflowY: 'auto',
    maxHeight: '90vh',
    paddingRight: 90,
    paddingLeft: 90,
    marginLeft: 100,
    paddingBottom: 20,
    minWidth: 500,
    borderRadius: 10,
    backgroundColor: theme.palette.mode === 'dark' ? '#28252166' : '#d9d9d929',
    [theme.breakpoints.down(1400)]: {
      paddingRight: 30,
      paddingLeft: 30,
      marginLeft: 10
    },
    [theme.breakpoints.down(1200)]: {
      paddingRight: 10,
      paddingLeft: 10,
      marginLeft: 2,
      marginRight: 2,
      minWidth: '100%',
      maxHeight: '100%',
      backgroundColor: 'transparent'
    }
  },
  PaperRecapCheckout: {
    minWidth: 300,
    width: 400,
    padding: 10,
    margin: 50,
    backgroundColor: theme.palette.mode === 'dark' ? '#28252166' : '#d9d9d929',
    textAlign: 'center',
    [theme.breakpoints.down(1400)]: {
      margin: 10,
      padding: 5
    },
    [theme.breakpoints.down(1200)]: {
      padding: 0,
      margin: 0,
      width: '100%',
      boxShadow: 'none',
      backgroundColor: 'transparent'
    },
    [theme.breakpoints.down(400)]: {
      minWidth: 100
    }
  },
  GridContainer: {
    [theme.breakpoints.down(1200)]: {
      backgroundColor: theme.palette.mode === 'dark' ? '#28252166' : '#d9d9d929'
    }
  },
  FormCheckout: {
    backgroundColor: theme.palette.background.default,
    borderRadius: 'none',
    [theme.breakpoints.down(1200)]: {
      width: '100%'
    },
    [theme.breakpoints.down(400)]: {
      padding: 0
    }
  }
}))
export default useStyles
