import createHmac from 'create-hmac'

/** Salt or number of rounds to generate a salt */
export type Salt = number
/**
 * Parses a salt environment variable value.
 * If a number string value is given tries to parse it as a number of rounds to generate a salt
 * @param value salt environment variable value
 * @returns salt or number of rounds to generate a salt
 */
export const parseSalt = (value: string | undefined) => {
  if (value === undefined) {
    return 'DEFAULT_ENCRYPTED_SALT'
  }

  return value
}
const ENCRYPT_SALT = parseSalt(process.env.ENCRYPT_SALT)

/**
 * @param password the password to be encrypted
 * @return encrypted password
 */
const Hash = (password: string) => {
  const hash = createHmac('sha512', ENCRYPT_SALT)
  hash.update(password)
  return hash.digest('hex')
}

/**
 *
 * @param password the password to be encrypted.
 * @param encrypted the encrypted password to be compared against.
 * @returns whether the password match the encrypted password
 */
const Compare = (password: string, encrypted: string): boolean => {
  const hash = createHmac('sha512', ENCRYPT_SALT)
  hash.update(password)
  const newHash = hash.digest('hex')
  return newHash === encrypted
}

const Encrypt = {
  isValid: Compare,
  hash: Hash
}

export default Encrypt
