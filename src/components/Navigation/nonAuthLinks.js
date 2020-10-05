import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import * as ROUTES from '../constants/routes';

const NonAuthLinks = () => 
  <>
    <Nav.Link as={Link} to={ROUTES.SIGN_UP}>Sign Up</Nav.Link>
    <Nav.Link as={Link} to={ROUTES.SIGN_IN}>Sign In</Nav.Link>
  </>

export default NonAuthLinks;
