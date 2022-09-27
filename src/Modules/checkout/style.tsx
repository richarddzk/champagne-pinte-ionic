import { Theme } from '@mui/material'
import { makeStyles } from '@/makeStyles'

const useStyles = makeStyles()((theme: Theme) => ({
  container: {
    height: '100vh',
    width: '100vw',
  },
  item: {
    alignSelf: 'center',
    textAlignLast: 'center',
  },
  stripeMain: {
    textAlign: 'center',
  },
  appBar: {
    backgroundColor: theme.palette.mode !== 'dark' ? '#d9d9d929' : '#28252166',
  },
  center: {
    textAlign: '-webkit-center' as any,
  },
  typo: {
    marginLeft: 10,
    marginRight: 10,
    // marginTop: 10,
    marginBottom: 10,

    font: ' 1.5em "Fira Sans", serif',
  },
  typoButtonCommander: {
    marginBottom: 10,

    font: ' 1.5em "Fira Sans", serif',
  },
  typoButton: {
    textAlign: 'center',
    alignSelf: 'center',
    font: ' 1.3em "Fira Sans", serif',
  },
  typoHeader: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 30,

    font: ' italic 1.7em "Fira Sans", serif',
  },
}))
export default useStyles
