export interface NavBarProps {
  handleDrawerOpen: () => void
  classesIconButton: any
}
export interface Item {
  src: string
  altText?: string
  caption?: string
  header?: string
  key?: string
  name: string
  page?: string
  icon: JSX.Element
  animated?: boolean
}

export const mainItems = [
  {
    src: '/img/mainPinte1.webp',
    altText: 'Slide 1',
    caption: '',
    header: '',
    key: '1',
  },
  {
    src: '/img/mainPinte2.webp',
    altText: 'Slide 2',
    caption: '',
    header: '',
    key: '2',
  },
  {
    src: '/img/mainPinte3.webp',
    altText: 'Slide 3',
    caption: '',
    header: '',
    key: '3',
  },
  {
    src: '/img/mainPinte4.webp',
    altText: 'Slide 4',
    caption: '',
    header: '',
    key: '4',
  },
  {
    src: '/img/mainPinte5.webp',
    altText: 'Slide 5',
    caption: '',
    header: '',
    key: '5',
  },
  {
    src: '/img/bouteille3.webp',
    altText: 'Slide 6',
    caption: '',
    header: '',
    key: '5',
  },
];

export const productItems = [
  {
    src: '/img/bouteille1.webp',
    altText: 'Slide 1',
    caption: '',
    header: '',
    key: '1',
  },
  {
    src: '/img/bouteille1.webp',
    altText: 'Slide 2',
    caption: '',
    header: '',
    key: '2',
  },
  {
    src: '/img/bouteille1.webp',
    altText: 'Slide 3',
    caption: '',
    header: '',
    key: '3',
  },
  {
    src: '/img/bouteille2.webp',
    altText: 'Slide 4',
    caption: '',
    header: '',
    key: '1',
  },
  {
    src: '/img/bouteille2.webp',
    altText: 'Slide 5',
    caption: '',
    header: '',
    key: '2',
  },
  {
    src: '/img/bouteille2.webp',
    altText: 'Slide 6',
    caption: '',
    header: '',
    key: '3',
  },
];
