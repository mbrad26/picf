import React from 'react';
import { useDispatch } from 'react-redux';

import { doSignoutRequest } from '../../redux/actions/user';

const SignOut = () => {
  const dispatch = useDispatch();

  const onClick = () => dispatch(doSignoutRequest());

  return (
    <div>
      <a href="#" onClick={onClick}>Sign Out</a> 
    </div>
  )
};

export default SignOut;
