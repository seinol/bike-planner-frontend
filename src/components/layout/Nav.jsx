import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Nav = ({ darkMode, setDarkMode }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>

        <Typography variant="h6" className={classes.title}>
          Greatname-Frontend
        </Typography>

        <Grid item container direction="row" justify="center" alignItems="center">
          <FormControlLabel
            control={
              <Switch checked={darkMode} onChange={setDarkMode} color="" />
            }
            label="Dark mode"
          />
        </Grid>

        {
          window.localStorage.getItem('accessToken') !== null ?
            (
              <Button color="inherit" href="login">Logout</Button>
            )
            :
            ''
        }


      </Toolbar>
    </AppBar>
  );
};

export default Nav;
