import React, { lazy } from 'react';
// import { Avatar } from '@material-ui/core';
// import { Image } from 'react-bootstrap';

import Avatar from '../Account/avatar';

const Username = lazy(() => import('./username'));

const FollowedUser = ({ user }) => {
  console.log('USER_FOLLOWED: ', user);

  // <Image loading='eager' id='avatar' src={user.avatarUrl} roundedCircle />
  return (
    <>
      <Avatar uid={user.uid} />
      <Username username={user.username} />
    </>
  );
};

export default FollowedUser;
