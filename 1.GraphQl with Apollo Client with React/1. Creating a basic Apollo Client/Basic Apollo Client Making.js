import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import gql from 'graphql-tag'

/**
 * Create a new apollo client and export as default
 */


const link = new HttpLink({uri: 'https://rickandmortyapi.com/graphql'})
console.log('Karan')
console.log(link)

const cache = new InMemoryCache()
console.log(cache)

const client = new ApolloClient({
    link,
    cache
})

console.log(client)

// Making a query here

const query = gql`
{
    characters{
    results {
      name,
    }
  }
}
`

client.query({query}).then(result => console.log(result))


export default client;