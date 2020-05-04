import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  root: {},
}));

const CreateSurveyOptions = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.root}>

      <Grid item />

    </Grid>
  );
};

export default CreateSurveyOptions;
