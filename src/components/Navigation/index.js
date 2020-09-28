import React from 'react';
import { useSelector } from 'react-redux';

import './styles.css';
import AuthLinks from './authLinks';
import NonAuthLinks from './nonAuthLinks';

const Navigation = () => {
  const { authUser } = useSelector(state => state.userState);

  console.log('NAVIGATION');

  return (
    <div>
      {authUser ? <AuthLinks /> : <NonAuthLinks />}
    </div>
  );
};

export default Navigation;
