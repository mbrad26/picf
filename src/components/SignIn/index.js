import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import SignInForm from './signInForm';
import * as ROUTES from '../constants/routes';
import SignInWithGoogle from './signInWithGoogle';

const SignIn = () => 
  <div className='component-container'>
    <h1>Sign In</h1>
    <SignInForm />
    <p><Link to={ROUTES.PASSWORD_RESET}>Forgot password?</Link></p>
    <SignInWithGoogle />
    <p>Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link></p>
  </div>

export default SignIn;
