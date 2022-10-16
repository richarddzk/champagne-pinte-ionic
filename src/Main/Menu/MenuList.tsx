import React from 'react'
import { Grid } from '@mui/material'
import { v4 as uuid } from 'uuid'
import { useRouter } from 'next/router'
import Image from '@/Utils/MidgardImage'
import { useDarkMode } from 'next-dark-mode'
import useStyles from './style'
import { PageMap } from './interfaces'
import ButtonStyled from '../ButtonStyled'
import mainLogoW from '../../../public/image/logo/MainLogoChampWhite.webp'
import mainLogoB from '../../../public/image/logo/MainLogoChampBlack.webp'

export interface MenuListProps {}

const MenuList: React.FC<MenuListProps> = () => {
  const router = useRouter()

  const { darkModeActive } = useDarkMode()

  const { classes } = useStyles()

  return (
    <Grid
      className={classes.fullGridMenu}
      key={uuid()}
      container
      justifyContent="space-between"
      direction="row"
    >
      <Grid className={classes.fullLogoMenu} item>
        <Image
          priority
          onClick={() => {
            router.push('/accueil')
          }}
          className={classes.homeLogo}
          alt="mainLogoB"
          width={85.5}
          height={60.75}
          src={!darkModeActive ? mainLogoB : mainLogoW}
        />
      </Grid>
      {PageMap(classes).map(({ name, width, page }: any) => (
        <Grid key={name} className={classes.fullGridItemMenu} item>
          <ButtonStyled
            onClick={() => {
              router.push(`${page}`)
            }}
            title={name}
            width={width}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default MenuList
