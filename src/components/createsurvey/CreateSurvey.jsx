import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Fade from '@material-ui/core/Fade';
import CreateSurveyOptions from './CreateSurveyOptions';
import CreateSurveyMetaInfo from './CreateSurveyMetaInfo';

const useStyles = makeStyles((theme) => ({
  root: {},
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
}));

function getSteps() {
  return ['Beschreibe deine Motorradtour', 'Wähle die Daten', 'Bestätigung'];
}

function getStepTitle(stepIndex) {
  const steps = getSteps();
  switch (stepIndex) {
    case 0:
      return steps[0];
    case 1:
      return steps[1];
    case 2:
      return steps[2];
    default:
      return 'Unknown stepIndex';
  }
}

function getStepComponent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Fade><CreateSurveyMetaInfo /></Fade>;
    case 1:
      return <Fade><CreateSurveyOptions /></Fade>;
    case 2:
      return <Fade><Typography>END</Typography></Fade>;
    default:
      return 'Unknown stepIndex';
  }
}

const CreateSurvey = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Grid container direction="column" className={classes.root}>

      <Grid item>
        <Typography variant="h4" align="center">
          {getStepTitle(activeStep)}
        </Typography>
      </Grid>

      <Grid item>
        {getStepComponent(activeStep)}
      </Grid>

      <Grid item>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>

      <Grid
        item
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-end"
      >

        {activeStep === steps.length ? (
          <Typography className={classes.instructions}>SENT</Typography>
        ) : (
          <div>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Zurück
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Erstellen' : 'Weiter'}
              </Button>
            </div>
          </div>
        )}

      </Grid>

    </Grid>
  );
};

export default CreateSurvey;
