import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Typography from '@material-ui/core/Typography';
import ErrorIcon from '@material-ui/icons/Error';
import Box from '@material-ui/core/Box';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';
import AnswerSurveyData from './AnswerSurveyData';
import gql from 'graphql-tag';
import { useSnackbar } from 'notistack';
import Home from '../Home';

function convertToLocaleDateString(rawDate) {
  return new Date(rawDate)
    .toLocaleDateString('de-CH', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
}

function getRandomYesOrNo() {
  return Math.random() >= 0.5 ? 'YES' : 'NO';
}

const useStyles = makeStyles((theme) => ({
  selectAnswersTitle: {
    marginTop: theme.spacing(4),
  },
  selectAnswerOptions: {
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(3)
  },
  surveyTitle: {
    textAlign: 'center',
    marginBottom: theme.spacing(1)
  },
  surveyIcon: {
    marginRight: theme.spacing(2)
  },
  surveyInfo: {
    marginTop: theme.spacing(1)
  }
}));

const AnswerSurvey = ({ surveyHash }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  let surveyData = useQuery(SURVEY_DATA_QUERY, {
    variables: { surveyHash }
  });

  // TODO get ids of dateElements dynamically
  /*if (!surveyData.loading){
      surveyData.data.surveyByUrlHash.surveyGroups[0].surveyElements.forEach((date, index) => {
        ids.push(index);
      });
    }*/

  let ids = [1, 2, 3];
  let dateElements = useQuery(SURVEY_DATE_ELEMENTS_QUERY, {
    variables: { ids }
  });

  const [saveAnswer] = useMutation(SURVEY_ANSWER_MUTATION);

  //TODO setState dateX dynamically
  /*setState({...state, date1: false});
    setState({...state, date2: false});
    setState({...state, date3: false});*/

  const [state, setState] = React.useState({
    date1: false,
    date2: false,
    date3: false,
    redirect: ''
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
    });
  };

  const handleSubmit = () => {
    setState({
      ...state,
      date1: false,
      date2: false,
      date3: false,
      redirect: '/'
    });
    enqueueSnackbar('Antwort gespeichert', {
      variant: 'success',
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center',
      }});
  };

  //TODO get answer elements dynamically by id
  let answers = [
    {
      surveyId: 1,
      surveyElementId: 1,
      selectedAnswer: getRandomYesOrNo()
    },
    {
      surveyId: 1,
      surveyElementId: 2,
      selectedAnswer: getRandomYesOrNo()
    },
    {
      surveyId: 1,
      surveyElementId: 3,
      selectedAnswer: getRandomYesOrNo()
    }];

  if (state.redirect) {
    return (
        <Route pathName={"/"} component={Home} />
    );
  }

  return window.localStorage.getItem('accessToken') !== null ?
    (
      <Container maxWidth="sm">

        {surveyData.loading || dateElements.loading ?
          (
            <Grid container direction={'column'} alignItems={'center'}>
              <CircularProgress />
            </Grid>
          )
          :
          (
            surveyData.error || dateElements.error ?
              (
                <Grid container direction={'column'} alignItems={'center'}>
                  <ErrorIcon />
                  <Typography>
                    Error fetching data
                  </Typography>
                  {enqueueSnackbar('Error fetching data', {
                    variant: 'error',
                    anchorOrigin: {
                      vertical: 'bottom',
                      horizontal: 'center',
                    }})}
                </Grid>
              )
              :
              (
                <Box>
                  <Grid container direction={'column'}>
                    <Typography variant={'h3'} className={classes.surveyTitle}>
                      {surveyData.data['surveyByUrlHash'].name}
                    </Typography>

                    <Grid item container direction="column">
                      <Grid item container direction="row" className={classes.surveyInfo}>
                        <LocationOnIcon className={classes.surveyIcon} />
                        <Typography>
                          {surveyData.data['surveyByUrlHash'].area}
                        </Typography>
                      </Grid>
                      <Grid item container direction="row" className={classes.surveyInfo}>
                        <ScheduleIcon className={classes.surveyIcon} />
                        <Typography>
                          {convertToLocaleDateString(surveyData.data['surveyByUrlHash']['finishBy'])}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid item>
                      <AnswerSurveyData
                        surveyData={surveyData.data['surveyByUrlHash']}
                        surveyDates={dateElements.data['surveyDateElements']} />
                    </Grid>

                    <form
                      onSubmit={e => {
                        e.preventDefault();
                        saveAnswer(
                          {
                            variables: {
                              lastName: window.localStorage.getItem('lastName'),
                              firstName: window.localStorage.getItem('firstName'),
                              email: window.localStorage.getItem('email'),
                              answers: answers
                            }
                          }
                        )
                          .then(handleSubmit);
                      }}
                    >
                      <Grid item>

                        <Typography variant="h5" className={classes.selectAnswersTitle}>
                          Wähle deine Antworten aus
                        </Typography>

                        <FormControl component="fieldset" className={classes.selectAnswerOptions}>
                          <FormGroup>
                            {
                              dateElements.data['surveyDateElements'].map(dateElement => (
                                <FormControlLabel
                                  control={<Checkbox checked={state['date' + dateElement.id]}
                                                     onChange={handleChange}
                                                     name={'date' + dateElement.id} />}
                                  label={convertToLocaleDateString(dateElement.date)}
                                />
                              ))
                            }
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
                        <Button type="submit" variant="contained" color="primary">Speichern</Button>
                      </Grid>
                    </form>

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
    query Survey($surveyHash: String) {
        surveyByUrlHash(urlHash: $surveyHash) {
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

const SURVEY_DATE_ELEMENTS_QUERY = gql`
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
    mutation SaveAnswers($lastName: String!, $firstName: String!, $email: String!,
        $answers: [AnswerInputInput]!){
        saveAnswers (
            person: {lastname: $lastName, firstname: $firstName, mail: $email},
            answers: $answers
        ) {
            id
            person {
                id
            }
            selectedAnswer
        }
    }
`;
