import React from 'react';
import { Image } from 'react-bootstrap';

const FollowedUser = ({ user }) => {
  return (
    <>
      <Image loading='eager' id='avatar' src={user.avatarUrl} roundedCircle />
      <span> {user.username}</span>
    </>
  )
}

export default FollowedUser;
