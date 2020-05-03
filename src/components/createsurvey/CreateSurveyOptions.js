import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const CreateSurveyOptions = () => {
  const classes = useStyles();

  return (
    <Grid container direction={"column"} className={classes.root}>

      <Grid item>
        <Typography variant={'h4'} align={'center'}>
          Wähle die Daten
        </Typography>
      </Grid>

    </Grid>
  )
}

export default CreateSurveyOptions;
