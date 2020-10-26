import React from 'react';

import Avatar from './avatar';
import AvatarUploadForm from '../UploadForm/avatarUploadForm';

const Profile = () => {
  const authUser = JSON.parse(localStorage.getItem('authUser'));
  const uid = authUser.uid;

  return (
    <div className='profile-container'>
      <h3>Profile</h3>
      <p>Avatar</p>
      <AvatarUploadForm />
      <Avatar uid={uid} />
      <p>Username</p>
      <p>Email</p>
      <p>Details</p>
    </div>
  )
}

export default Profile;
