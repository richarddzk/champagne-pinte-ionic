import { makeStyles } from '@/makeStyles';

const drawerWidth = 450;

const useStyles = makeStyles()(
  (theme) => ({
    drawerPaper: {
      width: drawerWidth,
      backgroundImage: 'none',
      backgroundColor: theme.palette.background.default,
      [theme.breakpoints.down(1200)]: {

        opacity: 1,
        width: '100%',

      },
      overflow: 'hidden'
    },
    MainGrid: {
      paddingTop: 20,
      height: '99.8%',
    },
    CartGrid: {
      padding: 10,
      height: '80%',
      backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#0e121c',
    },
    mainPaper: {
      height: '100%',
      width: '95%',
    },
    typo: {
      font: 'italic 1.2em Times New Roman, serif',
    },
    typoTitre: {
      font: 'italic 1.6em Times New Roman, serif',
    },
  }),
);
export default useStyles;
