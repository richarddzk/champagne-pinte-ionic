import { makeStyles } from '@/makeStyles'
import { Theme } from '@mui/system'

const useStyles = makeStyles()((theme: Theme) => ({
  gridProduct: {
    paddingTop: 70,
    paddingBottom: 200,
    textAlign: 'center',

    [theme.breakpoints.down(1200)]: {
      paddingTop: 0
    }
  },
  productComponent: {
    backgroundColor: theme.palette.background.second,
    paddingBottom: 100,
    paddingTop: 100
  },
  center: {
    textAlign: '-webkit-center' as any
  },
  gridImage: {
    minWidth: 400,
    width: '100%'
  },
  button: {
    // backgroundColor: '#000',
  },
  typo: {
    font: 'italic 1.2em Times New Roman, serif'
  },
  gridProductContainer: {
    minHeight: '85vh'
  },
  gridButton: {
    height: 200,
    // width: 0,
    zIndex: 5,
    position: 'relative',
    bottom: 400,
    left: '50%'
  },
  slideContainer: {
    textAlign: '-webkit-center' as any,
    display: 'block',
    justifyItems: 'center',
    justifyContent: 'center'
  },
  imageSlider: {
    marginTop: 10,
    minWidth: 400,
    maxWidth: '30vw',
    height: '80vh',

    width: '100%'
  },
  image: {
    maxHeight: '80vh',
    minHeight: '80vh',
    objectFit: 'cover',
    width: '100%',

    maxWidth: '100%',
    height: 'auto'
  },
  typoTitre: {
    fontFamily: 'Times New Roman, serif'
  },
  typoText: {
    paddingBottom: 20,
    fontFamily: 'Times New Roman, serif'
  },
  GridPaperVigne: {
    paddingRight: '10%',
    height: '85vh',
    width: '80%',
    justifyContent: 'center',
    [theme.breakpoints.down(1501)]: {},
    [theme.breakpoints.down(1200)]: {
      paddingRight: 0,
      width: '100%',
      marginBottom: 300
    },
    [theme.breakpoints.down(700)]: {},
    [theme.breakpoints.down(500)]: {}
  },
  paperGrid: {
    height: 0,
    padding: 5,
    marginLeft: '50%',
    [theme.breakpoints.down(1200)]: {
      marginLeft: 0
    }
  },
  paperText: {
    bottom: 550,
    position: 'relative',
    zIndex: 9,
    maxWidth: 530,
    padding: 30,
    left: '40vw',
    color: theme.palette.mode === 'dark' ? 'white' : 'black',
    backgroundColor: theme.palette.background.default,
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    },

    [theme.breakpoints.down(1200)]: {
      padding: 10,
      left: 2,
      bottom: 100
    }
  },
  paperImage: {
    width: '100%',
    position: 'relative',
    height: '100%',
    overflow: ' auto',
    ':hover': {
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);'
    }
  },
  typoTitreRaisin: {
    margin: 10,
    textAlign: 'center',
    fontFamily: 'Fira Sans , serif',
    paddingBottom: 10
  }
}))
export default useStyles
