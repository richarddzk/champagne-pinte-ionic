import useScreen from '@/Utils/hooks/useScreen'
import { Grid, Typography, Divider } from '@mui/material'
import React from 'react'
import useStyles from '../../style'
import InfosForm from './infosForm'
import { InfosProps } from './interfaces'

const Infos: React.FC<InfosProps> = () => {
  const { classes } = useStyles()
  const { isTablette } = useScreen()

  return (
    <Grid container direction="column">
      <Grid
        style={{ textAlign: 'center', width: '100%' }}
        justifyContent="center"
        alignItems="center"
      >
        <Typography className={classes.typoHeader} color="primary">
          Informations du compte
        </Typography>
        <Grid className={classes.center} justifyContent="center" alignItems="center" item xs={12}>
          <Divider
            textAlign="center"
            variant="middle"
            style={{
              marginTop: isTablette ? 5 : 50,
              marginBottom: 50,
              width: isTablette ? '98%' : '95%'
            }}
          />
        </Grid>
        <InfosForm />

        <Grid className={classes.center} justifyContent="center" alignItems="center" item xs={12}>
          <Divider
            textAlign="center"
            variant="middle"
            style={{ marginTop: 50, marginBottom: 50, width: '95%' }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Infos
