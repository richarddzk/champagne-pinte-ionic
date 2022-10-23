import { makeStyles } from '@/makeStyles'
import { Theme } from '@mui/system'

const useStyles = makeStyles()((theme: Theme) => ({
  container: {
    height: '100%',
    width: '100%'
  },
  typoAdresse: {
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
    fontFamily: 'Fira Sans , serif',
    fontStyle: 'italic',
    color: theme.palette.primary.main
  },
  menuButton: {
    marginTop: 10,
    marginLeft: 200,
    padding: 5
  },
  GridPaperVigne: {
    paddingLeft: '10%',
    justifyContent: 'center',
    paddingBottom: 50,
    [theme.breakpoints.down(1501)]: {
      padding: 0,
      margin: 80,
      marginTop: 10
    },
    [theme.breakpoints.down(900)]: {
      margin: 40,
      marginTop: 10
    },
    [theme.breakpoints.down(700)]: {
      margin: 10
    },
    [theme.breakpoints.down(500)]: {
      margin: 0
    }
  },
  typo: {
    margin: 10,
    textAlign: '-webkit-center' as any,
    fontFamily: 'Fira Sans , serif',
    textAlignLast: 'left'
  },
  typoText: {
    paddingBottom: 20,
    textAlignLast: 'left',
    fontFamily: 'Fira Sans , serif'
  },
  gridLogoSavoirFaire: {
    position: 'relative'
  },
  imageGrid: {
    zIndex: 9,
    position: 'absolute',
    top: '18.5vh'
  },
  typoTitre: {
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',

    fontFamily: 'Fira Sans , serif'
  },
  typoTextBold: {
    paddingBottom: 20,
    fontWeight: 'bold',
    fontFamily: 'Fira Sans , serif'
  },
  typoRaisin: {
    margin: 10,
    fontFamily: 'Fira Sans , serif',
    paddingBottom: 10
  },
  typoTitreRaisin: {
    margin: 10,
    textAlign: 'center',
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
  typoNftTitre: {
    margin: 10,
    padding: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Fira Sans , serif',
    paddingBottom: 10
  },
  paperText: {
    bottom: 500,
    position: 'relative',
    zIndex: 9,
    maxWidth: 530,
    padding: 30,
    marginRight: 'auto',
    color: theme.palette.mode === 'dark' ? 'white' : 'black',
    backgroundColor: theme.palette.background.default,
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    },
    marginLeft: '-5em',
    [theme.breakpoints.down(1501)]: {
      padding: 5,
      margin: 5
    }
  },

  gridPaperText2: {
    height: 0,
    marginLeft: '60%',
    [theme.breakpoints.down(1595)]: {
      marginBottom: 800,
      marginLeft: 0,
      textAlign: '-webkit-center' as any
    }
  },
  gridPaperSavoirFaire: {
    height: 0
  },
  paperTitreSavoirFaire: {
    bottom: 150,
    position: 'relative',
    zIndex: 9,
    maxWidth: 650,
    padding: 30,
    color: theme.palette.mode === 'dark' ? 'white' : 'black',
    backgroundColor: theme.palette.background.default,
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    }
    // left: 'max(-35vw,)',
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
    marginLeft: '-5em',
    [theme.breakpoints.down(1595)]: {
      bottom: -100,
      maxWidth: '100%',
      marginLeft: 0,
      margin: '5%'
    }
  },
  gridContainer: {
    justifyContent: 'center',
    paddingTop: '5%',
    paddingBottom: '5%',
    height: 1000,
    width: '100%',
    [theme.breakpoints.down(1595)]: {
      marginBottom: 800,
      padding: 0
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: 2400,
      padding: 0
    }
  },

  gridImage: {
    position: 'relative',
    height: 800,
    margin: 10,
    minWidth: 300,
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    }
  },
  gridText: {
    position: 'relative',
    height: '60%',
    alignSelf: 'center',
    padding: 20,
    minWidth: 350,
    backgroundColor: theme.palette.background.default,
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    }
  },
  paperTextRight: {
    bottom: 500,
    position: 'relative',
    zIndex: 9,
    maxWidth: 530,
    padding: 40,
    color: theme.palette.mode === 'dark' ? 'white' : 'black',
    backgroundColor: theme.palette.background.default,
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    },
    // left: 'max(-35vw,)',
    marginRight: '-5em',
    [theme.breakpoints.down(1501)]: {
      padding: 5,
      margin: 5
    }
  },
  GridPaperChamp: {
    paddingTop: 50,
    paddingRight: '10%',
    backgroundColor: theme.palette.background.second,
    paddingBottom: 50,

    justifyContent: 'center',
    [theme.breakpoints.down(1501)]: {
      padding: 0,
      margin: 80,
      marginTop: 10
    },
    [theme.breakpoints.down(900)]: {
      margin: 40
    },
    [theme.breakpoints.down(700)]: {
      margin: 10,
      padding: 0
    },
    [theme.breakpoints.down(500)]: {
      margin: 0
    }
  },
  paperImage: {
    width: 867,
    height: 669,
    bottom: 700,
    position: 'relative',
    zIndex: 2,
    marginLeft: '-5em',
    marginRight: 'auto',
    [theme.breakpoints.down(1600)]: {
      bottom: 400,
      padding: 5,
      margin: 5,
      paddingTop: 100
    },
    [theme.breakpoints.down(501)]: {
      padding: 0,
      bottom: 200
    }
  },
  paperImage2: {
    width: '40%',
    height: '40vh',
    position: 'relative',
    maxHeight: '100%',
    overflow: ' auto',
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    }
  },
  gridRaisin: {
    minWidth: 280,
    margin: 5,
    marginTop: 50,
    padding: 20,

    marginBottom: 50,

    color: theme.palette.mode === 'dark' ? 'white' : 'black',
    backgroundColor: theme.palette.background.second,
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    },
    borderRadius: 20,
    [theme.breakpoints.down(501)]: {
      margin: 5
    }
  },
  gridNftContainer: {
    margin: 50,
    minWidth: 480,
    [theme.breakpoints.down(1595)]: {
      margin: 25
    },
    [theme.breakpoints.down('sm')]: {
      margin: 5
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
    minWidth: 380,
    padding: 10,
    [theme.breakpoints.down('xl')]: {
      minWidth: 480
    }
  },
  GridPaperMap: {
    paddingLeft: '10%',
    paddingTop: 50,
    justifyContent: 'center',
    paddingBottom: 50,

    [theme.breakpoints.down(1600)]: {
      padding: 0,
      margin: 80,
      marginBottom: 300
    },
    [theme.breakpoints.down(900)]: {
      margin: 40,
      marginBottom: 400
    },
    [theme.breakpoints.down(700)]: {
      margin: 10,
      marginBottom: 400,
      padding: 0
    },
    [theme.breakpoints.down(500)]: {
      padding: 5
    },
    height: '100vh'
  },
  paperTextRight2: {
    bottom: 500,
    position: 'relative',
    zIndex: 9,
    maxWidth: 530,
    padding: 40,
    height: 'fit-content',
    color: theme.palette.mode === 'dark' ? 'white' : 'black',
    backgroundColor: theme.palette.background.default,
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    },
    // left: 'max(-35vw,)',
    marginRight: '1em',
    [theme.breakpoints.down(1590)]: {
      marginLeft: 0,
      bottom: 1500,
      padding: 5,
      margin: 5
    }
  },
  gridtextRaisin: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 50,
    backgroundColor: theme.palette.background.second
  },

  gridPaperRight: {
    paddingTop: 200,
    paddingLeft: '20%',
    paddingRight: '10%',
    justifyContent: 'center',
    [theme.breakpoints.down(1200)]: {
      marginBottom: 150
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: 700,
      paddingLeft: '5%',
      paddingRight: '5%',
      textAlign: '-webkit-center' as any
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 1100
    },
    [theme.breakpoints.down(500)]: {
      marginBottom: 1400
    },
    [theme.breakpoints.down(300)]: {
      marginBottom: 1700
    },
    [theme.breakpoints.down(250)]: {
      marginBottom: 2000
    },
    [theme.breakpoints.down(230)]: {
      marginBottom: 2500
    }
  },
  paperRight: {
    width: '100%',
    height: '100vh',
    position: 'relative',
    maxHeight: '100%',
    overflow: ' auto',
    backgroundColor: theme.palette.background.default,
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    }
  },
  paperTextRightSavoirFaire: {
    bottom: 900,
    position: 'relative',
    zIndex: 9,
    maxWidth: 900,
    padding: 40,
    left: '-25vw',
    marginLeft: '10%',

    color: theme.palette.mode === 'dark' ? 'white' : 'black',
    backgroundColor: theme.palette.background.default,
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    },

    [theme.breakpoints.down('md')]: {
      bottom: 400,
      left: 0,
      marginLeft: 0,
      textAlign: '-webkit-center' as any,
      maxWidth: 550
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 400,
      padding: 15
    }

    // left: 'max(-35vw,)',
  },
  gridPaperLeft: {
    paddingTop: 200,
    paddingLeft: '10%',
    paddingRight: '20%',
    justifyContent: 'center',

    [theme.breakpoints.down('md')]: {
      marginBottom: 700,
      paddingLeft: '5%',
      paddingRight: '5%',
      textAlign: '-webkit-center' as any
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 1100
    },
    [theme.breakpoints.down(500)]: {
      marginBottom: 1400
    }
  },
  paperLeft: {
    width: '100%',
    height: '100vh',
    position: 'relative',
    maxHeight: '100%',
    backgroundColor: theme.palette.background.default,
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    }
  },
  paperTextLeftSavoirFaire: {
    bottom: 850,
    position: 'relative',
    zIndex: 9,
    maxWidth: 950,
    padding: 40,
    right: '-25vw',
    marginRight: '10%',

    color: theme.palette.mode === 'dark' ? 'white' : 'black',
    backgroundColor: theme.palette.background.default,
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    },
    [theme.breakpoints.down('md')]: {
      bottom: 150,
      right: 0,
      marginRight: 0,
      textAlign: '-webkit-center' as any,
      maxWidth: 550
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 400,
      padding: 20
    }

    // left: 'max(-35vw,)',
  },
  mapLisse: {
    width: '100%',
    height: 700,
    marginBottom: 200,
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    }
  },
  gridMapLisse: {
    width: '100%',
    height: 700,
    marginBottom: 50,
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    }
  },
  decouvrirButton: {
    font: ' italic 1.2em Times New Roman, serif',
    width: '25%',
    minWidth: 120,
    backgroundColor: theme.palette.background.default,
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    }
  },
  mapButton: {
    width: '50%',
    marginBottom: 150,
    [theme.breakpoints.down(501)]: {
      marginTop: 100
    }
  }
}))
export default useStyles
