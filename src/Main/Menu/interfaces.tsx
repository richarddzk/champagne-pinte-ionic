import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Button, IconButton } from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import Image from 'next/future/image'
import { SnackbarKey } from 'notistack'
import archive from 'react-useanimations/lib/archive'
import bookmark from 'react-useanimations/lib/bookmark'
import facebook from 'react-useanimations/lib/facebook'
import instagram from 'react-useanimations/lib/instagram'
import twitter from 'react-useanimations/lib/twitter'
import logo from '../../../public/img/logo/LogoSansFond.webp'
import bottle from '../../../public/img/logo/champBottle2.webp'

const actionSnack = (key: SnackbarKey, closeSnackbar: any) => (
  <Button
    onClick={() => {
      closeSnackbar(key)
    }}
  >
    <CloseIcon />
  </Button>
)

const MediaMap = [
  {
    name: 'Facebook',
    page: '/champagnes',
    icon: facebook,
    animated: true,
    loop: true
  },
  {
    name: 'instagram',
    page: '/champagnes',
    icon: instagram,
    animated: true,
    loop: false
  },
  {
    name: 'twitter',
    page: '/champagnes',
    icon: twitter,
    animated: true,
    loop: true
  }
]
function PageMap(classes: any) {
  const { champIcon, drawerLogo } = classes
  return [
    {
      name: 'NOS CHAMPAGNES',
      page: '/champagnes',
      icon: <Image priority className={champIcon} src={bottle} alt="Logo" width={40} height={45} />,
      animated: false
    },
    {
      name: 'NOTRE MAISON',
      page: '/about',
      icon: (
        <Image priority alt="drawerLogo" className={drawerLogo} width={40} height={45} src={logo} />
      ),
      animated: false
    },
    // { name: 'VISITES', page: '/visites', icon: EmailIcon, animated: false },
    {
      name: 'ACTUALITES',
      page: '/actu',
      icon: archive,
      animated: true
    },
    {
      name: 'SAVOIR FAIRE',
      page: '/savoirFaire',
      icon: bookmark,
      animated: true
    },
    {
      name: 'NEWSLETTER',
      page: '/newsletter',
      icon: (
        <IconButton size="small" color="primary" aria-label="icon menu">
          <EmailOutlinedIcon />
        </IconButton>
      ),
      animated: false
    }
  ]
}
export { PageMap, MediaMap }
export default actionSnack
