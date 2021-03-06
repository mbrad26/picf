import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { doGetAvatarUrl } from '../../redux/actions/user';

const Avatar = ({ uid }) => {
  const dispatch = useDispatch();
  const { avatarUrl } = useSelector(state => state.userState);
  const [state, setState] = useState(avatarUrl);

  useEffect(() => {
    uid && dispatch(doGetAvatarUrl(uid));
    setState(avatarUrl);
  }, [dispatch, uid, avatarUrl]);

  return (
    <div className='image-container'>
      <Image loading='eager' id='avatar' src={state} roundedCircle/>
    </div>
  );
};

export default Avatar;
