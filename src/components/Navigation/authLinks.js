import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useHistory, withRouter } from 'react-router-dom';

import SignOut from '../SignOut';
import * as ROUTES from '../constants/routes';

const AuthLinks = ({ user }) => {
  const history = useHistory();
  const isHome = history.location.pathname.includes('/home');

  return  (
    <>
      <Nav.Link>{user && user.username}</Nav.Link>

      {isHome
        ? <Nav.Link as={Link} to={ROUTES.ACCOUNT}>Account</Nav.Link>
        : <Nav.Link as={Link} to={ROUTES.HOME}>Home</Nav.Link>
      }
      <Nav.Link as={SignOut}>SignOut</Nav.Link>
    </>
  );
};

export default withRouter(AuthLinks);
