import { Product } from '../../Modules/ProductItem/interfaces'

export const DefaultContext = {} as ContextType

export interface ContextType {
  Products: { [x: string]: Product }
  addProduct: (newProduct: Product, qty: number | undefined) => void
  removeProduct: (id: any) => void
  cleanProducts: () => void
  delProduct: (id: any) => void
  tt: number
  setQtyProduct: (newProduct: Product, qty: number) => void
  newTT: number
  getTotalPrice: () => number
  cartOpen: boolean
  setCartOpen: (open: boolean) => void
}

export const PANIER_LOCAL_STORAGE_ITEM = 'Panier_Champagne_Pinte'
export const PANIER_LOCAL_STORAGE_ITEM_ACCOUNT =
  'Panier_Champagne_Pinte_Account'
