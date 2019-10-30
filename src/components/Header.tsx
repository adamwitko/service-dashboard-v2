import React, { useEffect, useState } from 'react'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import { NavLink, LinkProps } from 'react-router-dom'
import { useIdentityContext } from 'react-netlify-identity-widget'

const styles = {
  flexGrow: 1,
  a: {
    active: {},
  },
}

export function Header() {
  const [now, setNow] = useState(new Date())
  const { logoutUser } = useIdentityContext()

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return function cleanup() {
      clearInterval(intervalId)
    }
  })

  const RouterLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
    (props, ref) => (
      <NavLink innerRef={ref} activeClassName="active" {...props} />
    )
  )

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">S4RB</Typography>&nbsp;
        <Typography variant="subtitle1" style={styles}>
          SERVICE DASHBOARD
        </Typography>
        <div style={styles}>{now.toLocaleTimeString()}</div>
        <Button component={RouterLink} to="/orbc" size="large" color="inherit">
          WALMART ORBC
        </Button>
        <Button
          component={RouterLink}
          to="/tableau"
          size="large"
          color="inherit"
        >
          TABLEAU
        </Button>
        <Button size="large" color="inherit" onClick={logoutUser}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  )
}
