import React,  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { doUpdateUsernameRequest } from '../../redux/actions/user';

const UsernameSection = () => {
  const dispatch = useDispatch();
  const { authUser, authError } = useSelector(state => state.userState);
  const [state, setState] = useState({ username: authUser.username, error: authError});
  const { username, error } = state;

  const onSubmit = event => {
    event.preventDefault();
    dispatch(doUpdateUsernameRequest(username));
  };

  const onChange = event => 
    setState({ ...state, username: event.target.value });

  useEffect(() => {
    if(authError) {
      setState(state => ({ ...state, error: authError }));
    };
  }, [authError]);

  return (
    <div className='section'>
      <h5>Username</h5>
      <form onSubmit={onSubmit}>
        <input 
          type='text'
          name='username'
          value={username}
          onChange={onChange}
          placeholder='Username'
        />
      <button type='submit'>Update username</button>

      {error && <p>{error.message}</p>}
    </form>
    </div>
  );
};

export default UsernameSection;
