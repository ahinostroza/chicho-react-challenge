import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import React from 'react'

const App = () => {
  return (
    <>
      <Header />
      <Container maxWidth='xl' sx={{ mb: 4, mt: 4 }}>
        <Outlet />
      </Container>
    </>
  )
}

export default App
