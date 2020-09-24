import React, { useState } from 'react';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
};

const SignInForm = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const { email, password, error } = state;

  const onChange = event => 
    setState({ ...state, [event.target.name]: event.target.value });

  const onSubmit = event => {
    event.preventDefault();
  };

  console.log('SIGNIN');
  
  return (
    <form onSubmit={onSubmit}>
      <input 
        type='text'
        name='email'
        value={email}
        onChange={onChange}
        placeholder='Email'
      />
      <input 
        type='password'
        name='password'
        value={password}
        onChange={onChange}
        placeholder='Password'
      />
      <button type='submit'>Sign In</button>

      {error && <p>{error.message}</p>}
    </form>
  )
}

export default SignInForm;
