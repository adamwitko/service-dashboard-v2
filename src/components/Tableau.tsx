import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Loading } from './Loading'
import { useQuery } from 'graphql-hooks'

const helloQuery = `query { hello }`

export function Tableau() {
  const { loading, error, data } = useQuery(helloQuery)

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <p>Oh noes</p>
  }

  return <Typography component="p">{data.hello}</Typography>
}
