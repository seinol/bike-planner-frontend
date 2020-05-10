import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container } from '@material-ui/core';
import AnswerSurveyData from './AnswerSurveyData';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useQuery } from '@apollo/react-hooks';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Typography from '@material-ui/core/Typography';
import ErrorIcon from '@material-ui/icons/Error';
import { Redirect } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import gql from 'graphql-tag';

const useStyles = makeStyles((theme) => ({
  marginTop: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const AnswerSurvey = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    fristName: window.localStorage.getItem('lastName'),
    lastName: window.localStorage.getItem('fullName'),
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

  let id = 1;
  let hello = useQuery(SURVEY_DATA_QUERY, {
    variables: { id }
  });

  let ids = [1, 2, 3];
  let object = useQuery(DATE_ELEMENTS_QUERY, {
    variables: { ids }
  });

  if (!hello.loading && !hello.error) {
    var finishBy = new Date(hello.data.survey.finishBy)
      .toLocaleDateString('de-CH', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
  }

  return window.localStorage.getItem('accessToken') !== null ?
    (
      <Container maxWidth="sm">

        {hello.loading || object.loading ?
          (
            <Grid container direction={'column'} alignItems={'center'}>
              <CircularProgress />
            </Grid>
          )
          :
          (
            hello.error || object.error ?
              (
                <Grid container direction={'column'} alignItems={'center'}>
                  <ErrorIcon />
                  <Typography>
                    Error fetching data from backend
                  </Typography>
                </Grid>
              )
              :
              (
                <Box>
                  <Grid container direction={'column'}>

                    <Typography variant={'h3'}>
                      {hello.loading ?
                        '...'
                        :
                        hello.data.survey.name}
                    </Typography>

                    <Grid item container direction="column">
                      <Grid item container direction="row" className={classes.marginTop}>
                        <LocationOnIcon />
                        <Typography>
                          {hello.loading ?
                            '...'
                            :
                            hello.data.survey.area}
                        </Typography>
                      </Grid>
                      <Grid item container direction="row" className={classes.marginTop}>
                        <ScheduleIcon />
                        <Typography>
                          {hello.loading ?
                            '...'
                            :
                            finishBy}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid item>
                      <AnswerSurveyData
                        surveyData={hello.data.survey}
                        surveyDates={object.data.surveyDateElements} />
                    </Grid>


                    <Grid item>
                      <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Wähle deine Antworten aus:</FormLabel>
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox checked={gilad} onChange={handleChange}
                                               name="gilad" />}
                            label="3. März"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={jason} onChange={handleChange}
                                               name="jason" />}
                            label="4. März"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={antoine} onChange={handleChange}
                                               name="antoine" />}
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
                </Box>
              )
          )
        }
      </Container>
    )
    :
    (
      <Redirect to={'/'} />
    );
};

export default AnswerSurvey;

const SURVEY_DATA_QUERY = gql`
    query Survey($id: Int) {
        survey(id: $id) {
            id
            name
            finishBy
            area
            surveyGroups {
                id
                part
                answerGroup {
                    id
                    description
                    answerPossibilities
                }
                surveyElements {
                    id
                    type
                    position
                }
            }
            participants {
                id
                lastname
                firstname
            }
            answers {
                id
                selectedAnswer
                person {
                    id
                }
                surveyElement {
                    id
                }
            }
        }
    }
`;

const DATE_ELEMENTS_QUERY = gql`
    query SurveyDateElements($ids: [Int]) {
        surveyDateElements(ids: $ids) {
            id
            date
            position
            type
        }
    }
`;

const SURVEY_ANSWER_MUTATION = gql`
    mutation SaveAnswers($surveyId: Int){
        saveAnswers (person: {lastname: "Hauser", firstname: "Jonas", mail: "jonas.hauser@hsr.ch"},
            answers: [{surveyId: 1, surveyElementId: 1, selectedAnswer : YES},
                {surveyId: 1, surveyElementId: 2 ,selectedAnswer : YES},
                {surveyId: 1, surveyElementId: 3 ,selectedAnswer : NO}]) {
            id
            person {
                id
            }
            selectedAnswer
        }
    }
`;
