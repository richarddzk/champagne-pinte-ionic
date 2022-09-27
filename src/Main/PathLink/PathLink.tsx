/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useRouter } from 'next/router'
import { Link } from '@mui/material'
import { useQuery } from '@apollo/client'
import { GET_PRODUCT } from '@/Modules/product/interfaces'
import useI18n from '../../Utils/hooks/use-i18n'

const referential = {
  '/actu': { name: ' Actualité ', path: 'actu' },
  '/about': { name: ' Notre Maison ', path: 'about' },
  '/champagnes': { name: ' Nos Champagnes ', path: 'champagnes' },
  '/product/[id]': { name: ' Nos Champagnes ', path: 'champagnes' },
  '/panier': { name: ' Votre Panier ', path: 'Panier' },
  '/savoirFaire': { name: ' Savoir Faire ', path: 'savoirFaire' },
  '/newsletter': { name: ' Newsletter ', path: 'newsletter' }
}

const PathLink: React.FC = () => {
  const i18n = useI18n()
  const { activeLocale } = i18n
  const router = useRouter()
  const { query, pathname } = router
  const { data } = useQuery(GET_PRODUCT, {
    skip: !query.id,
    variables: { id: query.id },
    fetchPolicy: 'network-only'
  })
  const { product } = data ?? { product: null }
  return (
    <>
      <Link
        style={{ fontFamily: 'Fira Sans , serif' }}
        component="button"
        variant="body2"
        onClick={() => {
          router.push(`/${activeLocale}/`)
        }}
      >
        Accueil /
      </Link>
      <Link
        style={{
          fontFamily: 'Fira Sans , serif',
          cursor: pathname === '/product/[id]' ? 'cursor' : 'default'
        }}
        component="button"
        variant="body2"
        underline={pathname === '/product/[id]' ? undefined : 'none'}
        onClick={() => {
          // @ts-ignore
          router.push(`/${activeLocale}/${referential[`${pathname}`].path}`)
        }}
      >
        {
          // @ts-ignore
          referential[`${pathname}`] && referential[`${pathname}`].name
        }
      </Link>
      {product && product.title && (
        <Link
          style={{ fontFamily: 'Fira Sans , serif', cursor: 'default' }}
          component="button"
          underline="none"
          variant="body2"
        >
          / {product.title}
        </Link>
      )}
    </>
  )
}
export default React.memo(PathLink)
