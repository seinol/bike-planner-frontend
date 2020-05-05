import React, { useState } from 'react';
import { Box, createMuiTheme } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { SnackbarProvider } from 'notistack';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/Home';
import Login from './components/login/Login';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import AnswerSurvey from './components/answersurvey/AnswerSurvey';

const App = () => {
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

          <Nav darkMode={darkMode} setDarkMode={() => setDarkMode(!darkMode)}/>

          <Box mt={3}>
            <Switch>
              <Route component={Home} exact path="/" />
              <Route component={Login} path="/login" />
              <Route component={AnswerSurvey} path="/answer" />
              <Route component={Home} path="/" />
            </Switch>
          </Box>

          <Footer />

        </Paper>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
