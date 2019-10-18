import React from 'react'
import 'react-netlify-identity-widget/styles.css'

const IdentityModal = React.lazy(() => import('react-netlify-identity-widget'))

export function Login() {
  const [dialog, setDialog] = React.useState(false)

  return (
    <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
  )
}
