import React, { lazy } from 'react';
import { Image } from 'react-bootstrap';

const Username = lazy(() => import('../Following/username'));

const FollowerUser = ({ user }) => {
  return (
    <>
      <Image loading='eager' id='avatar' src={user.avatarUrl} roundedCircle />
      <Username username={user.username} />
    </>
  );
};

export default FollowerUser;