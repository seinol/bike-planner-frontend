import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Route from 'react-router-dom/Route';
import Home from './components/Home';
import Login from './components/Login';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function Router() {
  const classes = useStyles();

  return (
    <Box>

      <Route component={Home} exact path='/' />
      <Route component={Login} path='/login' />

    </Box>
  );
}
