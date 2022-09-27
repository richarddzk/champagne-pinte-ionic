import React from 'react';
import { Grid } from '@mui/material';
import Panier from '@/Modules/panier/Panier';

const Cart: React.FC = () => (
  <Grid container direction="column">
    <Panier account />
  </Grid>
);

export default Cart;
