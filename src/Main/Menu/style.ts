import { makeStyles } from '@/makeStyles'
import { Theme } from '@mui/system'

const drawerWidth = 410

const useStyles = makeStyles()((theme: Theme) => ({
  gridTitle: {
    textAlign: 'center',
  },
  typo: {
    font: 'italic 1.2em Times New Roman, serif',
  },
  accountMenuSwitch: {
    marginRight: 20,
    marginTop: '34%',
  },
  accountMenuAccount: {
    marginRight: 20,
    marginTop: '40%',
  },
  DarkModeSwitch: {
    marginTop: 22,
  },
  gridAccount: {

    textAlign: 'center',
    justifyContent: 'center',
    height: 70,
    zIndex: 2,
    opacity: 1
  },
  gridApp: {
    padding: 0,
    alignItems: 'center',
  },
  gridItemsLogo: {
    paddingTop: 60,
    textAlignLast: 'center',
    placeContent: 'center',
  },
  gridItemsMedia: {
    paddingTop: '10hv',

  },
  gridItemMenu: {
    font: 'italic 1.2em Times New Roman, serif',
    paddingTop: 5,
    cursor: 'pointer',
    height: 55

  },
  fullGridMenu: {
    placeContent: 'center',
    alignItems: 'center',
    marginRight: 80,
    [theme.breakpoints.down(1610)]: {
      marginRight: 0,

    },
  },
  fullGridItemMenu: {
    font: 'italic 0.9rem Times New Roman, serif',

    cursor: 'pointer',
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    [theme.breakpoints.down(1460)]: {
      paddingLeft: 5,
      paddingRight: 3,

    },
  },
  fullLogoMenu: {
    marginRight: 35,
    cursor: 'pointer',

  },
  gridItemMenuGrid: {
    height: 55,
    width: '100%',
    marginLeft: 40,

    [theme.breakpoints.down(1200)]: {
      placeContent: 'center',
      marginLeft: 0,

    },
    [theme.breakpoints.down(400)]: {

      fontSize: '1.2rem',
    },
  },

  gridAppAfterScroll: {
    padding: 0,
    // backgroundColor: darkModeActive ? theme.palette.background.dark : 'white',
  },
  homeLogo: {
    zIndex: 99,
    opacity: 1
  },
  champIcon: { zIndex: 999 },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    color: '#bd9f57',
    fontStyle: 'italic',
  },
  gridButton: {
    textAlign: 'center',
    minWidth: 60,

  },
  menuButton: {
    // marginTop: 4,
    // marginLeft: '50%',
    background: 'none',

    padding: 5,
    ':hover': {
      background: 'none',
      boxShadow: 'none',
    },
    [theme.breakpoints.down(501)]: {
      marginLeft: 0,
      padding: 0,
    },
  },
  menuButtonAfterScroll: {
    marginLeft: 100,
    padding: 5,
  },
  container: {
    height: '100%',
    width: '100%',
  },
  appBar: {
    backgroundImage: 'none',
    backgroundColor: theme.palette.background.second,
    [theme.breakpoints.down(1200)]: {
      top: 'auto',
      bottom: 0,
    },
  },

  hide: {
    display: 'none',
  },
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    opacity: 0.95,
    top: 150,
    overflow: 'hidden',
    backgroundImage: 'none',
    backgroundColor: theme.palette.background.second,
    [theme.breakpoints.down(1200)]: {
      top: 0,
      opacity: 1,
      width: '100%',
      borderTopRightRadius: 0,

    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    // necessary for content to be below app bar
    height: 50,
    justifyContent: 'flex-end',
  },
  drawerContent: {
    display: 'flex',
    alignItems: 'center',
    // necessary for content to be below app bar
    height: '95%',
    justifyContent: 'flex-end',
  },
  body: {
    backgroundColor: theme.palette.background.default,
  },

  main: {
    display: 'flex',
  },

  aside: {
    width: '18.75rem',
    height: '100vh',
  },

  button: {
    cursor: 'pointer',
    margin: '1.25rem',
    border: 'none',
    padding: ' 0.5rem 1rem',
  },

}))
export default useStyles
