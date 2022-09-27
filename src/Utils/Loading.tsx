import React from 'react'
import Grid from '@mui/material/Grid'
import dynamic from 'next/dynamic'
import { v4 as uuid } from 'uuid'
import loading from 'react-useanimations/lib/loading'

const UseAnimations = dynamic(() => import('react-useanimations'), {
  loading: () => <>...</>
})

export interface LoadingProps {
  color?: string
  size?: number
}

const Loading: React.FC<LoadingProps> = ({ color = '#CCBF90', size = 40 }) => (
  <Grid
    justifyContent="center"
    alignItems="center"
    style={{ height: '80vh', width: '100vw' }}
    container
  >
    <UseAnimations
      key={uuid()}
      strokeColor={color}
      size={size}
      // wrapperStyle={{ marginTop: '5px' }}
      animation={loading}
    />
  </Grid>
)
export default Loading
