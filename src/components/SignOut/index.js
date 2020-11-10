import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

import { doSignoutRequest } from '../../redux/actions/user';

const SignOut = () => {
  const dispatch = useDispatch();

  const onClick = () => dispatch(doSignoutRequest());
  
  return (
    <Button onClick={onClick}>Sign Out</Button>
  );
};

export default SignOut;
