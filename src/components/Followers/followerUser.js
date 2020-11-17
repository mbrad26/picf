import React, { lazy } from 'react';
// import { Avatar } from '@material-ui/core';
// import { Image } from 'react-bootstrap';

import Avatar from '../Account/avatar';

const Username = lazy(() => import('../Following/username'));

const FollowerUser = ({ user }) => {
  console.log('USER_FOLLOWERS: ', user);

  // <Image loading='eager' id='avatar' src={user.avatarUrl} roundedCircle />
  return (
    <>
      <Avatar uid={user.uid} />
      <Username username={user.username} />
    </>
  );
};

export default FollowerUser;