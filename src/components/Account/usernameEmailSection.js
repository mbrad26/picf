import React,  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { doUpdateUserDetailsRequest } from '../../redux/actions/user';

const UsernameAndEmailSection = () => {
  const dispatch = useDispatch();
  const { authUser, authError } = useSelector(state => state.userState);
  const [state, setState] = useState({ 
    username: authUser.username, 
    email: authUser.email,
    error: authError
  });
  const { username, email, error } = state;

  const onSubmit = event => {
    event.preventDefault();
    dispatch(doUpdateUserDetailsRequest({ username, email }));
  };

  const onChange = event => 
    setState({ ...state, [event.target.name]: event.target.value });

  useEffect(() => {
    if(authError) {
      setState(state => ({ ...state, error: authError }));
    };
  }, [authError]);

  return (
    <div className='username-section'>
      <h5>Username</h5>
      <form onSubmit={onSubmit}>
        <input 
          type='text'
          name='username'
          value={username}
          onChange={onChange}
          placeholder='Username'
        />

        <input 
          type='email'
          name='email'
          value={email}
          onChange={onChange}
          placeholder='Email'
        />
        <button type='submit'>Update details</button>

      {error && <p>{error.message}</p>}
    </form>
    </div>
  );
};

export default UsernameAndEmailSection;
