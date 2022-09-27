import { StripeElementsOptions, Stripe } from '@stripe/stripe-js'
import { SnackbarMessage, OptionsObject, SnackbarKey } from 'notistack'
import { Dispatch, SetStateAction } from 'react'

export interface CheckoutFormProps {
  classes: any
  nbProduit: number
  total?: string | number
  isLoading: boolean
}

export interface ClientData {
  client_secret?: string
  id?: string
  customerId?: string
}

export interface CheckoutProps {
  shippingMethod: any
  setShippingMethod: Dispatch<SetStateAction<any>>
  clientData: ClientData
  total: string
  addresses: UserAddress[]

  options: StripeElementsOptions
  stripePromise: Promise<Stripe | null>
}

export interface RecapCheckoutProps {
  props: {
    isLoading?: boolean
    shippingMethod: {
      id: number
      price: number
      name?: string
    }
    total?: string | null
    addressLivraison: UserAddress
    addressFacturation: UserAddress
    setIsSubmitting: (submit: boolean) => void
  }
}

export interface UserAddress {
  isFacturation?: boolean | null
  id?: string
  address_1?: string | null
  address_2?: string | null
  city?: string | null
  country?: string | null
  createdAt?: any
  firstName?: string | null
  isDefault?: boolean | null
  lastName?: string | null
  phone?: string | null
  zip?: string | null
  state?: string | null
}

export interface UsePaymentProps {
  shippingMethod: any

  clientData: ClientData
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  enqueueSnackbar: (
    message: SnackbarMessage,
    options?: OptionsObject
  ) => SnackbarKey
  setIsSubmitting: Dispatch<SetStateAction<boolean>>

  TTC: number
  address: UserAddress
  addressLivraison: UserAddress
  addressFacturation: UserAddress
}
