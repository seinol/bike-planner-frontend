import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: {
  },
}));

export default function AnswerSurvey() {
  const classes = useStyles();

  return (
    <div className={classes.root}>


      <Button color="inherit">Erstellen</Button>
    </div>
  );
}
