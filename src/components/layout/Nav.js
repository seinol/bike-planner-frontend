import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

export default function Nav() {
  const classes = useStyles();

  return (
      <AppBar position="static" className={classes.root}>
        <Toolbar>
{/*          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Menu />
          </IconButton>*/}
          <Typography variant="h6" className={classes.title}>
            Greatname-Frontend
          </Typography>
          <Button color="inherit" href={"login"}>Login</Button>
          {/*<Button color="inherit">Logout</Button>*/}
        </Toolbar>
      </AppBar>
  );
}


