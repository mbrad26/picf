import React from 'react';

import PasswordChangeForm from '../PasswordChange';
import PasswordResetForm from '../PasswordForget/passwordResetForm';

const Settings = () => {
  return (
    <div className='settings-container'>
      <h3>Account settings</h3>
      <hr />
      <h5>Password reset</h5>
      <PasswordResetForm />
      <h5>Password change</h5>
      <PasswordChangeForm />
    </div>
  )
}

export default Settings;
