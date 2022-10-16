import { makeStyles } from '@/makeStyles'

const useStyles = makeStyles()((theme) => ({
  typo: {
    color: theme.palette.mode === 'light' ? '#000' : '#fff',
    font: ' italic 1.4em Times New Roman, serif',
    padding: 10
  },
  typoHeader: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 30,
    textAlign: 'center',
    font: ' italic 1.7em Times New Roman, serif'
  },
  typoButton: {
    color: theme.palette.mode === 'light' ? '#000' : '#fff',
    font: ' italic 1.2em Times New Roman, serif',
    padding: 10
  },
  PathLink: {
    width: '100%',
    textAlign: '-webkit-center' as any
  },
  center: {
    textAlign: '-webkit-center' as any
  },
  menuButton: {
    marginTop: 4,
    marginLeft: 100,
    padding: 5
  },
  mainGridFull: {
    padding: 30,
    paddingTop: 100,
    paddingBottom: 100,
    [theme.breakpoints.down(1200)]: {
      backgroundColor: theme.palette.mode === 'dark' ? '#28252166' : '#d9d9d929'
    },
    [theme.breakpoints.down(1200)]: {
      paddingTop: 20
    },
    [theme.breakpoints.down(501)]: {
      paddingTop: 10
    }
  },
  mainGridAccount: {
    paddingTop: 20,

    paddingLeft: 30,
    paddingBottom: 100,
    [theme.breakpoints.down(1200)]: {
      paddingLeft: 5
    },
    [theme.breakpoints.down(501)]: {
      paddingTop: 10
    }
  },
  mainGridItem: {
    ':hover': {
      backgroundColor: theme.palette.mode === 'dark' ? '#121212b0' : '#ffffffc7',
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    }
  },
  RecapPanier: {
    minWidth: 300,
    width: 400,
    padding: 10,
    margin: 50,
    backgroundColor: theme.palette.background.default,
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
  typoButtonCommander: {
    marginBottom: 10,

    font: ' 1.5em Times New Roman, serif'
  },
  MainGrid: {
    overflowX: 'hidden',
    overflowY: 'auto',
    maxHeight: '90vh',
    paddingRight: 90,
    paddingLeft: 90,
    paddingTop: 40,
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
  }
}))
export default useStyles
