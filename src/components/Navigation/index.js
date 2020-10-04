import React from 'react';
import { useSelector } from 'react-redux';
import { 
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  makeStyles
 } from '@material-ui/core';

import './styles.css';
import AuthLinks from './authLinks';
import NonAuthLinks from './nonAuthLinks';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Navigation = () => {
  console.log('NAVIGATION');
  const classes = useStyles();
  const { authUser } = useSelector(state => state.userState);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Picturesque
        </Typography>
          {authUser ? <AuthLinks /> : <NonAuthLinks />}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
