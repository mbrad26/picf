import React,  { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { doUpdateUsernameRequest, doUpdateEmailRequest } from '../../redux/actions/user';

const UsernameAndEmailSection = () => {
  const dispatch = useDispatch();
  const { 
    authUser, 
    authError, 
    updateUsername, 
  } = useSelector(state => state.userState);
  const usernameRef = useRef(authUser.username);
  const emailRef = useRef(authUser.email);
  const [state, setState] = useState({ 
    username: authUser.username, 
    email: authUser.email,
    updateSuccess: updateUsername,
    error: authError,
  });
  const { username, email, updateSuccess, error } = state;

  console.log('USERNAME_REF: ', usernameRef);

  const onSubmit = event => {
    event.preventDefault();
    if(username != usernameRef.current || email != emailRef.current) {
      usernameRef.current = authUser.username;
      emailRef.current = authUser.email;
      // dispatch(doUpdateUserDetailsRequest({ username, email }));
    };
  };

  const onChange = event => 
    setState({ ...state, [event.target.name]: event.target.value });

  useEffect(() => {
    if(authError) {
      setState(state => ({ ...state, error: authError }));
    };
    if(updateUsername) {
      setState(state => ({ ...state, updateSuccess: updateUsername }));
    }
  }, [authError, updateUsername]);

  return (
    <div className='username-section'>
      <h5>Username</h5>

      {updateSuccess && <p style={{ 'color': 'green' }}>Username update successful</p>}

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
