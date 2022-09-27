import React from 'react'
import { Card, CardHeader, Skeleton, CardContent } from '@mui/material'

const SkeletonFallBack = () => (
  <Card>
    <CardHeader
      title={<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />}
      subheader={<Skeleton animation="wave" height={10} width="40%" />}
    />

    <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />

    <CardContent>
      <>
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} width="80%" />
      </>
    </CardContent>
  </Card>
)

export default React.memo(SkeletonFallBack)
