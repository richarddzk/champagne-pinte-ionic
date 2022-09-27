import React from 'react'
import Image from 'next/future/image'
import { Item } from '@/Main/interfaces'
import bottle from '../../../public/img/logo/champBottle2.webp'
import logo from '../../../public/img/logo/LogoSansFond.webp'

export const homeItems = (classes: any): Item[] => [
  {
    src: '/img/table/brutTable1.webp',
    altText: 'Slide 1',
    caption: '',
    header: '',
    key: '1',
    name: 'Notre Maison',
    page: '/about',
    icon: <Image className={classes.champIcon} src={bottle} alt="Logo" width={40} height={45} />
  },
  {
    src: '/img/cave/cave4.mp4',
    altText: 'Slide 2',
    caption: '',
    header: 'video',
    key: '2',
    name: 'Nos Champagnes',
    page: '/champagnes',
    icon: <Image className={classes.champIcon} src={bottle} alt="Logo" width={40} height={45} />
  },
  {
    src: '/img/table/tabledouble1.webp',
    altText: 'Slide 3',
    caption: '',
    header: '',
    key: '3',
    name: 'Actualités',
    page: '/actu',
    icon: <Image alt="Logo" className={classes.drawerLogo} width={40} height={45} src={logo} />,
    animated: true
  },
  {
    src: '/img/vigne/vignefam10.webp',
    altText: 'Slide 4',
    caption: '',
    header: '',
    key: '4',
    name: 'Notre Savoir Faire',
    page: '/savoirFaire',
    icon: <Image alt="Logo" className={classes.drawerLogo} width={40} height={45} src={logo} />
  },
  {
    src: '/img/produit/futBrutAndRose.webp',
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
