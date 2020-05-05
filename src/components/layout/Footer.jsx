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
      Jonas Hauser, Christoph Scheiwiller and Rafael Fuhrer
      {' '}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Greatname-frontend</Typography>
          <Copyright />
        </Container>
      </footer>
  );
}
