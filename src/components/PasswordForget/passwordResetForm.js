import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { doResetPasswordRequest } from '../../redux/actions/user';

const PasswordResetForm = () => {
  console.log('PASSWORD_RESET');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const onChange = event => 
    setEmail(event.target.value);

  const onSubmit = event => {
    event.preventDefault();
    dispatch(doResetPasswordRequest(email));
  };

  return (
    <form onSubmit={onSubmit}>
      <input 
        type='email'
        value={email}
        onChange={onChange}
        placeholder='Email'
      />
      <button type='submit'>Reset</button>
    </form>
  );
};

export default PasswordResetForm;
