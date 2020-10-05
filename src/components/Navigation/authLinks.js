import React from 'react';
// import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import SignOut from '../SignOut';
import * as ROUTES from '../constants/routes';

const AuthLinks = () => 
  <Nav className='ml-auto'>
    <Nav.Link to={ROUTES.LANDING}>Landing</Nav.Link>
    <Nav.Link to={ROUTES.HOME}>Home</Nav.Link>
    <Nav.Link to={ROUTES.ACCOUNT}>Account</Nav.Link>
    <Nav.Link as={SignOut}>SignOut</Nav.Link>
  </Nav>
export default AuthLinks;
