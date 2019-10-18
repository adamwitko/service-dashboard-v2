import React, { Fragment } from 'react'
import { CssBaseline, Container, Grid } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Header } from './components/Header'
import { Tableau } from './components/Tableau'
import { Orbc } from './components/Orbc'
import { Login } from './components/Login'
import { HashRouter, Switch, Route } from 'react-router-dom'
import {
  useIdentityContext,
  IdentityContextProvider,
} from 'react-netlify-identity-widget'

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
export function App() {
  const classes = useStyles({})

  const url =
    process.env.DEPLOY_PRIME_URL || 'https://service-dashboard-v2.netlify.com/'
  const { isLoggedIn } = useIdentityContext()

  return (
    <Fragment>
      <HashRouter>
        <IdentityContextProvider url={url}>
          <CssBaseline />
          <Grid container spacing={3} className={classes.root}>
            <Grid item xs={12} lg={12}>
              <Header />
            </Grid>
            <Grid item justify="space-between">
              <Container>
                <Switch>
                  <Route path="/orbc" component={Orbc}></Route>
                  <Route path="/tableau" component={Tableau}></Route>
                  {!isLoggedIn && (
                    <Route path="/login" component={Login}></Route>
                  )}
                </Switch>
              </Container>
            </Grid>
          </Grid>
        </IdentityContextProvider>
      </HashRouter>
    </Fragment>
  )
}
