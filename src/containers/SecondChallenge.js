import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextField, FormControl, InputLabel, Select, MenuItem, Button, Table, TableRow, TableContainer, Paper, TableHead, TableCell, TableBody } from '@mui/material'

import { ordenarUsuarioAction, eliminarUsuarioAction } from '../store/actions/user'

const SecondChallenge = () => {
  const users = useSelector(state => state.user.users)
  const [ term, setTerm ] = React.useState('')

  const dispatch = useDispatch()
  const ordenarUsuario = list => dispatch(ordenarUsuarioAction(list))
  const eliminarUsuario = list => dispatch(eliminarUsuarioAction(list))

  const searchByFirstname = (value) => {
    setTerm(value)
  }

  const orderByAge = (value) => {
    let list = [ ...users ]
    const sorted = list.sort((a, b) => {
      if(a.age < b.age) return value === 'asc' ? -1 : 1

      if(a.age > b.age) return value === 'asc' ? 1 : -1

      return 0
    })
    ordenarUsuario(sorted)
  }

  const deleteUser = (id) => {
    let list = [ ...users ]
    const index = list.findIndex(x => x.id === id)
    list.splice(index, 1)
    eliminarUsuario(list)
  }

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <TextField
        id='outlined-required'
        label='Buscar por nombre'
        onChange={(e) => searchByFirstname(e.target.value)}
        sx={{ minWidth: 300 }} />
      <FormControl sx={{ mb: 4, minWidth: 300, ml: 2 }}>
        <InputLabel id='order-age'>Ordenar por edad:</InputLabel>
        <Select
          label='Ordenar por edad'
          labelId='order-age'
          onChange={(e) => orderByAge(e.target.value)}>
          <MenuItem value=''>Seleccione</MenuItem>
          <MenuItem value='asc'>De menor a mayor</MenuItem>
          <MenuItem value='desc'>De mayor a menor</MenuItem>
        </Select>
      </FormControl>
      <TableContainer component={Paper}>
        <Table aria-label='simple table' sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Avatar</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>Edad</TableCell>
              <TableCell>Acción</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .filter(x => x.firstName.toLowerCase().includes(term.toLowerCase()))
              .map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>
                    <img src={item.avatar} />
                  </TableCell>
                  <TableCell>{item.firstName}</TableCell>
                  <TableCell>{item.lastName}</TableCell>
                  <TableCell>{item.age}</TableCell>
                  <TableCell>
                    <Button color='error' onClick={() => deleteUser(item.id)} variant='outlined'>
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default SecondChallenge
