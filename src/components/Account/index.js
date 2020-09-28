import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as ROUTES from '../constants/routes';
import PasswordChangeForm from '../PasswordChange';
import PasswordResetForm from '../PasswordForget/passwordResetForm';

const Account = () => {
  console.log('ACCOUNT');
  const { authUser } = useSelector(state => state.userState);

  if(!authUser) return <Redirect to={ROUTES.SIGN_IN} />

  return (
    <div>
      <h1>Account</h1>
      <h3>Password reset</h3>
      <PasswordResetForm />
      <h3>Password change</h3>
      <PasswordChangeForm />
    </div>
  );
};

export default Account;
