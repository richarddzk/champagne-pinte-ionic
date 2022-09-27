import React, { useEffect } from 'react'
import Image from 'next/future/image'
import { Select, MenuItem, ListItemIcon } from '@mui/material'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Css } from 'tss-react'
import fr from '../../../public/img/logo/fr.webp'
import en from '../../../public/img/logo/en.webp'
import useI18n from '../../Utils/hooks/use-i18n'
import EN from '../../../public/locales/en/common.json'
import FR from '../../../public/locales/fr/common.json'

export interface SwitchLangProps {
  onClick: () => void
  css: Css
}

const SwitchLang: React.FC<SwitchLangProps> = ({ onClick, css }) => {
  const i18n = useI18n()

  const handleChange = (event: any) => {
    i18n.locale(event.target.value, event.target.value === 'fr' ? FR : EN)
    onClick()
  }
  const router = useRouter()
  const defaultLang = router.locale === 'default'

  useEffect(() => {
    if (defaultLang) i18n.locale('fr', FR)
  }, [defaultLang])

  useEffect(() => {
    if (!defaultLang) i18n.locale(router.locale, router.locale === 'fr' ? FR : EN)
  }, [router.locale !== i18n.activeLocale])

  const height = 15
  const width = 25
  return (
    <Select
      labelId="select-lang"
      id="select"
      value={defaultLang ? 'fr' : router.locale}
      onChange={handleChange}
      variant="outlined"
      className={css({
        marginLeft: 10,
        maxHeight: 30,
        maxWidth: 70
      })}
      inputProps={{
        classe: {
          input: css({
            padding: 0
          })
        }
      }}
    >
      <MenuItem value="fr">
        <Link href={`/fr${router.pathname}`} locale="fr">
          <ListItemIcon>
            <Image height={height} width={width} src={fr} alt="fr" />
          </ListItemIcon>
        </Link>
      </MenuItem>
      <MenuItem value="en">
        <Link href={`/en${router.pathname}`} locale="en">
          <ListItemIcon>
            <Image height={height} width={width} src={en} alt="en" />
          </ListItemIcon>
        </Link>
      </MenuItem>
    </Select>
  )
}

export default React.memo(SwitchLang)
