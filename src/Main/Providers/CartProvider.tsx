/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { useMutation } from '@apollo/client'
import React, { useContext, createContext, useState, useEffect, useCallback } from 'react'
import { useSnackbar } from 'notistack'
import { useAuth } from '../auth-provider/AuthProvider'
import {
  DefaultContext,
  ContextType,
  PANIER_LOCAL_STORAGE_ITEM_ACCOUNT,
  PANIER_LOCAL_STORAGE_ITEM
} from './interfaces'
import UPD_CUSTOMER from './request'
import { Product } from '../../Modules/ProductItem/interfaces'

export const CartContext = createContext<ContextType>(DefaultContext)

export const useCart = () => useContext(CartContext)

const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { UserInfos: data } = useAuth()
  const [Products, setProduct] = useState<{ [x: string]: Product } | undefined>(undefined)
  const [cartOpen, setCartOpen] = useState<boolean>(false)

  const { enqueueSnackbar } = useSnackbar()

  const [updCustomer, { error }] = useMutation(UPD_CUSTOMER)

  const customer = (data && data && data.customers && data.customers[0]) ?? null

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error.message, {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right'
        },
        variant: 'error'
      })
    }
  }, [error])

  const getTotalItems = () => {
    let localtt = 0
    Products &&
      Object.keys(Products).forEach((item) => {
        // @ts-ignore
        localtt += parseInt(Products[`${item}`].amount, 10)
      })
    return localtt
  }
  const majLocalItem = useCallback(
    (items: {
      [x: string]: Product;
    }) => {
      items &&
        Object.keys(items).length !== 0 &&
        localStorage.setItem(
          customer ? PANIER_LOCAL_STORAGE_ITEM_ACCOUNT : PANIER_LOCAL_STORAGE_ITEM,
          JSON.stringify(items)
        )
    },
    [customer]
  )
  useEffect(() => {
    Products && majLocalItem(Products)
  }, [Products])
  const getBackUnlogCart = () => {
    const localItems = localStorage.getItem(
      customer ? PANIER_LOCAL_STORAGE_ITEM_ACCOUNT : PANIER_LOCAL_STORAGE_ITEM
    )
    if (localItems) {
      setProduct(JSON.parse(localItems))
    }
  }
  const majCustomerPanier = (
    clean: boolean,
    localProducts: { [x: string]: Product } | undefined
  ) => {
    customer &&
      customer.id &&
      updCustomer({
        variables: {
          where: {
            id: customer && customer.id
          },
          data: {
            panier: clean ? '' : JSON.stringify({ ...localProducts })
          }
        }
      })

    // majLocalItem(localProducts)
  }
  useEffect(() => {
    if (customer) {
      const { panier } = customer

      if (panier) {
        localStorage.setItem(PANIER_LOCAL_STORAGE_ITEM_ACCOUNT, panier)

        setProduct(JSON.parse(panier))
      } else {
        const localItems = localStorage.getItem(PANIER_LOCAL_STORAGE_ITEM)
        const localItemsAccount = localStorage.getItem(PANIER_LOCAL_STORAGE_ITEM_ACCOUNT)

        if (!localItemsAccount) {
          if (localItems) {
            majCustomerPanier(false, JSON.parse(localItems))
          }
        } else {
          majCustomerPanier(false, JSON.parse(localItemsAccount))
        }
      }
    } else {
      getBackUnlogCart()
    }
  }, [customer])

  useEffect(() => {
    getBackUnlogCart()
  }, [])

  const addProduct = (newProduct: Product, qty: number | undefined) => {
    const localProducts = { ...Products }

    // @ts-ignore
    if (Products && Products[`${newProduct.id}`]) {
      // @ts-ignore
      localProducts[`${newProduct.id}`] = {
        ...newProduct,
        // @ts-ignore
        amount: Products[`${newProduct.id}`].amount + (qty || 1)
      }
    } else {
      localProducts[`${newProduct.id}`] = {
        ...newProduct,
        amount: qty ?? 1
      }
    }

    setProduct(localProducts)
    majCustomerPanier(false, localProducts)
  }
  const setQtyProduct = (newProduct: Product, qty: number) => {
    const localProducts = Products
    // @ts-ignore
    if (localProducts && localProducts[`${newProduct.id}`]) {
      // @ts-ignore
      localProducts[`${newProduct.id}`] = {
        ...newProduct,
        amount: qty
      }
    }

    setProduct(localProducts)
    majCustomerPanier(false, localProducts)
  }
  const removeProduct = (id: string) => {
    let localProducts = Products
    setProduct((lastProducts) => {
      // @ts-ignore
      if (lastProducts && lastProducts[`${id}`]) {
        // @ts-ignore
        delete lastProducts[`${id}`]

        // tslint:disable-next-line: no-unused-expression
        Object.keys(lastProducts).length === 0 &&
          localStorage.removeItem(
            customer ? PANIER_LOCAL_STORAGE_ITEM_ACCOUNT : PANIER_LOCAL_STORAGE_ITEM
          )
        localProducts = lastProducts
        return lastProducts
      }
    })
    majCustomerPanier(false, localProducts)
  }
  const delProduct = (id: string) => {
    let localProducts = Products
    setProduct((lastProducts) => {
      // @ts-ignore
      if (lastProducts[`${id}`]) {
        // @ts-ignore
        if (lastProducts[`${id}`].amount > 1) {
          // @ts-ignore
          lastProducts[`${id}`] = {
            // @ts-ignore
            ...lastProducts[`${id}`],
            // @ts-ignore
            amount: lastProducts[`${id}`].amount - 1
          }
        } else {
          // @ts-ignore
          delete lastProducts[`${id}`]
        }
        localProducts = lastProducts

        return lastProducts
      }
    })
    majCustomerPanier(false, localProducts)
  }
  const cleanProducts = () => {
    localStorage.removeItem(
      customer ? PANIER_LOCAL_STORAGE_ITEM_ACCOUNT : PANIER_LOCAL_STORAGE_ITEM
    )
    localStorage.removeItem(PANIER_LOCAL_STORAGE_ITEM)
    setProduct(undefined)
    majCustomerPanier(true, undefined)
  }
  const [newTT, setNewTT] = useState(0)

  const getTotalPrice = () => {
    let localTT = 0
    Products &&
      Object.keys(Products).forEach((item) => {
        // @ts-ignore
        const product = Products[`${item}`] as Product
        if (product.amount && product.price) {
          localTT += product.amount * parseInt(product.price as string, 10)
        }
      })
    setNewTT(localTT)
    return localTT
  }

  const tt = getTotalItems()
  const ctx = {
    Products,
    addProduct,
    removeProduct,
    cleanProducts,
    setQtyProduct,
    tt,
    getTotalPrice,
    newTT,
    delProduct,
    cartOpen,
    setCartOpen
  } as ContextType

  return <CartContext.Provider value={ctx}>{children}</CartContext.Provider>
}
export default CartProvider
