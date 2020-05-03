import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Route from 'react-router-dom/Route';
import Home from './components/Home';
import Login from './components/login/Login';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function App() {
  const classes = useStyles();

  return (
    <Box>

      <Nav />

      <Box mt={3}>
        <Route component={Home} exact path='/' />
        <Route component={Login} path='/login' />
      </Box>

      <Footer />

    </Box>
  );
}
