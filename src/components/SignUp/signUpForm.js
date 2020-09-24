import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { doSignupRequest } from '../../redux/actions/user';
import * as ROUTES from '../constants/routes';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const signUpError = useSelector(state => state.userState.error);
  let currentUser = useSelector(state => state.userState.currentUser);
  const [state, setState] = useState(INITIAL_STATE);
  const { username, email, passwordOne, passwordTwo, error } = state;
  const history = useHistory();

  const isInvalid = 
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    username === '';
    
  const onSubmit = event => {
    event.preventDefault();
    dispatch(doSignupRequest({ username, email, passwordOne }));
  };
  
  const onChange = event => 
    setState({ ...state, [event.target.name]: event.target.value });

  useEffect(() => {
    if(currentUser) {
      setState(INITIAL_STATE);
      history.push(ROUTES.SIGN_IN);
    }
  }, [currentUser, history]);

  useEffect(() => {
    if(signUpError) {
      setState(state => ({ ...state, error: signUpError }));
    }
  }, [signUpError]);

  console.log('SIGNUP');

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
      <button type='submit' disabled={isInvalid}>Sign Up</button>

      {error && <p>{error.message}</p>}
    </form>
  );
};

export default SignUpForm;
