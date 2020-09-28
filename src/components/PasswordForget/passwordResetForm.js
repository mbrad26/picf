import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { doResetPasswordRequest } from '../../redux/actions/user';

const INITIAL_STATE = {
  email: '',
  error: null,
};

const PasswordResetForm = () => {
  console.log('PASSWORD_RESET');
  const dispatch = useDispatch();
  const { authError } = useSelector(state => state.userState);
  const [state, setState] = useState(INITIAL_STATE);
  const { email, error } = state;

  const onChange = event => 
    setState({ ...state, email: event.target.value });

  const onSubmit = event => {
    event.preventDefault();
    dispatch(doResetPasswordRequest(state.email));
    setState(INITIAL_STATE);
  };

  useEffect(() => {
    if(authError) {
      setState(state => ({ ...state, error: authError }));
    }
  }, [authError]);

  return (
    <form onSubmit={onSubmit}>
      <input 
        type='email'
        name='email'
        value={email}
        onChange={onChange}
        placeholder='Email'
      />
      <button type='submit'>Reset</button>

      {error && <p>{error.message}</p>}
    </form>
  );
};

export default PasswordResetForm;
