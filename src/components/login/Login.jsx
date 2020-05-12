import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import LoginButton from './LoginButton';

const useStyles = makeStyles((theme) => ({
  loginTitle: {
    marginBottom: theme.spacing(3),
  },
  metaInfo: {
    icons: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

function MetaInfo() {
  return (
    <Box>

      <Typography variant="h4" align="center" className={useStyles().loginTitle}>Login</Typography>

      <Typography variant="h6" align="center" className={useStyles().metaInfo}>
        Du wirst bei erfolgreicher Anmeldung automatisch weitergeleitet
      </Typography>

      <Alert severity="info" className={useStyles().metaInfo}>
        Aktuell bieten wir nur Login mit Google an
      </Alert>

    </Box>
  );
}

export default function Login() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>

      <Grid item container direction="row" justify="center" alignItems="center">

        {
          window.localStorage.getItem('tokenId') === null
            ? <MetaInfo />
            : (
              <Typography variant="h6" align="center" className={classes.metaInfo}>
                Klicke erneut auf den Button um dich auszuloggen
              </Typography>
            )
        }

        <LoginButton />

      </Grid>

    </Container>
  );
}
