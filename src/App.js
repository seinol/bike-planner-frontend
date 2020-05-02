import React from 'react';
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import { Grid, Container, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CreateSurvey from './components/createsurvey/CreateSurvey';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function App() {
  const classes = useStyles();

  return (
    <Grid container direction={"column"} className={classes.root}>

      <Grid item>
        <Nav />
      </Grid>

      <Box mt={3}>
        <Grid item>
          <Container maxWidth={'sm'}>
            <CreateSurvey />
          </Container>
        </Grid>
      </Box>

      <Grid item>
        <Footer />
      </Grid>

    </Grid>
  );
}
