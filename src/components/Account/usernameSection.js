import React,  {useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

const UsernameSection = () => {
  const [state, setState] = useState({ username: '', error: null });
  const { username, error } = state;

  const onSubmit = event => {
    event.preventDefault();
  };

  const onChange = () => null;

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
      <button type='submit'>Sign Up</button>

      {error && <p>{error.message}</p>}
    </form>
    </div>
  )
}

export default UsernameSection;
