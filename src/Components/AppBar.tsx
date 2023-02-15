import React, { useState } from "react";
import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from '@mui/material';
import MenuIcon from "@mui/material/Menu";

import { Link } from 'react-router-dom';

import './AppBar.css';
// eslint-disable-next-line  @typescript-eslint/no-explicit-any

const menuButton = {
  marginRight: 2,
};

function NavBar() {
  const [open, setOpen] = useState(false);

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
  const navBarStyles = {
    my: 2,
    color: 'white',
    display: 'block'
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              edge="start"
              sx={{ ...menuButton }}
              color="inherit"
              aria-label="menu"
              aria-controls="simple-menu"
              onClick={handleDrawerOpen}
            >
              <MenuIcon open={open}/>
            </IconButton>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Link to="/">
                <Button sx={{ ...navBarStyles }}>Home</Button>
              </Link>
              <Link to="/Maintenance">
                <Button sx={{ ...navBarStyles }}>Maintenance</Button>
              </Link>
              <Link to="/Tiling-Division">
                <Button sx={{ ...navBarStyles }}>Tiling</Button>
              </Link>
              <Link to="/Bathrooms">
                <Button sx={{ ...navBarStyles }}>Bathrooms</Button>
              </Link>
              <Link to="/Harrogate">
                <Button sx={{ ...navBarStyles }}>Harrogate Collection</Button>`
              </Link>
              <Link to="/Heating">
                <Button sx={{ ...navBarStyles }}>Heating</Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer open={open} onClose={handleDrawerClose}>
        <div role="presentation">
          <List>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/about">
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={Link} to="/contact">
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </div>
      </Drawer>

    </ThemeProvider>
  );
}
export default NavBar;