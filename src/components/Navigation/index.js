import React from 'react';
import { useSelector } from 'react-redux';
import { 
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
 } from '@material-ui/core';

import './styles.css';
import AuthLinks from './authLinks';
import NonAuthLinks from './nonAuthLinks';

const Navigation = () => {
  console.log('NAVIGATION');
  const { authUser } = useSelector(state => state.userState);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" >
          Picturesque
        </Typography>
        <Button color="inherit">
          {authUser ? <AuthLinks /> : <NonAuthLinks />}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
