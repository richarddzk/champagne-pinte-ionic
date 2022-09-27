import { makeStyles } from '@/makeStyles'

const drawerWidth = 410

const useStyles = makeStyles()((theme) => ({
  gridTitle: {
    textAlign: 'center',
    // backgroundColor: theme.palette.background.default,

    // marginTop: 30,
  },
  typo: {
    font: 'italic 1.2em "Fira Sans", serif',
  },
  accountMenuSwitch: {
    marginRight: 20,
    marginTop: '34%',
  },
  DarkModeSwitch: {
    marginTop: 22,
  },
  gridAccount: {
    textAlign: 'center',
    height: 0,
    marginLeft: 30,
  },
  gridApp: {
    padding: 0,
    alignItems: 'center',
  },
  gridItemsLogo: {
    paddingTop: 40,
    textAlignLast: 'center',
    [theme.breakpoints.down(501)]: {
      paddingTop: 5,
    },
  },
  gridItemsMedia: {
    paddingTop: 80,
    [theme.breakpoints.down(501)]: {
      paddingTop: 0,
    },
  },
  gridItemMenu: {
    font: 'italic 1.2em "Fira Sans", serif',
    paddingTop: 5,
    cursor: 'pointer',
    [theme.breakpoints.down(501)]: {
      font: 'italic 0.8em "Fira Sans", serif',
    },
  },
  gridItemsMenu: {
    height: 55,
    [theme.breakpoints.down(501)]: {
      height: 35,
    },
  },
  gridAppAfterScroll: {
    padding: 0,
    // backgroundColor: darkModeActive ? theme.palette.background.dark : 'white',
  },
  homeLogo: {
    zIndex: 99,
    opacity: 1,
    ':hover': {
      background: 'none',
    },
  },
  champIcon: { zIndex: 999 },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    color: '#bd9f57',
    fontStyle: 'italic',
  },
  gridButton: {
    textAlign: 'end',
    marginLeft: '10%',
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
  root: {},
  appBar: {
    height: 70,
    backgroundColor: theme.palette.background.default,

    opacity: 0.75,
    [theme.breakpoints.down(501)]: {
      top: 'auto',
      bottom: 0,
      opacity: 1,
    },
  },

  accountAppBar: {
    marginRight: '10%',
    height: 70,
    zIndex: 2,
    opacity: 1,
  },
  appBarAfterScroll: {
    height: 60,
    zIndex: 2,
    backgroundColor: theme.palette.background.default,

    opacity: 0.75,
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
    borderTopRightRadius: 10,
    [theme.breakpoints.down(400)]: {
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
    minHeight: 50,
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
