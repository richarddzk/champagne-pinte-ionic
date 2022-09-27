import { makeStyles } from '@/makeStyles'
import { Theme } from '@mui/system'

const useStyles = makeStyles()((theme: Theme) => ({
  typo: {
    color: theme.palette.mode === 'light' ? '#000' : '#fff',
    font: ' italic 1.4em "Fira Sans", serif',
    padding: 10
  },
  typoButton: {
    color: theme.palette.mode === 'light' ? '#000' : '#fff',
    font: ' italic 1.2em "Fira Sans", serif',
    padding: 10
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
    paddingTop: 150,
    paddingBottom: 100,
    [theme.breakpoints.down(501)]: {
      paddingTop: 10
    }
  },
  mainGridAccount: {
    paddingTop: 80,
    paddingRight: 80,
    paddingLeft: 80,
    paddingBottom: 100,
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
  }
}))
export default useStyles
