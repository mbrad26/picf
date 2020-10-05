import React from 'react';
import { Nav } from 'react-bootstrap';

import * as ROUTES from '../constants/routes';

const NonAuthLinks = () => 
  <Nav className='ml-auto'>
    <Nav.Link to={ROUTES.LANDING}>Landing</Nav.Link>
    <Nav.Link to={ROUTES.SIGN_UP}>Sign Up</Nav.Link>
    <Nav.Link to={ROUTES.SIGN_IN}>Sign In</Nav.Link>
  </Nav>

export default NonAuthLinks;
