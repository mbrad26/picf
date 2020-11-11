import React from 'react';
import { Image } from 'react-bootstrap';

const UserAvatar = ({ url }) => 
  <div className='avatar-container'>
    <Image id='avatar' src={url} roundedCircle />
  </div>

export default UserAvatar;
