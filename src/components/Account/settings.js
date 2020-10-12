import React from 'react';

import PasswordChangeForm from '../PasswordChange';
import PasswordResetForm from '../PasswordForget/passwordResetForm';

const Settings = () => {
  return (
    <div className='settings-container'>
      <h3>Password reset</h3>
      <PasswordResetForm />
      <h3>Password change</h3>
      <PasswordChangeForm />
    </div>
  )
}

export default Settings;
