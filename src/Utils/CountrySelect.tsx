import React from 'react'
import Image from '@/Utils/MidgardImage'
import dynamic from 'next/dynamic'
import Box from '@mui/material/Box'

import Loading from '@/Utils/Loading'

import countries from 'i18n-iso-countries'
import frLocale from 'i18n-iso-countries/langs/fr.json'
import Autocomplete from '@mui/material/Autocomplete'

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
  className?: any
  size?: 'small' | 'medium'
  name?: any
  error?: any
  helperText?: any
}

const CountrySelect: React.FC<CountrySelectProps> = (props) => {
  const { country, setCountry } = props
  countries.registerLocale(frLocale)

  const countryObj = countries.getNames('fr', { select: 'official' })
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
      {...props}
      aria-label="CountrySelect"
      id="country-select-demo"
      fullWidth
      options={countryArr}
      autoHighlight
      disablePortal
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
      renderOption={(childProps, option) => (
        <Box component="li" sx={{ '& > image': { mr: 2, flexShrink: 0 } }} {...childProps}>
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
          {...props}
          {...params}
          aria-label="CountrySelect"
          label="Pays"
          inputProps={{
            ...params.inputProps
          }}
        />
      )}
    />
  )
}

export default CountrySelect
