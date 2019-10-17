import React, { useState } from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

export function Orbc() {
  const [age, setAge] = useState(10)

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: number }>
  ) => {
    setAge(event.target.value)
  }

  const menuItems = Array.apply(0, Array(10)).map((x: number, i: number) => (
    <MenuItem value={i + 1}>{i + 1}</MenuItem>
  ))

  return (
    <FormControl>
      <InputLabel htmlFor="age-simple">Age</InputLabel>
      <Select
        value={age}
        onChange={handleChange}
        inputProps={{
          name: 'age',
          id: 'age-simple',
        }}
      >
        > {menuItems}
      </Select>
    </FormControl>
  )
}
