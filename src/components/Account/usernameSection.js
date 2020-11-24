import React,  { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const UsernameSection = ({ setUsernameAndEmail }) => {
  const { authUser, authError } = useSelector(state => state.userState);
  const [state, setState] = useState({ username: authUser.username, error: authError});
  const { username, error } = state;

  const onSubmit = event => {
    event.preventDefault();
    setUsernameAndEmail({ ...state, username });
  };

  const onChange = event => 
    setState({ ...state, username: event.target.value });

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
      <button type='submit'>Update username</button>

      {error && <p>{error.message}</p>}
    </form>
    </div>
  );
};

export default UsernameSection;
