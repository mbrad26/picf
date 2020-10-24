import React from 'react';

import AvatarUploadForm from '../UploadForm/avatarUploadForm';

const Profile = () => {
  return (
    <div className='profile-container'>
      <h3>Profile</h3>
      <p>Avatar</p>
      <AvatarUploadForm />
      <p>Username</p>
      <p>Email</p>
      <p>Details</p>
    </div>
  )
}

export default Profile;
