import React from 'react';
import { Link } from 'react-router-dom';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';

import './styles.css';
import SignUpForm from './signUpForm';
import * as ROUTES from '../constants/routes';

const SignUp = () => 
  <div className='signup-container'>
    <PhotoCameraOutlinedIcon />
    <h1>Join Picturesque</h1>
    <p>Already have an account? <Link to={ROUTES.LANDING}>Sign In</Link></p>
    <SignUpForm />
  </div>

export default SignUp;
