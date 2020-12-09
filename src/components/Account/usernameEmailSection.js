import React,  { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { doUpdateUsernameRequest, doUpdateEmailRequest } from '../../redux/actions/user';

const UsernameAndEmailSection = () => {
  const dispatch = useDispatch();
  const { authUser, authError, updateUsername } = useSelector(state => state.userState);
  const usernameRef = useRef(authUser.username);
  const emailRef = useRef(authUser.email);
  const [state, setState] = useState({ 
    username: authUser.username, 
    email: authUser.email,
    updateSuccess: updateUsername,
    error: authError,
    isOpen: false,
    password: '',
  });
  const { username, email, updateSuccess, error, isOpen, password } = state;

  console.log('USERNAME_REF: ', emailRef);
  console.log('USERNAME: ', email);
  console.log('AUTHUSER_USERNAME: ', authUser.email);

  const onChange = event => 
    setState({ ...state, [event.target.name]: event.target.value });

  const onSubmit = event => {
    event.preventDefault();
    if(username !== usernameRef.current) {
      dispatch(doUpdateUsernameRequest(username));
    };
    
    if(email !== emailRef.current) {
      setState({ ...state, isOpen: true });
      emailRef.current = authUser.email;
      if(password != '') dispatch(doUpdateEmailRequest({ email, password }));
    };
  };

  useEffect(() => {
    if(authError) {
      setState(state => ({ ...state, error: authError }));
    };
    if(updateUsername) {
      setState(state => ({ ...state, updateSuccess: updateUsername }));
      usernameRef.current = authUser.username;
    };
  }, [authError, updateUsername, authUser.username]);

  return (
    <div className='username-section'>
      <h5>Username</h5>

      {updateSuccess && <p style={{ 'color': 'green' }}>Username update successful</p>}
      {error && <p style={{ 'color': 'red' }}>Username update fail</p>}

      <form onSubmit={onSubmit}>
        <input 
          type='text'
          name='username'
          value={username}
          onChange={onChange}
          placeholder='Username'
        />

        <button type='submit'>Update Username</button>

        <input 
          type='email'
          name='email'
          value={email}
          onChange={onChange}
          placeholder='Email'
          />

        {isOpen && 
          <>
            <p>Please enter your password</p>
            <input 
              type='password'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='Password'
            />
          </>
        }

        <button type='submit'>Update Email</button>
      </form>
    </div>
  );
};

export default UsernameAndEmailSection;
