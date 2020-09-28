import React from 'react';
import { useDispatch } from 'react-redux';

import { doSignoutRequest } from '../../redux/actions/user';

const SignOut = () => {
  const dispatch = useDispatch();

  const onClick = () => dispatch(doSignoutRequest());

  console.log('SIGN_OUT');
  
  return (
    <div>
      <div id='signout-link' onClick={onClick}>
        Sign Out
      </div>
    </div>
  )
};

export default SignOut;
