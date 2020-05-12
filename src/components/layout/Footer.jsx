import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'© '}
      {new Date().getFullYear()}
      {' - '}
      Jonas Hauser, Christoph Scheiwiller und Rafael Fuhrer
      {' '}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    bottom: 0,
    width: '100%',
    position: 'fixed',
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900],
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>

        <Container maxWidth="sm">

          <Typography variant="body1">Bike Planner</Typography>

          <Copyright />

        </Container>

      </footer>
    </div>
  );
}
