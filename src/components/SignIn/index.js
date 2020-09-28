import React from 'react';
import { Link } from 'react-router-dom';

import SignInForm from './signInForm';
import * as ROUTES from '../constants/routes';

const SignIn = () => {
  console.log('SIGN_In');

  return (
    <div>
      <h1>Sign In</h1>
      <SignInForm />
      <p>Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link></p>
    </div>
  );
};

export default SignIn;
