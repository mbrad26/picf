import React,  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { doUpdateUsernameRequest } from '../../redux/actions/user';

const UsernameSection = () => {
  const dispatch = useDispatch();
  const { authUser, authError } = useSelector(state => state.userState);
  const [state, setState] = useState({ username: authUser.username, error: authError});
  const { username, error } = state;

  console.log('USERNAME: ', username);

  const onSubmit = event => {
    event.preventDefault();
    dispatch(doUpdateUsernameRequest(username));
  };

  const onChange = event => 
    setState({ ...state, username: event.target.value });

  return (
    <div>
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
  )
}

export default UsernameSection;
