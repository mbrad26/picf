import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as ROUTES from '../constants/routes';
import PasswordResetForm from '../PasswordForget/passwordResetForm';

const Account = () => {
  console.log('ACCOUNT');
  const { authUser } = useSelector(state => state.userState);

  if(!authUser) return <Redirect to={ROUTES.SIGN_IN} />

  return (
    <div>
      <h1>Account</h1>
      <PasswordResetForm />
    </div>
  );
};

export default Account;
