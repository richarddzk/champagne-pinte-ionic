const getEnvBackend = () => {
  // We are running in local mode
  let uri = process.env.LOCAL_API_URL ?? 'localhost:4488'
  let prefix = 'http'
  if (process.env.MIDGARD_ENV === 'PROD' && process.env.PROD_API_URL) {
    // We are running in production mode
    uri = process.env.PROD_API_URL
    prefix = 'https'
  } else if (process.env.MIDGARD_ENV === 'DEV' && process.env.DEV_API_URL) {
    // We are running in development mode
    uri = process.env.DEV_API_URL
    prefix = 'https'
  }
  const url = `${prefix}://${uri}/`
  return { uri, prefix, url }
}

export default getEnvBackend
