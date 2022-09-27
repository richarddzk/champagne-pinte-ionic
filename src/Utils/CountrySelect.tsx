import React from 'react'
import Image from 'next/future/image'
import dynamic from 'next/dynamic'
import Box from '@mui/material/Box'

import Loading from '@/Utils/Loading'

import countries from 'i18n-iso-countries'
import enLocale from 'i18n-iso-countries/langs/en.json'
import frLocale from 'i18n-iso-countries/langs/fr.json'
import Autocomplete from '@mui/material/Autocomplete'
import useI18n from './hooks/use-i18n'

const TextField = dynamic(() => import('@mui/material/TextField'), {
  loading: () => <Loading />
})

interface CountrySelectProps {
  country: {
    label: string | null
    value: string | null
  }
  setCountry: (val: { label: string | null; value: string | null }) => void
  // eslint-disable-next-line react/require-default-props
  noTitle?: boolean
}

const CountrySelect: React.FC<CountrySelectProps> = ({ country, setCountry }) => {
  const i18n = useI18n()
  const { activeLocale } = i18n
  countries.registerLocale(activeLocale === 'fr' ? frLocale : enLocale)

  const countryObj = countries.getNames(activeLocale, { select: 'official' })
  const tmp: { label: string; value: string }[] = []
  let countryArr: { label: string; value: string }[] = Object.entries(countryObj).reduce(
    (acc: { label: string; value: string }[], [key, value]) => {
      if (!['GB', 'FR', 'CH'].includes(key)) {
        acc.push({
          label: value as string,
          value: key as string
        })
      } else {
        tmp.push({
          label: value,
          value: key
        })
      }
      return acc
    },
    []
  )

  countryArr = [...tmp, ...countryArr]
  return (
    <Autocomplete
      aria-label="CountrySelect"
      id="country-select-demo"
      fullWidth
      options={countryArr}
      autoHighlight
      disableClearable
      getOptionLabel={(option) => option.label ?? 'Aucun Pays selectionné'}
      value={country}
      onChange={(
        _event,
        newValue: {
          label: string | null
          value: string | null
        }
      ) => {
        setCountry({
          label: newValue.label,
          value: newValue.value
        })
        return true
      }}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <Image
            width="20"
            height="15"
            src={`https://flagcdn.com/w40/${option.value?.toLowerCase()}.png`}
            alt="countrySlect"
          />
          {option.label} ({option.value})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          aria-label="CountrySelect"
          label="Pays"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password' // disable autocomplete and autofill
          }}
        />
      )}
    />
  )
}

export default CountrySelect
