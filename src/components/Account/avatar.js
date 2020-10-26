import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { doGetAvatarUrl } from '../../redux/actions/user';

const Avatar = () => {
  const dispatch = useDispatch();
  const { avatarUrl } = useSelector(state => state.userState);
  const [state, setState] = useState(avatarUrl);

  useEffect(() => {
    dispatch(doGetAvatarUrl());
    setState(avatarUrl);
  }, [dispatch, avatarUrl]);

  return (
    <>
      <Image id='avatar' src={state} roundedCircle/>
    </>
  );
};

export default Avatar;
