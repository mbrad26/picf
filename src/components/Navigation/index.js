import React from 'react';
import { useSelector } from 'react-redux';

import AuthLinks from './authLinks';
import NonAuthLinks from './nonAuthLinks';

const Navigation = () => {
  const { currentUser } = useSelector(state => state.userState);

  return (
    <div>
      {currentUser ? <AuthLinks /> : <NonAuthLinks />}
    </div>
  );
};

export default Navigation;
