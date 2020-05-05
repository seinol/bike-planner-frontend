import React from 'react';
import { Container, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AnswerSurvey from './answersurvey/AnswerSurvey';
import CreateSurvey from './createsurvey/CreateSurvey';
import Typography from '@material-ui/core/Typography';
import Redirect from 'react-router-dom/es/Redirect';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  welcomeTitle: {
    marginBottom: theme.spacing(4),
  }
}));

const Home = () => {
  const classes = useStyles();

  const redirectToLogin = () => {
    return <Redirect to={'/'} />;
  };

  return window.localStorage.getItem('accessToken') !== null ?
    (
      <Container maxWidth="sm" className={classes.root}>
        <Typography  variant="h3" align="center">
          Motorradtour erstellen
        </Typography>
        <CreateSurvey />
      </Container>
    ) : (
      <Container maxWidth="sm" className={classes.root}>
        <Grid
          item
          container
          direction="row"
          justify="center"
        >
          <Typography variant="h4" align="center" className={classes.welcomeTitle}>
            Willkommen auf der Motorradtour-Terminfindungs-Plattform
          </Typography>
          <Button href={'/login'} variant="contained" color="primary">
            Login
          </Button>
        </Grid>
      </Container>
    );
};

export default Home;
