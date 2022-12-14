/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useRouter } from 'next/router'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import { useQuery } from '@apollo/client'
import { GET_PRODUCT } from '@/Modules/product/interfaces'
import HomeIcon from '@mui/icons-material/Home'
import { GlobalStyles } from 'tss-react'

const referential = {
  '/actualites': { name: 'Actualités ', path: 'actualites' },
  '/lamaison': { name: 'Notre maison ', path: 'about' },
  '/champagnes': { name: 'Nos champagnes', path: 'champagnes' },
  '/produit/[id]': { name: 'Nos champagnes ', path: 'champagnes' },
  '/panier': { name: 'Votre panier ', path: 'Panier' },
  '/notresavoirfaire': { name: 'Notre savoir faire ', path: 'notresavoirfaire' },
  '/newsletter': { name: 'Newsletter ', path: 'newsletter' },
  '/charte': { name: 'Charte données personnelles & cookies ', path: 'charte' },
  '/conditions': { name: 'Conditions générales d’utilisation ', path: 'conditions' },
  '/confirmEmail': { name: 'Email de confirmation ', path: 'confirmEmail' },
  '/changePassword': { name: 'Changer votre mot de passe ', path: 'changePassword' },
  '/nousContacter': { name: 'Nous contacter ', path: 'nousContacter' }
}

const PathLink: React.FC = () => {
  const router = useRouter()
  const { query, pathname } = router
  const { data } = useQuery(GET_PRODUCT, {
    skip: !query.id,
    variables: { id: query.id },
    fetchPolicy: 'network-only'
  })
  const { product } = data ?? { product: null }

  // @ts-ignore
  const path = referential[`${pathname}`] && referential[`${pathname}`].name
  return (
    <Grid sx={{ padding: 1, width: '100%' }}>
      <GlobalStyles
        styles={{
          '.MuiBreadcrumbs-ol': {
            placeContent: 'center'
          }
        }}
      />
      <Breadcrumbs separator="-">
        <Link
          sx={{ display: 'flex', alignItems: 'center', fontFamily: 'Fira Sans , serif' }}
          component="button"
          variant="body2"
          onClick={() => {
            router.push('/accueil')
          }}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Accueil
        </Link>
        <Link
          style={{
            fontFamily: 'Fira Sans , serif',
            cursor: pathname === '/produit/[id]' ? 'cursor' : 'default'
          }}
          component="button"
          variant="body2"
          underline={pathname === '/produit/[id]' ? undefined : 'none'}
          onClick={() => {
            // @ts-ignore
            router.push(`  /${referential[`${pathname}`].path}`)
          }}
        >
          {` ${path}`}
        </Link>
        {product && product.title && (
          <Link
            style={{ fontFamily: 'Fira Sans , serif', cursor: 'default' }}
            component="button"
            underline="none"
            variant="body2"
          >
            {product.title}
          </Link>
        )}
      </Breadcrumbs>
    </Grid>
  )
}
export default React.memo(PathLink)
