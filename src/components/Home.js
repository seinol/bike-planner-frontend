import React from 'react';
import { Grid, Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Nav from "./layout/Nav";
import Footer from "./layout/Footer"
import CreateSurvey from './createsurvey/CreateSurvey';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2)
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Box>

      <Nav />

      <Container maxWidth={'sm'} className={classes.root}>
        <CreateSurvey />
      </Container>

      <Footer />

    </Box>
  );
}
