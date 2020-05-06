import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import GoogleLoginButton from './GoogleLoginButton';
import LoginMetaInfo from './LoginMetaInfo';

const useStyles = makeStyles((theme) => ({
  loginTitle: {
    marginBottom: theme.spacing(4)
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>

      <Grid item container direction="row" justify="center" alignItems="center">
        {
          window.localStorage.getItem('accessToken') === null ?
            (
              <LoginMetaInfo />
            )
            :
            ''
        }

        <GoogleLoginButton />

      </Grid>

    </Container>
  );
}
