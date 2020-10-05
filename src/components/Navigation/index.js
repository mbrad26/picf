import React from 'react';
import { useSelector } from 'react-redux';
import { 
  Navbar,
 } from 'react-bootstrap';

import './styles.css';
import AuthLinks from './authLinks';
import NonAuthLinks from './nonAuthLinks';

const Navigation = () => {
  console.log('NAVIGATION');
  const { authUser } = useSelector(state => state.userState);

  return (
    <Navbar>
      <Navbar.Brand>Picturesque</Navbar.Brand>
        {authUser ? <AuthLinks /> : <NonAuthLinks />}
    </Navbar>
  );
};

export default Navigation;
