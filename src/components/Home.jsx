import React from 'react';
import { Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Box from '@material-ui/core/Box';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AnswerSurvey from './answersurvey/AnswerSurvey';

const useStyles = makeStyles((theme) => ({
  root: {
    icons: theme.spacing(2),
  },
  marginBottom: {
    marginBottom: theme.spacing(2),
  },
}));

function Welcome() {
  return (
    <Typography variant="h4" align="center" className={useStyles().marginBottom}>
      Willkommen auf Bike Planner
    </Typography>
  );
}

const Home = () => {
  const classes = useStyles();

  const [openSurvey, handleOpenSurvey] = React.useState(false);
  const sampleSurveyHash = 'b3761826a5357e9bb8464f46d88ebb72f5ef4e31420f5b403dba571968b3bfb2';
  window.scrollTo(0, 0);

  return window.localStorage.getItem('accessToken') !== null
    ? (
      <Container maxWidth="sm" className={classes.root}>
        {
          openSurvey
            ? <AnswerSurvey surveyHash={sampleSurveyHash} />
            : (
              <Box>

                <Welcome />

                <Typography variant="h6" align="center" className={classes.marginBottom}>
                  Benutze einen Schlüssel um eine Umfrage zu beantworten
                </Typography>


                <FormControl fullWidth required className={classes.marginBottom}>
                  <InputLabel htmlFor="survey-title">Schlüssel eingeben</InputLabel>
                  <Input
                    disabled
                    id="survey-title"
                    value={sampleSurveyHash}
                    startAdornment={(
                      <InputAdornment position="start">
                        <VpnKeyIcon />
                      </InputAdornment>
                    )}
                  />
                </FormControl>
                <Button onClick={handleOpenSurvey} variant="contained" color="primary">
                  Öffnen
                </Button>
              </Box>
            )
        }
      </Container>
    )
    : (
      <Container maxWidth="sm" className={classes.root}>

        <Welcome />

        <Typography variant="h6" align="center" className={classes.marginBottom}>
          Bitte einloggen um fortzufahren
        </Typography>

        <Grid
          item
          container
          direction="row"
          justify="center"
        >

          <Button href="/login" variant="contained" color="primary">
            Einloggen
          </Button>

        </Grid>

      </Container>
    );
};

export default Home;
