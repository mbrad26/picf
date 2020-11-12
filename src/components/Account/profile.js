import React from 'react';

import AvatarSection from './avatarSection';

const Profile = () => {
  return (
    <div className='profile-container'>
      <AvatarSection />
      
      <h5>Username</h5>
      <h5>Email</h5>
      <h5>Details</h5>
    </div>
  )
}

export default Profile;
