import React from 'react'
import { CssBaseline, Container, Grid } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Header } from './Header'
import { Tableau } from './Tableau'
import { Orbc } from './Orbc'
import { Login } from './Login'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { useIdentityContext } from 'react-netlify-identity-widget'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  })
)
export function Main() {
  const classes = useStyles({})

  const { isLoggedIn } = useIdentityContext()

  return (
    <HashRouter>
      <CssBaseline />
      {!isLoggedIn ? (
        <Login />
      ) : (
        <Grid container spacing={3} className={classes.root}>
          <Grid item xs={12} lg={12}>
            <Header />
          </Grid>
          <Grid item>
            <Container>
              <Switch>
                <Route path="/orbc" component={Orbc}></Route>
                <Route path="/tableau" component={Tableau}></Route>
              </Switch>
            </Container>
          </Grid>
        </Grid>
      )}
    </HashRouter>
  )
}
