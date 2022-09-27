import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { CREDENTIALS_LOCAL_STORAGE_ITEM_CHAMPAGNE_PINTE } from '../src/Main/auth-provider/interfaces'
import getEnvBackend from '../src/Utils/hooks/getEnvBackend'

const { uri, prefix } = getEnvBackend()

const httpLink = createHttpLink({
  uri: `${prefix}://${uri}/graphql`,
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem('token');
  const token = localStorage.getItem(
    CREDENTIALS_LOCAL_STORAGE_ITEM_CHAMPAGNE_PINTE,
  )

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token || '',
    },
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
})
export { httpLink }

export default client
