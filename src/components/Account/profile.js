import React from 'react';

import EmailSection from './emailSection';
import AvatarSection from './avatarSection';
import UsernameSection from './usernameSection';

const Profile = () => {
  return (
    <div className='profile-container'>
      <AvatarSection />
      <UsernameSection />
      <EmailSection />
      <h5>Details</h5>
    </div>
  )
}

export default Profile;
