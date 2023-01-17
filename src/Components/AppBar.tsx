import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

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
    <ThemeProvider  theme={theme}>
      <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
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

    </ThemeProvider>
  );
}
export default NavBar;