import React from 'react';
import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CreateSurvey from './createsurvey/CreateSurvey';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Box>

      <Container maxWidth="sm" className={classes.root}>
        <CreateSurvey />
      </Container>

    </Box>
  );
}
