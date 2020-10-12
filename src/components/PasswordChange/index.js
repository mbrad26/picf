import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { doUpdatePasswordRequest } from '../../redux/actions/user';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const PasswordChangeForm = () => {
  console.log('PASSWORD_CHANGE_FORM');
  const dispatch = useDispatch();
  const { authError } = useSelector(state => state.userState);
  const [state, setState] = useState(INITIAL_STATE);
  const { passwordOne, passwordTwo, error } = state;

  const isInvalid = passwordOne !== passwordTwo || passwordOne === '';

  const onSubmit = event => {
    event.preventDefault();
    dispatch(doUpdatePasswordRequest(state.passwordOne));
    setState(INITIAL_STATE);
  };

  const onChange = event => 
      setState({ ...state, [event.target.name]: event.target.value });

  useEffect(() => {
    if(authError) {
      setState(state => ({ ...state, error: authError }));
    }
  }, [authError]);

  return (
    <form onSubmit={onSubmit}>
      <input 
        type='text'
        name='passwordOne'
        value={passwordOne}
        onChange={onChange}
        placeholder='New password'
      />
      <input 
        type='password'
        name='passwordTwo'
        value={passwordTwo}
        onChange={onChange}
        placeholder='Confirm new password'
      />
      <button 
        type='submit' 
        disabled={isInvalid}
      >
        Change password
      </button>

      {error && <p>{error.message}</p>}
    </form>
  );
};

export default PasswordChangeForm;
