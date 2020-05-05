import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import React from 'react';
import AnswerSurveyData from './AnswerSurveyData';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));
export default function AnswerSurvey() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: false,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
    });
  };

  const { gilad, jason, antoine } = state;

  return (
    <Grid container direction="column" className={classes.root}>

      <Grid item>
        <AnswerSurveyData />
      </Grid>


      <Grid item>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Wähle deine Antworten aus:</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
              label="3. März"
            />
            <FormControlLabel
              control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
              label="4. März"
            />
            <FormControlLabel
              control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
              label="5. März"
            />
          </FormGroup>
        </FormControl>
      </Grid>


      <Grid
        item
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-end"
      >

        <Button variant="contained" color="primary">Speichern</Button>

      </Grid>

    </Grid>
  );
}
