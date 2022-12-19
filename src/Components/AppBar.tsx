import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import './AppBar.css';

function NavBar() {
  return (
    <AppBar position="static" className='app-bar'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              href="/"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Home
            </Button>
            <Button
              href="/Maintenance"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Maintenance
            </Button>
            <Button
              href="/Tiling-Division"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Tiling
            </Button>
            <Button
              href="/Bathrooms"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Bathrooms
            </Button>
            <Button
              href="/Harrogate"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Harrogate Collection
            </Button>
            <Button
              href="/Heating"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Heating
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;