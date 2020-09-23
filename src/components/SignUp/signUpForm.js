import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { doSignupRequest } from '../../redux/actions/user';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(INITIAL_STATE);
  const { username, email, passwordOne, passwordTwo, error } = state;

  const isInvalid = 
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    username === '';

  const onSubmit = event => {
    event.preventDefault();
    dispatch(doSignupRequest({ username, email, passwordOne }));

    setState(INITIAL_STATE);
  };

  const onChange = event => 
    setState({ ...state, [event.target.name]: event.target.value });

  return (
    <form onSubmit={onSubmit}>
      <input 
        type='text'
        name='username'
        value={username}
        onChange={onChange}
        placeholder='Username' 
      />
      <input 
        type='text'
        name='email'
        value={email}
        onChange={onChange}
        placeholder='Email' 
      />
      <input 
        type='text'
        name='passwordOne'
        value={passwordOne}
        onChange={onChange}
        placeholder='Password' 
      />
      <input 
        type='text'
        name='passwordTwo'
        value={passwordTwo}
        onChange={onChange}
        placeholder='Confirm Password' 
      />
      <button type='submit' disabled={isInvalid}>Register</button>

      {error && <p>{error.message}</p>}
    </form>
  );
};

export default SignUpForm;
