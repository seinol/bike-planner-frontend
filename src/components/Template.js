import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Template = () => {
  const classes = useStyles();

  return (
    <Grid container direction={"column"} className={classes.root}>>

    </Grid>
  )
}

export default Template;
