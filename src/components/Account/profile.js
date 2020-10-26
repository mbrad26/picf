import React from 'react';

import Avatar from './avatar';
import AvatarUploadForm from '../UploadForm/avatarUploadForm';

const Profile = () => {
  return (
    <div className='profile-container'>
      <h3>Profile</h3>
      <p>Avatar</p>
      <AvatarUploadForm />
      <Avatar />
      <p>Username</p>
      <p>Email</p>
      <p>Details</p>
    </div>
  )
}

export default Profile;
