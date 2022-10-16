export interface NavBarProps {
  handleDrawerOpen: () => void
  classesIconButton: any
}
export interface Item {
  src: string
  blur?: string
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
    src: '/image/mainPinte1.webp',
    altText: 'Slide 1',
    caption: '',
    header: '',
    key: '1',
  },
  {
    src: '/image/mainPinte2.webp',
    altText: 'Slide 2',
    caption: '',
    header: '',
    key: '2',
  },
  {
    src: '/image/mainPinte3.webp',
    altText: 'Slide 3',
    caption: '',
    header: '',
    key: '3',
  },
  {
    src: '/image/mainPinte4.webp',
    altText: 'Slide 4',
    caption: '',
    header: '',
    key: '4',
  },
  {
    src: '/image/mainPinte5.webp',
    altText: 'Slide 5',
    caption: '',
    header: '',
    key: '5',
  },
  {
    src: '/image/bouteille3.webp',
    altText: 'Slide 6',
    caption: '',
    header: '',
    key: '5',
  },
];

export const productItems = [
  {
    src: '/image/bouteille1.webp',
    altText: 'Slide 1',
    caption: '',
    header: '',
    key: '1',
  },
  {
    src: '/image/bouteille1.webp',
    altText: 'Slide 2',
    caption: '',
    header: '',
    key: '2',
  },
  {
    src: '/image/bouteille1.webp',
    altText: 'Slide 3',
    caption: '',
    header: '',
    key: '3',
  },
  {
    src: '/image/bouteille2.webp',
    altText: 'Slide 4',
    caption: '',
    header: '',
    key: '1',
  },
  {
    src: '/image/bouteille2.webp',
    altText: 'Slide 5',
    caption: '',
    header: '',
    key: '2',
  },
  {
    src: '/image/bouteille2.webp',
    altText: 'Slide 6',
    caption: '',
    header: '',
    key: '3',
  },
];
