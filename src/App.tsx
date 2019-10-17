import React, { Fragment } from 'react'
import { CssBaseline, Container, Grid } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Header } from './components/Header'
import { Tableau } from './components/Tableau'
import { Orbc } from './components/Orbc'
import { HashRouter, Switch, Route } from 'react-router-dom'

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

  return (
    <Fragment>
      <HashRouter>
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
              </Switch>
            </Container>
          </Grid>
        </Grid>
      </HashRouter>
    </Fragment>
  )
}
