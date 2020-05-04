import React, { useState } from 'react';
import { Box, createMuiTheme } from '@material-ui/core';
import Route from 'react-router-dom/Route';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { SnackbarProvider } from 'notistack';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/Home';
import Login from './components/login/Login';
import Nav from './components/layout/Nav';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider maxSnack={3}>
        <Paper elevation={0}>

          <Nav />

          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} color="primary" />

          <Box mt={3}>
            <Route component={Home} exact path="/" />
            <Route component={Login} path="/login" />
          </Box>

          {/* <Footer /> */}

        </Paper>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
