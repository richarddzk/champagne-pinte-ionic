/* eslint-disable @typescript-eslint/naming-convention */
import React, { useEffect } from 'react'
import Image from '@/Utils/MidgardImage'
import { Grid, Paper, Typography } from '@mui/material'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Url } from 'url'
import { StaticImageData } from 'next/future/image'
import { ButtonStyled } from '../../Main'
import useStyles from './style'
import { GET_PRODUCTS_products } from '../champagnes/__generated__/GET_PRODUCTS'

export interface ArticleComponentProps {
  image: string | StaticImageData
  size?: { width: number; height: number }
  noProduct?: boolean
  push?: (url: Url, as?: Url, options?: any) => Promise<boolean>
  darkModeActive: boolean
  position?: string
  title?: string
  text?: string | string[]
  route?: string
  buttonTitle?: string
  logo?: React.ReactNode
  blurDataUrl?: string
}
export interface HomeProductProps {
  loading: boolean
  products?: GET_PRODUCTS_products[]
}

const ArticleImage: React.FC<ArticleComponentProps> = React.memo(({ image }) =>
  image ? (
    <Paper
      style={{
        width: '100%',
        height: '90vh',
        position: 'relative',
        maxHeight: '100%',
        overflow: ' auto'
      }}
      elevation={5}
    >
      <Image style={{ objectFit: 'cover' }} fill src={image} alt="Logo" />
    </Paper>
  ) : (
    <Paper
      style={{
        width: '100%',
        height: '90vh',
        position: 'relative',
        maxHeight: '100%',
        overflow: ' auto'
      }}
      elevation={5}
    />
  )
)

const ArticleComponent: React.FC<ArticleComponentProps> = React.memo(
  ({ image, noProduct, push, position, title, text, route, buttonTitle, logo }) => {
    const { classes } = useStyles()
    const { ref, inView } = useInView({
      /* Optional options */
      threshold: 0
    })
    const controls = useAnimation()
    useEffect(() => {
      if (inView) {
        controls.start('visible')
      }
    }, [controls, inView])

    if (noProduct) {
      return <Typography className={classes.typo}>Aucune bouteille trouvé</Typography>
    }

    return (
      <>
        <Paper className={classes.container}>
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{
              duration: 1
              // type: 'tween',
            }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
          >
            <Grid id="container" className={classes.container} item>
              <ArticleImage image={image} darkModeActive={false} />

              <div id="middle">
                <Grid direction="column" className={classes.gridButton} container spacing={4}>
                  <Grid item>
                    <ButtonStyled
                      width={250}
                      height={50}
                      fullybackground={1}
                      title={buttonTitle ?? ''}
                      onClick={() => {
                        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                        push && push(` /${route}` as unknown as Url)
                      }}
                    />
                  </Grid>
                </Grid>
              </div>
              <Paper
                className={position === 'left' ? classes.paperTextLeft : classes.paperTextRight}
                elevation={5}
              >
                <Grid item xs={12}>
                  <Typography className={classes.typoText} variant="h4">
                    {title}
                  </Typography>
                </Grid>

                {logo && logo}
                <Grid item style={{ paddingTop: 60 }} xs={12}>
                  {typeof text === 'string' ? (
                    <Typography align="justify" className={classes.typoText} variant="h6">
                      {text}
                    </Typography>
                  ) : (
                    text &&
                    text.map((t) => (
                      <Typography key={t} align="justify" className={classes.typoText} variant="h6">
                        {t}
                      </Typography>
                    ))
                  )}
                </Grid>
              </Paper>
            </Grid>
          </motion.div>
        </Paper>
      </>
    )
  }
)

export default ArticleComponent
