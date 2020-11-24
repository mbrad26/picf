import React from 'react';

import AvatarSection from './avatarSection';
import UsernameAndEmailSection from './usernameEmailSection';

const Profile = () => {

  return (
    <div className='profile-container'>
      <h3>Edit profile details</h3>
      <hr />
      <div className='sections-container'>
        <AvatarSection />
        <UsernameAndEmailSection />
      </div>
    </div>
  );
};

export default Profile;
