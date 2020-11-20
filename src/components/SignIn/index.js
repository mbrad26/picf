import React from 'react';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


import './styles.css';
import SignInForm from './signInForm';
import * as ROUTES from '../constants/routes';
import SignInWithGoogle from './signInWithGoogle';

const SignIn = () => 
  <div className='signin-container'>
    <LockOutlinedIcon />
    <h1>Sign In</h1>
    <p className='welcome-or'>Welcome back!</p>
    <SignInWithGoogle />
    <p className='welcome-or'>OR</p>
    <SignInForm />
    <p><Link to={ROUTES.PASSWORD_RESET}>Forgot password?</Link></p>
    <p>Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link></p>
  </div>

export default SignIn;
