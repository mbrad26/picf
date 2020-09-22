import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const SignUpForm = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const { username, email, passwordTwo, passwordOne, error } = state;
  const { firebase } = useSelector(state => state);

  console.log(firebase);

  const onSubmit = event => {
    event.preventDefault();
    // firebase.on('value').set
  }

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
      <button type='submit'>Register</button>

      {error && <p>{error.message}</p>}
    </form>
  );
};

export default SignUpForm;
