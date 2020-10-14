import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import SignOut from '../SignOut';
import * as ROUTES from '../constants/routes';

const AuthLinks = () => {
  const history = useHistory();
  const { authUser } = useSelector(state => state.userState);
  const isHome = history.location.pathname.includes('/home');

  return  (
    <>
      <Nav.Link>{authUser.username}</Nav.Link>

      {isHome
        ? <Nav.Link as={Link} to={ROUTES.ACCOUNT}>Account</Nav.Link>
        : <Nav.Link as={Link} to={ROUTES.HOME}>Home</Nav.Link>
      }
      <Nav.Link as={SignOut}>SignOut</Nav.Link>
    </>
  );
};

export default withRouter(AuthLinks);
