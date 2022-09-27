import { useStripe, useElements } from '@stripe/react-stripe-js'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useCart } from '@/Main/Providers/CartProvider'
import { ADD_ADDRESS, UPD_ADDRESS } from '@/Modules/account/components/Adresses/requests'
import getEnvBackend from '@/Utils/hooks/getEnvBackend'
import { useAuth } from '@/Main/auth-provider/AuthProvider'
import { useEffect, useState } from 'react'
import { CREATE_ORDER, CREATE_LINE_ITEM } from './Request'
import useI18n from '../../Utils/hooks/use-i18n'
import { UsePaymentProps, UserAddress } from './interface'

export const sameAdd = (address1: UserAddress, address2: UserAddress) => {
  if (
    address1.address_1 !== address2.address_1 ||
    address1.address_2 !== address2.address_2 ||
    address1.city !== address2.city ||
    address1.country !== address2.country ||
    address1.firstName !== address2.firstName ||
    address1.lastName !== address2.lastName ||
    address1.isDefault !== address2.isDefault ||
    address1.state !== address2.state ||
    address1.zip !== address2.zip
  ) {
    return false
  }

  return true
}

const usePaymentForm = (
  props: UsePaymentProps
): { handleSubmit: (event: any) => Promise<void> } => {
  const {
    setIsLoading,
    clientData,
    enqueueSnackbar,
    setIsSubmitting,
    shippingMethod,
    TTC,
    address: adresseBase,
    addressLivraison,
    addressFacturation
  } = props
  const { cleanProducts, Products } = useCart()
  const elements = useElements()
  const stripe = useStripe()
  const i18n = useI18n()
  const { activeLocale } = i18n
  const router = useRouter()
  const [createOrder] = useMutation(CREATE_ORDER)
  const [createLine] = useMutation(CREATE_LINE_ITEM)
  const [updAddress] = useMutation(UPD_ADDRESS)
  const [addAddress, { error: errrAddAddress }] = useMutation(ADD_ADDRESS)
  const { auth, UserInfos } = useAuth()
  const [idLivraison, setIdLivraison] = useState<string | null>(null)
  const [idFacturation, setIdFacturation] = useState<string | null>(null)

  const handleCreateOrder = async (idFacture?: string, idLive?: string) => {
    const address = { id: idLive }
    const facturation = { id: idFacture }

    const order = await createOrder({
      variables: {
        data: {
          address,
          facturation,
          shipping: { id: shippingMethod.id },
          comments: 'Created',
          customer: { id: clientData.customerId },
          totalPrice: TTC.toString()
        }
      }
    })
      .catch((errors) => {
        enqueueSnackbar(`Erreur lors de la creation de la commande ${errors}`, {
          variant: 'error'
        })
      })
      .then((res) => res)

    return order
  }
  useEffect(() => {
    if (idFacturation && idLivraison) {
      handleCreateOrder(idFacturation, idLivraison).then((order) => {
        const { id } = order?.data?.data
        Object.keys(Products).forEach(async (key: string) => {
          await createLine({
            variables: {
              data: {
                // @ts-ignore
                price: parseFloat(Products[key].price),
                // @ts-ignore
                quantity: Products[key].amount,
                // @ts-ignore
                product: { id: Products[key].id },
                order: { id }
              }
            }
          }).catch((errors) => {
            enqueueSnackbar(`Erreur lors de la creation de la commande ${errors}`, {
              variant: 'error'
            })
          })
        })
        cleanProducts()
        enqueueSnackbar('Votre commande est bien confirmé', {
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center'
          },
          variant: 'success'
        })
        router.push(`/${activeLocale}/account/${auth?.id}`)
      })
    }
  }, [idFacturation, idLivraison])

  const handleAddAddress = async (address: UserAddress, isDefault: boolean = false) =>
    addAddress({
      variables: {
        data: {
          address_1: address.address_1,
          address_2: address.address_2,
          city: address.city,
          country: address.country,
          firstName: address.firstName,
          isDefault,
          lastName: address.lastName,
          phone: address.phone,
          state: address.state,
          zip: address.zip,
          customer: {
            id: UserInfos?.customers[0]?.id
          }
        }
      }
    })
      .catch(() => {
        enqueueSnackbar(`Erreur avec l ajout de cette adresse${errrAddAddress?.message}`, {
          variant: 'error'
        })
      })
      .then((res) => res)

  const handleUpdAddress = async (address: UserAddress, isDefault: boolean = false) =>
    updAddress({
      variables: {
        where: {
          id: adresseBase.id
        },
        data: {
          address_1: address.address_1,
          address_2: address.address_2,
          city: address.city,
          country: address.country,
          firstName: address.firstName,
          isDefault,
          lastName: address.lastName,
          phone: address.phone,
          state: address.state,
          zip: address.zip
        }
      }
    })
      .catch((errors) => {
        enqueueSnackbar(
          `Erreur dans le changement de votre adresse de livraison ${errors[0].message}`,
          {
            variant: 'error'
          }
        )
      })
      .then((res) => res)

  const handleUpdAdresses = async () => {
    let livUpdated = false
    if (adresseBase.id && !sameAdd(adresseBase as unknown as UserAddress, addressLivraison)) {
      await handleUpdAddress(addressLivraison, addressLivraison.isDefault ?? false)
      livUpdated = true
    }
    let factUpdated = false
    if (adresseBase.id !== addressFacturation.id && !addressLivraison.isFacturation) {
      UserInfos?.customers[0]?.addresses.forEach(async (add) => {
        if (
          add.id === addressFacturation.id &&
          add.id !== adresseBase.id &&
          !sameAdd(add as unknown as UserAddress, addressFacturation)
        ) {
          await handleUpdAddress(addressFacturation)
          factUpdated = true
        } else if (
          add.id === addressFacturation.id &&
          sameAdd(add as unknown as UserAddress, addressFacturation)
        ) {
          factUpdated = true
        }
      })
    } else {
      factUpdated = true
    }

    if (!livUpdated && !addressLivraison.id) {
      await handleAddAddress(addressLivraison).then(async (livAdded) => {
        setIdLivraison(livAdded?.data?.data?.id)
        if (addressLivraison.isFacturation) {
          setIdFacturation(livAdded?.data?.data?.id)
        }

        enqueueSnackbar("Ajout de l'adresse de livraison effectué ", {
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center'
          },
          variant: 'success'
        })
      })
    } else if (addressLivraison.id) {
      setIdLivraison(addressLivraison.id)
      if (addressLivraison.isFacturation) {
        setIdFacturation(addressLivraison?.id)
      }
    }
    if (!factUpdated) {
      await handleAddAddress(addressFacturation).then(async (factAdded) => {
        setIdFacturation(factAdded?.data?.data?.id)

        enqueueSnackbar("Ajout de l'adresse de facturation effectué de Facturation", {
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center'
          },
          variant: 'success'
        })
      })
    } else {
      setIdFacturation(addressFacturation.id ? addressFacturation.id : idLivraison)
    }
  }

  const handleSubmit = async (event: any) => {
    const { url } = getEnvBackend()
    setIsLoading(true)
    setIsSubmitting(true)
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault()
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }
    await fetch(
      `${url}api/charge/intent/update/?${new URLSearchParams({
        id: clientData.id,
        amount: (TTC * 100).toString()
      } as unknown as URLSearchParams)}`,
      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    const { error } = await stripe.confirmPayment({
      // `Elements` instance that was used to create the Payment Element
      elements,
      redirect: 'if_required'
    })
    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      enqueueSnackbar(error.message, {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left'
        },
        variant: 'error'
      })
    } else {
      await handleUpdAdresses()
    }
    if (!shippingMethod.name) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      enqueueSnackbar('Pas de méthode de livraison selectionné', {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left'
        },
        variant: 'error'
      })
    }

    setIsLoading(false)
  }

  return {
    handleSubmit
  }
}

export default usePaymentForm
