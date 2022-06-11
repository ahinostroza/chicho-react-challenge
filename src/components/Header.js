import { AppBar, Container, Typography, Box, Toolbar, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { ROUTES } from '../utils'

const Header = () => {
  return (
    <AppBar position='static' sx={{ paddingX: 2, paddingY: 1 }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            component='a'
            fontWeight='bold'
            href='/'
            noWrap
            sx={{ color: 'inherit', flexGrow: 0, mr: 2, textDecoration: 'none' }}
            variant='h6'>
            Chicho ReactJS
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            {ROUTES.map((item, idx) => (
              <Link key={idx} to={item.path}>
                <Button
                  sx={{ color: 'white', display: 'inline-block', my: 2 }}>
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
