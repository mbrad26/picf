import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import SignOut from '../SignOut';
import * as ROUTES from '../constants/routes';

const AuthLinks = () => 
  <>
    <Nav.Link as={Link} to={ROUTES.HOME}>Home</Nav.Link>
    <Nav.Link as={Link} to={ROUTES.ACCOUNT}>Account</Nav.Link>
    <Nav.Link as={SignOut}>SignOut</Nav.Link>
  </>
export default AuthLinks;
