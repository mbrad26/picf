import React from 'react';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';

import './styles.css';
import PasswordResetForm from './passwordResetForm';

const PasswordReset = () => 
  <div className='password-reset-container'>
    <PhotoCameraOutlinedIcon />
    <h1>Forgot your password?</h1>
    <p>
      Enter the email address associated with your account and we’ll send you a link to reset your password.
    </p>
    <PasswordResetForm />
  </div>

export default PasswordReset;
