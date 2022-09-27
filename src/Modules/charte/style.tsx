import { makeStyles } from '@/makeStyles'

const useStyles = makeStyles()(() => ({
  titre: {
    textAlign: 'center',
    paddingBottom: 50,
    font: ' 4em bold, serif',
  },
  titre2: {
    paddingBottom: 25,
    fontWeight: 'bold',
    font: ' 2em "Fira Sans", serif',
  },
  titre3: {
    paddingTop: 35,
    paddingBottom: 65,
    fontWeight: 'bold',
    font: ' 1.5em "Fira Sans", serif',
  },
  titre4: {
    textAlign: 'center',
    paddingBottom: 25,
    fontWeight: 'bold',
    font: ' 2em "Fira Sans", serif',
  },
  body: {
    paddingBottom: 25,
    fontWeight: 'bold',
    font: ' 1.2em ',
  },
  body1: {
    paddingBottom: 25,
    font: '1.2em ',
  },
}))
export default useStyles
