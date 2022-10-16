import React from 'react'
import Image from '@/Utils/MidgardImage'
import { Select, MenuItem, ListItemIcon } from '@mui/material'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Css } from 'tss-react'
import fr from '../../../public/image/logo/fr.webp'
import en from '../../../public/image/logo/en.webp'

export interface SwitchLangProps {
  onClick: () => void
  css: Css
}

const SwitchLang: React.FC<SwitchLangProps> = ({ onClick, css }) => {
  const handleChange = () => {
    onClick()
  }
  const router = useRouter()
  const defaultLang = router.locale === 'default'

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
        <Link href={`${router.pathname}`} locale="fr">
          <ListItemIcon>
            <Image height={height} width={width} src={fr} alt="fr" />
          </ListItemIcon>
        </Link>
      </MenuItem>
      <MenuItem value="en">
        <Link href={`/${router.pathname}`} locale="en">
          <ListItemIcon>
            <Image height={height} width={width} src={en} alt="en" />
          </ListItemIcon>
        </Link>
      </MenuItem>
    </Select>
  )
}

export default React.memo(SwitchLang)
