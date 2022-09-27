import { makeStyles } from '@/makeStyles'

const useStyles = makeStyles()((theme) => ({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.mode !== 'dark' ? 'antiquewhite' : '#a39a8e',
    textAlign: 'center',
    paddingTop: 70,
    paddingBottom: 200,
  },

  menuButton: {
    marginTop: 10,
    marginLeft: 200,
    padding: 5,
  },
  homeLogo: {},
  center: {
    textAlign: '-webkit-center' as any,
  },
  gridNewsletter: {
    minWidth: 'fit-content',
    padding: 20,
    width: '50%',
    margin: 'auto',
    zIndex: 4,
    bottom: 300,
    backgroundColor: theme.palette.mode !== 'dark' ? '#ffffff94' : '#0000009c',
    color: theme.palette.mode === 'dark' ? 'white' : 'black',
    ':hover': {
      backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white',
      boxShadow:
        '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);',
    },
    marginBottom: 100,
  },
}))
export default useStyles
