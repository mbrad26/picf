import React from 'react';

import EmailSection from './emailSection';
import AvatarSection from './avatarSection';
import UsernameSection from './usernameSection';

const Profile = () => {
  return (
    <div className='profile-container'>
      <h3>Profile</h3>
      <hr />
      <div className='sections-container'>
        <AvatarSection />
        <UsernameSection />
        <EmailSection />
      </div>
    </div>
  );
};

export default Profile;
