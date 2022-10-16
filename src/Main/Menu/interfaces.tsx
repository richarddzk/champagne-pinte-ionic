import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Button, IconButton } from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import Image from '@/Utils/MidgardImage'
import { SnackbarKey } from 'notistack'
import archive from 'react-useanimations/lib/archive'
import bookmark from 'react-useanimations/lib/bookmark'
import facebook from 'react-useanimations/lib/facebook'
import instagram from 'react-useanimations/lib/instagram'
import twitter from 'react-useanimations/lib/twitter'
import logo from '../../../public/image/logo/LogoSansFond.webp'
import bottle from '../../../public/image/logo/champBottle2.webp'

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
    page: 'https://www.facebook.com/ChampagnePinte',
    icon: facebook,
    animated: true,
    loop: true
  },
  {
    name: 'instagram',
    page: 'https://www.instagram.com/champagne_pinte/',
    icon: instagram,
    animated: true,
    loop: false
  },
  {
    name: 'twitter',
    page: 'https://twitter.com/Champagne_Pinte',
    icon: twitter,
    animated: true,
    loop: true
  }
]
function PageMap(classes: any) {
  const { champIcon, drawerLogo } = classes
  return [
    {
      name: 'Nos champagnes',
      page: '/champagnes',
      icon: <Image priority className={champIcon} src={bottle} alt="Logo" width={40} height={45} />,
      animated: false,
      width: 180
    },
    {
      name: 'Notre maison',
      page: '/lamaison',
      icon: (
        <Image priority alt="drawerLogo" className={drawerLogo} width={40} height={45} src={logo} />
      ),
      animated: false,
      width: 180
    },
    // { name: 'VISITES', page: '/visites', icon: EmailIcon, animated: false },
    {
      name: 'Actualités',
      page: '/actualites',
      icon: archive,
      animated: true,
      width: 180
    },
    {
      name: 'Notre savoir faire',
      page: '/notresavoirfaire',
      icon: bookmark,
      animated: true,
      width: 180
    },
    {
      name: 'Newsletter',
      page: '/newsletter',
      icon: (
        <IconButton size="small" color="primary" aria-label="icon menu">
          <EmailOutlinedIcon />
        </IconButton>
      ),
      animated: false,
      width: 180
    }
  ]
}
export { PageMap, MediaMap }
export default actionSnack
