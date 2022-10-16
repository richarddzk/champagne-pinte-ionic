import { Theme } from '@mui/material'
import { makeStyles } from '@/makeStyles'

const useStyles = makeStyles()((theme: Theme) => ({
  typoTitre: {
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',

    fontFamily: 'Fira Sans , serif'
  },

  imageGrid: {
    zIndex: 9,
    position: 'absolute',
    top: '18.5vh'
  },
  gridPaperText2: {
    height: 0,
    marginLeft: '60%',
    [theme.breakpoints.down(1595)]: {
      marginBottom: 300,
      marginLeft: 0,
      textAlign: '-webkit-center' as any
    },
    [theme.breakpoints.down(850)]: {
      marginBottom: 500
    },
    [theme.breakpoints.down(600)]: {
      marginBottom: 800
    },
    [theme.breakpoints.down(390)]: {
      marginBottom: 1000
    },
    [theme.breakpoints.down(340)]: {
      marginBottom: 1500
    }
  },

  paperText2: {
    bottom: 700,
    position: 'relative',
    zIndex: 9,
    maxWidth: 540,
    padding: 20,
    color: theme.palette.mode === 'dark' ? 'white' : 'black',
    backgroundColor: theme.palette.background.default,
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    },
    // left: 'max(-35vw,)',
    marginLeft: '-5em',
    [theme.breakpoints.down(1595)]: {
      bottom: 400,
      maxWidth: '100%',
      marginLeft: 0,
      margin: '5%'
    }
  },
  typoTextBold: {
    paddingBottom: 20,
    fontWeight: 'bold',
    fontFamily: 'Fira Sans , serif',
    textAlignLast: 'left'
  },
  typoText: {
    paddingBottom: 20,
    fontFamily: 'Fira Sans , serif',
    textAlignLast: 'left'
  },

  gridtextRaisin: {
    padding: 100,
    [theme.breakpoints.down('xl')]: {
      padding: 0,
      paddingBottom: 100
    }
  },
  gridRaisin: {
    alignSelf: 'center',

    color: theme.palette.mode === 'dark' ? 'white' : 'black',
    backgroundColor: theme.palette.background.default,
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    },
    borderRadius: 20,
    [theme.breakpoints.down('xl')]: {
      minWidth: 320
    }
  },

  gridNFT: {
    color: theme.palette.mode === 'dark' ? 'white' : 'black',
    backgroundColor: theme.palette.background.default,
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    },
    borderRadius: 20,
    minWidth: 320,
    // width: 380,

    padding: 10,
    [theme.breakpoints.down('xl')]: {
      minWidth: 320
    },
    height: '100%'
  },

  typoTitreRaisin: {
    margin: 10,
    textAlign: 'center',
    fontFamily: 'Fira Sans , serif',
    paddingBottom: 10
  },

  gridNftContainer: {
    margin: 50,
    minWidth: 320,
    [theme.breakpoints.down(1595)]: {
      margin: 25
    },
    [theme.breakpoints.down('sm')]: {
      margin: 5
    }
  },
  typoNftTitre: {
    margin: 10,
    padding: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Fira Sans , serif',
    paddingBottom: 10
  },
  typoNftText: {
    margin: 10,
    padding: 20,
    textAlign: 'center',
    fontFamily: 'Fira Sans , serif',
    paddingBottom: 10,
    textAlignLast: 'left'
  },

  gridContainer: {
    justifyContent: 'center',
    paddingTop: '5%',
    paddingBottom: '5%',
    height: '100%',
    width: '100%',
    textAlign: '-webkit-center' as any
  },
  gridImage: {
    position: 'relative',
    borderRadius: 10,
    height: 800,
    margin: 30,
    minWidth: 300,
    [theme.breakpoints.down(900)]: {
      margin: 0,

      marginBottom: 10,
      marginTop: 10
    },
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    }
  },
  gridVideo: {
    position: 'relative',
    height: 800,
    margin: 10,
    minWidth: 300,
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    }
  }
}))
export default useStyles
