import createCache from '@emotion/cache'

const createMuiCache = () => createCache({
  key: 'mui',
  prepend: true,
})
const createTssCache = () => createCache({
  key: 'tss',
})

export { createMuiCache, createTssCache }
