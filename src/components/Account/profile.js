import React from 'react';

import AvatarSection from './avatarSection';
import UsernameSection from './usernameSection';

const Profile = () => {
  return (
    <div className='profile-container'>
      <AvatarSection />
      <UsernameSection />
      <h5>Email</h5>
      <h5>Details</h5>
    </div>
  )
}

export default Profile;
