import React from 'react'
import { Main } from './components/Main'
import { IdentityContextProvider } from 'react-netlify-identity-widget'

export function App() {
  const url =
    process.env.DEPLOY_PRIME_URL || 'https://service-dashboard-v2.netlify.com/'

  return (
    <IdentityContextProvider url={url}>
      <Main />
    </IdentityContextProvider>
  )
}
