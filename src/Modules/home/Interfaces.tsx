import React from 'react'
import Image from '@/Utils/MidgardImage'
import { Item } from '@/Main/interfaces'
import bottle from '../../../public/image/logo/champBottle2.webp'
import logo from '../../../public/image/logo/LogoSansFond.webp'

export const homeItems = (classes: any, isTablette: boolean): Item[] => [
  {
    src: !isTablette ? '/image/table/brutTable1.webp' : '/image/vigne/raisinCoupe2.webp',
    blur: !isTablette ? '/image/table/brutTable1Blur.webp' : '/image/vigne/raisinCoupe2Blur.webp',
    altText: 'Slide 1',
    caption: '',
    header: '',
    key: '1',
    name: 'Notre Maison',
    page: '/lamaison',
    icon: <Image className={classes.champIcon} src={bottle} alt="Logo" width={40} height={45} />
  },
  {
    src: isTablette ? '/image/cave/cave4Mob.mp4' : '/image/cave/cave4.mp4',
    altText: 'Slide 2',
    caption: '',
    header: 'video',
    key: '2',
    name: 'Nos Champagnes',
    page: '/champagnes',
    icon: <Image className={classes.champIcon} src={bottle} alt="Logo" width={40} height={45} />
  },
  {
    src: !isTablette ? '/image/table/tabledouble1.webp' : '/image/table/brutTable1Mobile.webp',
    altText: 'Slide 3',
    caption: '',
    header: '',
    key: '3',
    name: 'Actualités',
    page: '/actualites',
    icon: <Image alt="Logo" className={classes.drawerLogo} width={40} height={45} src={logo} />,
    animated: true
  },
  {
    src: !isTablette ? '/image/vigne/vignefam10.webp' : '/image/produit/brut/brut5.webp',
    altText: 'Slide 4',
    caption: '',
    header: '',
    key: '4',
    name: 'Notre Savoir Faire',
    page: '/notresavoirfaire',
    icon: <Image alt="Logo" className={classes.drawerLogo} width={40} height={45} src={logo} />
  },
  {
    src: !isTablette ? '/image/produit/futBrutAndRose.webp' : '/image/table/produitTable4.webp',
    altText: 'Slide 5',
    caption: '',
    header: '',
    key: '5',
    name: 'Nos Champagnes',
    page: '/champagnes',
    icon: <Image alt="Logo" className={classes.drawerLogo} width={40} height={45} src={logo} />
  }
]
export default homeItems
