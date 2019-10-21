import React from 'react'

const IdentityModal = React.lazy(() => import('react-netlify-identity-widget'))

import 'react-netlify-identity-widget/styles.css'

export function Login() {
  const [dialog, setDialog] = React.useState(true)

  return (
    <React.Suspense fallback="...">
      <IdentityModal
        showDialog={dialog}
        //onCloseDialog={() => setDialog(false)}
      />
    </React.Suspense>
  )
}
