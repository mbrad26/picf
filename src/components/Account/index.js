import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './style.css';
import Sidebar from '../Sidebar';
import * as ROUTES from '../constants/routes';
import PasswordChangeForm from '../PasswordChange';
import PasswordResetForm from '../PasswordForget/passwordResetForm';
import { doEmailVerificationRequest } from '../../redux/actions/user';

const Account = () => {
  console.log('ACCOUNT');
  const dispatch = useDispatch();
  const { authUser } = useSelector(state => state.userState);

  const onClick = () => dispatch(doEmailVerificationRequest());

  if(!authUser) return <Redirect to={ROUTES.SIGN_IN}/>

  if(authUser && 
    !authUser.emailVerified &&
    authUser.providerData
            .map(provider => provider.providerId)
            .includes('password')
  ) {
    return (
      <div>
        <p>
          Verify your E-Mail: Check you E-Mails (Spam folder 
          included) for a confirmation E-Mail or 
          send another confirmation E-Mail.
        </p>

        <button
          type="button" 
          onClick={onClick}
        >
          Send confirmation E-Mail
        </button>
      </div>
    );
  };

  return (
    <div className='component-container'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='account'>
        <h1>Account</h1>
        <h3>Password reset</h3>
        <PasswordResetForm />
        <h3>Password change</h3>
        <PasswordChangeForm />
      </div>
    </div>
  );
};

export default Account;
