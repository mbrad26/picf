import React,  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { doUpdateEmailRequest } from '../../redux/actions/user';

const EmailSection = () => {
  const dispatch = useDispatch();
  const { authUser, authError } = useSelector(state => state.userState);
  const [state, setState] = useState({ email: authUser.email, error: authError});
  const { email, error } = state;

  const onSubmit = event => {
    event.preventDefault();
    dispatch(doUpdateEmailRequest(email));
  };

  const onChange = event => 
    setState({ ...state, email: event.target.value });

  return (
    <div className='section'>
      <h5>Email</h5>
      <form onSubmit={onSubmit}>
        <input 
          type='email'
          name='email'
          value={email}
          onChange={onChange}
          placeholder='Email'
        />
      <button type='submit'>Update email</button>

      {error && <p>{error.message}</p>}
    </form>
    </div>
  );
};

export default EmailSection;
