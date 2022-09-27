import { makeStyles } from '@/makeStyles';

const drawerWidth = 450;

const useStyles = makeStyles<{ darkModeActive: boolean }>()(
  (theme, { darkModeActive }) => ({
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: darkModeActive ? '#121212e0' : '#ffffffeb',
      [theme.breakpoints.down(400)]: {

        opacity: 1,
        width: '100%',

      },
    },
    MainGrid: {
      paddingTop: 20,
      height: '99.8%',
    },
    CartGrid: {
      padding: 10,
      height: '80%',
    },
    mainPaper: {
      height: '100%',
      width: '95%',
    },
    typo: {
      font: 'italic 1.2em "Fira Sans", serif',
    },
    typoTitre: {
      font: 'italic 1.6em "Fira Sans", serif',
    },
  }),
);
export default useStyles;
