import { useTheme } from '@mui/material/styles';
// WARNING: tss-react require TypeScript v4.4 or newer. If you can't update use:
// import { createMakeAndWithStyles } from "tss-react/compat";
import { createMakeAndWithStyles } from 'tss-react';

export const { makeStyles, withStyles } = createMakeAndWithStyles({
  useTheme,
});
