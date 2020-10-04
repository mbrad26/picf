import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
  TextField, 
  Button,
} from '@material-ui/core';

import * as ROUTES from '../constants/routes';
import { doSigninRequest } from '../../redux/actions/user';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

const SignInForm = () => {
  console.log('SIGN_IN_FORM');
  const history = useHistory();
  const dispatch = useDispatch();
  const { authUser, authError } = useSelector(state => state.userState);
  const [state, setState] = useState(INITIAL_STATE);
  const { email, password, error } = state;

  const onChange = event => 
    setState({ ...state, [event.target.name]: event.target.value });

  const onSubmit = event => {
    event.preventDefault();
    dispatch(doSigninRequest({ email, password }));
  };

  useEffect(() => {
    if(authUser) {
      setState(INITIAL_STATE);
      history.push(ROUTES.HOME);
    }
  }, [authUser, history]);

  useEffect(() => {
    if(authError) {
      setState(state => ({ ...state, error: authError }));
    }
  }, [authError]);
  
  return (
    <form onSubmit={onSubmit}>
      <div>
        <TextField 
          type='text'
          name='email'
          value={email}
          onChange={onChange}
          label='Email'
          multiline
        />
      </div>

      <div>
        <TextField
          type='password'
          name='password'
          value={password}
          onChange={onChange}
          label='Password'
          multiline
        />
      </div>

      <div>
        <Button type='submit'>Sign In</Button>
      </div>

      {error && <p>{error.message}</p>}
    </form>
  )
}

export default SignInForm;
