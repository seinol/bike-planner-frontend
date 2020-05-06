import React from 'react';
import { Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CreateSurvey from './createsurvey/CreateSurvey';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const SAMPLE_QUERY = gql`
    query Survey($id: Int!) {
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

function TestQueryGraphQL({ id }) {
  const { loading, error, data } = useQuery(SAMPLE_QUERY, {
    variables: { id }
  });

  if (loading) console.log('Loading...');
  if (error) console.log('Error :(');

  if (!loading && !error) {
    console.log(data);
  }

  return (
    <div />
  );

}


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  welcomeTitle: {
    marginBottom: theme.spacing(4),
  }
}));

const Home = () => {
  const classes = useStyles();

  return window.localStorage.getItem('accessToken') !== null ?
    (
      <Container maxWidth="sm" className={classes.root}>
        <Typography variant="h3" align="center">
          Motorradtour erstellen
        </Typography>
        <CreateSurvey />
      </Container>
    ) : (
      <Container maxWidth="sm" className={classes.root}>
        <Grid
          item
          container
          direction="row"
          justify="center"
        >
          <Typography variant="h4" align="center" className={classes.welcomeTitle}>
            Willkommen auf der Motorradtour-Terminfindungs-Plattform
          </Typography>
          <Button href={'/login'} variant="contained" color="primary">
            Login
          </Button>
        </Grid>

        <TestQueryGraphQL id={1} />

      </Container>
    );
};

export default Home;
