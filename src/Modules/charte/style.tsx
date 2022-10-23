import { makeStyles } from '@/makeStyles'
import { Theme } from '@mui/system'

const useStyles = makeStyles()((theme: Theme) => ({
  grid: {
    color: theme.palette.primary.principal,
    paddingTop: 100,
    paddingRight: '15vw',
    paddingLeft: '15vw',
    paddingBottom: 100,
    [theme.breakpoints.down(1200)]: {
      paddingRight: '1vw',
      paddingLeft: '1vw'
    }
  },
  titre: {
    textAlign: 'center',
    paddingBottom: 50,
    font: ' 4em bold, serif'
  },
  titre2: {
    paddingBottom: 25,
    fontWeight: 'bold',
    font: ' 2em Times New Roman, serif'
  },
  titre3: {
    paddingTop: 35,
    paddingBottom: 65,
    fontWeight: 'bold',
    font: ' 1.5em Times New Roman, serif',
    textAlign: 'justify'
  },
  titre4: {
    textAlign: 'center',
    paddingTop: 25,
    paddingBottom: 25,
    fontWeight: 'bold',
    font: ' 2em Times New Roman, serif'
  },
  body: {
    paddingBottom: 25,
    fontWeight: 'bold',
    font: ' 1.2em '
  },
  body1: {
    paddingTop: 25,
    paddingBottom: 25,
    font: '1.2em ',
    textAlign: 'justify'
  }
}))
export default useStyles
