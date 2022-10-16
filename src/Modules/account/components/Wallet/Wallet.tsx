import React from 'react'
import { Grid, Typography, Divider } from '@mui/material'
import Image from '@/Utils/MidgardImage'
import { useDarkMode } from 'next-dark-mode'
import useStyles from '../../style'
import construction from '../../../../../public/image/crypto/construction.gif'
import constructionB from '../../../../../public/image/crypto/constructionB.gif'

const Wallet: React.FC = () => {
  const { classes } = useStyles()

  const { darkModeActive } = useDarkMode()

  return (
    <Grid
      className={classes.gridWallet}
      justifyContent="center"
      alignItems="center"
      container
      direction="column"
    >
      <Grid className={classes.center} justifyContent="center" alignItems="center" item xs>
        <Typography className={classes.typoHeader} color="primary">
          DApp under construction
        </Typography>
      </Grid>
      <Grid className={classes.center} justifyContent="center" alignItems="center" item xs>
        <Divider
          textAlign="center"
          variant="middle"
          style={{ marginTop: 50, marginBottom: 50, width: '90vw' }}
        />
      </Grid>
      <Grid
        className={classes.center}
        style={{
          height: '100%',
          maxHeight: 800,
          width: '100%',
          maxWidth: '100%'
        }}
        justifyContent="center"
        alignItems="center"
        item
        xs
      >
        <Image
          alt="under"
          sizes="100vw"
          style={{
            width: '100%',
            maxWidth: 600,
            height: 'auto',
            maxHeight: 600,
            borderRadius: darkModeActive ? 10000 : undefined
          }}
          src={darkModeActive ? constructionB : construction}
        />
      </Grid>
      <Grid className={classes.center} justifyContent="center" alignItems="center" item xs>
        <Divider
          textAlign="center"
          variant="middle"
          style={{ marginTop: 50, marginBottom: 50, width: '90vw' }}
        />
      </Grid>
    </Grid>
  )
}

export default Wallet
