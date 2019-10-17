import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import { Loading } from './Loading'

export function Tableau() {
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const result = await axios('/.netlify/functions/data')

      setName(result.data)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return <Typography component="p">{name}</Typography>
}
