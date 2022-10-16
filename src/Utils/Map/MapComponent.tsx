import React from 'react'

import Grid from '@mui/material/Grid'
import getEnvBackend from '../hooks/getEnvBackend'

const Map: React.FC = () => {
  const { apiGoogleMap } = getEnvBackend()
  return (
    <Grid sx={{ width: '100%', height: '100%' }}>
      <iframe
        title="Google Maps"
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?q=lisse%20en%20champagne&key=${apiGoogleMap}`}
      />
    </Grid>
  )
}

export default Map
