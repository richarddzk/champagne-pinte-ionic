/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
// Import the languages you want to use
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import BootstrapInput from '@/Utils/BootstapInput'
import { Typography, FormControl, InputLabel, NativeSelect, Divider } from '@mui/material'
import { v4 as uuid } from 'uuid'
import CountrySelect from '../../Utils/CountrySelect'
import { UserAddress } from '../checkout/interface'
import useStyles from './style'

export interface AddressFormProps {
  props: {
    addresses?: UserAddress[]
    updating?: boolean
    adresse: UserAddress
    setAddress: (newAdresse: UserAddress) => void
    isFacturation?: boolean
    isSubmitting?: boolean
    sameFacturation?: boolean
    setIsSubmitting?: (submit: boolean) => void
    setSameFacturation?: (same: boolean) => void
    isDefault?: boolean
    setIsDefault?: (isDefault: boolean) => void
    account?: boolean
    adding?: boolean
  }
}

const AddressForm: React.FC<AddressFormProps> = ({ props }) => {
  const {
    adresse = {
      address_1: '',
      address_2: '',
      city: '',
      country: '',
      firstName: '',
      isDefault: false,
      lastName: '',
      phone: '',
      state: '',
      zip: ''
    },
    setAddress,
    isSubmitting,
    setSameFacturation,
    isFacturation = false,
    sameFacturation,
    addresses,
    account
  } = props
  const { classes, theme } = useStyles()
  const handleChange = (
    event: { target: { value: string } },
    facturation: boolean | undefined = false
  ) => {
    addresses &&
      addresses.forEach((x, idx: number) => {
        if (parseInt(event.target.value, 10) === idx && !facturation) {
          setAddress(x)
        }
      })
  }
  return (
    <Grid
      style={{ textAlign: 'start', width: '100%' }}
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid
        container
        style={{ paddingTop: 10 }}
        direction="row"
        justifyContent="space-between"
        alignItems="space-between"
      >
        <Grid item>
          <Typography className={classes.typoHeader} color="primary">
            {
              // eslint-disable-next-line no-nested-ternary
              !account ? `Adresse de ${isFacturation ? 'Facturation' : 'Livraison'}` : ' '
            }
          </Typography>
        </Grid>
        <Grid style={{ minWidth: 130 }} item>
          {!account && adresse.firstName !== '' && (
            <FormControl variant="standard">
              <InputLabel htmlFor="Choisissez une adresse">Choisissez une adresse</InputLabel>
              <NativeSelect
                id="select-adresse"
                color="primary"
                value={adresse}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                {addresses?.map((add, index: number) => (
                  <option key={uuid()} value={index}>
                    {add.address_1}-{add.city}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
          )}
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Prénom"
            fullWidth
            error={isSubmitting && !adresse.firstName}
            autoComplete="given-name"
            variant="standard"
            value={adresse.firstName}
            onChange={(res) => {
              setAddress({
                ...adresse,
                firstName: res.target.value
              })
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Nom"
            fullWidth
            error={isSubmitting && !adresse.lastName}
            autoComplete="family-name"
            variant="standard"
            value={adresse.lastName}
            onChange={(res) => {
              setAddress({
                ...adresse,
                lastName: res.target.value
              })
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Rue et n°"
            fullWidth
            error={isSubmitting && !adresse.address_1}
            autoComplete="shipping address-line1"
            variant="standard"
            value={adresse.address_1}
            onChange={(res) => {
              setAddress({
                ...adresse,
                address_1: res.target.value
              })
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Complément"
            error={isSubmitting && !adresse.address_2}
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            value={adresse.address_2}
            onChange={(res) => {
              setAddress({
                ...adresse,
                address_2: res.target.value
              })
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Localité"
            error={isSubmitting && !adresse.city}
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={adresse.city}
            onChange={(res) => {
              setAddress({
                ...adresse,
                city: res.target.value
              })
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="state"
            error={isSubmitting && !adresse.state}
            name="state"
            autoComplete="Departement"
            label="Département"
            fullWidth
            variant="standard"
            value={adresse.state}
            onChange={(res) => {
              setAddress({
                ...adresse,
                state: res.target.value
              })
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Code Postal"
            error={isSubmitting && !adresse.zip}
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={adresse.zip}
            onChange={(res) => {
              setAddress({
                ...adresse,
                zip: res.target.value
              })
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CountrySelect
            country={{ label: adresse.country ?? null, value: null }}
            setCountry={(value) => {
              setAddress({
                ...adresse,
                country: value.label
              })
            }}
          />
        </Grid>
        {!isFacturation && (
          <Grid container justifyContent="space-between" item xs={12}>
            <Grid item>
              <TextField
                required={!account}
                id="phone"
                error={isSubmitting && !adresse.phone}
                name="phone"
                label="Numéro de téléphone"
                autoComplete="phone"
                variant="standard"
                value={adresse.phone}
                onChange={(res) => {
                  setAddress({
                    ...adresse,
                    phone: res.target.value
                  })
                }}
              />
            </Grid>
            {setSameFacturation && (
              <Grid item>
                <FormControlLabel
                  sx={{ color: theme.palette.mode === 'light' ? 'black' : 'white' }}
                  control={
                    <Checkbox
                      color="primary"
                      name="isFacturation"
                      checked={sameFacturation}
                      onChange={(res) => {
                        setSameFacturation(res.target.checked)
                      }}
                    />
                  }
                  label="Utiliser la même adresse pour la facturation"
                />
              </Grid>
            )}
            <Grid item>
              <FormControlLabel
                sx={{ color: theme.palette.mode === 'light' ? 'black' : 'white' }}
                control={
                  <Checkbox
                    color="primary"
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                    name="makeAdressDefault"
                    checked={adresse.isDefault ?? true}
                    onChange={(res) => {
                      setAddress({
                        ...adresse,
                        isDefault: res.target.checked ?? true
                      })
                    }}
                  />
                }
                label="Utiliser cette adresse par défaut"
              />
            </Grid>
            <Grid
              className={classes.center}
              justifyContent="center"
              alignItems="center"
              item
              xs={12}
            >
              <Divider
                textAlign="center"
                variant="middle"
                style={{ marginTop: 50, marginBottom: 50, width: '95%' }}
              />
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  )
}
export default React.memo(AddressForm)
