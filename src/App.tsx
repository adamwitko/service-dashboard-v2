import React from 'react'
import { Main } from './components/Main'
import { IdentityContextProvider } from 'react-netlify-identity-widget'
import { GraphQLClient, ClientContext } from 'graphql-hooks'

const client = new GraphQLClient({
  url: '/.netlify/functions/graphql',
})

export function App() {
  const url =
    process.env.DEPLOY_PRIME_URL || 'https://service-dashboard-v2.netlify.com/'

  return (
    <IdentityContextProvider url={url}>
      <ClientContext.Provider value={client}>
        <Main />
      </ClientContext.Provider>
    </IdentityContextProvider>
  )
}
