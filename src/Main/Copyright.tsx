/* eslint-disable jsx-a11y/anchor-is-valid */
import Typography from '@mui/material/Typography'
import React from 'react'
import { useRouter } from 'next/router'
import { Link } from '@mui/material'

function Copyright(props: any) {
  const router = useRouter()

  return (
    <Typography variant="body2" style={{ color: '#CCBF90' }} align="center" {...props}>
      {'Copyright © '}
      <Link
        component="button"
        variant="body2"
        onClick={() => {
          router.push('/accueil')
        }}
      >
        Champagne Pinte
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
}

export default Copyright
