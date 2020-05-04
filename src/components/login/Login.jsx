import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import GoogleLoginButton from './GoogleLoginButton';

const useStyles = makeStyles(() => ({
  root: {},
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>

      <Grid item container direction="row" justify="center" alignItems="center">
        <GoogleLoginButton />
      </Grid>

    </Container>
  );
}
