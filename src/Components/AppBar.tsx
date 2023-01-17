import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import './AppBar.css';

import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';

function NavBar() {
  const theme = createTheme({
    palette: {
      primary: {
        main: green[800],
      },
    },
    typography: {
      "fontFamily": `'Pirulen Rg', sans-serif`,
      "fontSize": 16,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightMedium": 500
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Link to="/">
                <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Home
                </Button>
              </Link>

              <Link to="/Maintenance">
                <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Maintenance
                </Button>
              </Link>
              <Link to="/Tiling-Division">
                <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Tiling
                </Button>
              </Link>
              <Link to="/Bathrooms">
                <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Bathrooms
                </Button>
              </Link>
              <Link to="/Harrogate">
                <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Harrogate Collection
                </Button>`
              </Link>
              <Link to="/Heating">
                <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Heating
                </Button>
              </Link>

            </Box>
          </Toolbar>
        </Container>
      </AppBar>

    </ThemeProvider>
  );
}
export default NavBar;