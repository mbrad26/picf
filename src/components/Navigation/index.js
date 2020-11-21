import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { 
  Navbar,
  Nav,
 } from 'react-bootstrap';

import './styles.css';
import AuthLinks from './authLinks';
import NonAuthLinks from './nonAuthLinks';
import * as ROUTES from '../constants/routes';

const Navigation = () => {
  const { authUser } = useSelector(state => state.userState);
  const [user, setUser] = useState(authUser);

  useEffect(() => {
    setUser(authUser);
  }, [authUser]);

  return (
    <Navbar>
      <Navbar.Brand>
        <Nav.Link as={Link} to={ROUTES.HOME}>Picturesque</Nav.Link>
      </Navbar.Brand>
      <Nav className='ml-auto'>
        {user ? <AuthLinks user={user} /> : <NonAuthLinks />}
      </Nav>
    </Navbar>
  );
};

export default Navigation;
