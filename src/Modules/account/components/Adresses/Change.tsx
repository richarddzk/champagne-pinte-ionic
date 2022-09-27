import { Grid, Typography, Divider, Button } from '@mui/material'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'

import { v4 as uuid } from 'uuid'
import { ApolloQueryResult, useMutation } from '@apollo/client'
import { useSnackbar } from 'notistack'
import {
  user,
  userVariables,
  user_data_customers_addresses as UserAdresse
} from '@/Modules/account/__generated__/user'
import loading2 from 'react-useanimations/lib/loading2'
import { UserAddress } from '@/Modules/checkout/interface'
import { ADD_ADDRESS, UPD_ADDRESS } from './requests'
import useStyles from '../../style'
import AddressForm from '../../AddressForm'

const UseAnimations = dynamic(() => import('react-useanimations'), {
  loading: () => <>...</>
})

export interface ChangeProps {
  address: UserAdresse
  setUpdating: React.Dispatch<React.SetStateAction<boolean>>
  setSelected: React.Dispatch<React.SetStateAction<string[]>>
  customerId: string
  refetch: (variables?: Partial<userVariables>) => Promise<ApolloQueryResult<user>>
  adding: boolean
  setAdding: React.Dispatch<React.SetStateAction<boolean>>
  isFacturation: boolean
}

const Change: React.FC<ChangeProps> = (props) => {
  const { classes } = useStyles()

  const [updAddress, { loading, error }] = useMutation(UPD_ADDRESS)
  const [addAddress, { loading: loadingAdd, error: errorAdd }] = useMutation(ADD_ADDRESS)
  const { enqueueSnackbar } = useSnackbar()

  const {
    address: main,
    isFacturation,
    setUpdating,
    setSelected,
    customerId,
    refetch,
    adding,
    setAdding
  } = props
  const [address, setAddress] = useState<UserAddress>(main)

  const Updating = () => {
    updAddress({
      variables: {
        where: {
          id: main.id
        },
        data: {
          address_1: address.address_1,
          address_2: address.address_2,
          city: address.city,
          country: address.country,
          firstName: address.firstName,
          isDefault: address.isDefault,
          lastName: address.lastName,
          phone: address.phone,
          state: address.state,
          zip: address.zip,
          customer: {
            id: customerId
          }
        }
      }
    })
      .catch(() => {
        enqueueSnackbar(`Erreur dans le changement de votre adresse${error?.message}`, {
          variant: 'error'
        })
      })
      .then(() => {
        refetch()
        enqueueSnackbar('Changement adresse effectué', {
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center'
          },
          variant: 'success'
        })
        setUpdating(false)
        setSelected([])
      })
  }

  const Adding = () => {
    addAddress({
      variables: {
        data: {
          address_1: address.address_1,
          address_2: address.address_2,
          city: address.city,
          country: address.country,
          firstName: address.firstName,
          isDefault: address.isDefault,
          lastName: address.lastName,
          phone: address.phone,
          state: address.state,
          zip: address.zip,
          customer: {
            id: customerId
          }
        }
      }
    })
      .catch(() => {
        enqueueSnackbar(`Erreur avec l ajout de cette adresse${errorAdd?.message}`, {
          variant: 'error'
        })
      })
      .then(() => {
        refetch()
        enqueueSnackbar('Ajout de cette adresse effectué', {
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center'
          },
          variant: 'success'
        })
        setUpdating(false)
        setAdding(false)
        setSelected([])
      })
  }

  const handleSubmit = () => {
    if (adding) Adding()
    else Updating()
  }

  return (
    <Grid container style={{ padding: 50 }} direction="column">
      <Typography className={classes.typoHeader} color="primary">
        {adding ? 'Ajouter une adresse' : 'Modifier adresse'}
      </Typography>
      <Divider
        textAlign="center"
        variant="middle"
        style={{ marginTop: 10, marginBottom: 20, width: '95%' }}
      />

      <Grid
        style={{ textAlign: 'start', width: '100%' }}
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <AddressForm
          props={{
            updating: true,
            isDefault: address.isDefault ?? false,
            adresse: address,
            setAddress,
            isFacturation,
            account: true,
            adding
          }}
        />
      </Grid>
      <Grid
        style={{ paddingTop: 20, textAlign: 'start', width: '100%' }}
        justifyContent="flex-start"
        alignItems="flex-start"
        direction="row"
        container
        spacing={4}
      >
        <Grid item>
          <Button
            disabled={loading || loadingAdd}
            id="submit"
            type="submit"
            variant="outlined"
            onClick={handleSubmit}
          >
            {loading ? (
              <UseAnimations
                key={uuid()}
                strokeColor="#CCBF90"
                size={35}
                // wrapperStyle={{ marginTop: '5px' }}
                animation={loading2}
              />
            ) : (
              'Sauver les modifications'
            )}
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={() => {
              setUpdating(false)
              setAdding(false)
              setSelected([])
            }}
            variant="outlined"
          >
            Annuler
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Change
