import React from 'react';
import { useDispatch } from 'react-redux';

import './index.module.css';
import { doSignoutRequest } from '../../redux/actions/user';

const SignOut = () => {
  const dispatch = useDispatch();

  const onClick = () => dispatch(doSignoutRequest());

  return (
    <div>
      <button onClick={onClick}>Sign Out</button> 
    </div>
  )
};

export default SignOut;
