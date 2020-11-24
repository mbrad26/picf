import React from 'react';

import Avatar from './avatar';
import AvatarUploadForm from '../UploadForm/avatarUploadForm';

const AvatarSection = () => {
  const authUser = JSON.parse(localStorage.getItem('authUser'));
  const uid = authUser && authUser.uid;

  return (
    <div className='avatar-section'>
      <h5>Profile avatar</h5>
      <Avatar uid={uid} />
      <AvatarUploadForm />
    </div>
  )
}

export default AvatarSection;
