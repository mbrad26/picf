import React, { lazy, Suspense } from 'react';
import Badge from '@material-ui/core/Badge';

import Avatar from './avatar';
import AvatarUploadForm from '../UploadForm/avatarUploadForm';

const AvatarSection = () => {
  const authUser = JSON.parse(localStorage.getItem('authUser'));
  const uid = authUser.uid;

  return (
    <div>
      <h3>Profile</h3>
      <hr />
      <h5>Profile picture</h5>
      <Badge 
        color="secondary" 
        overlap="circle" 
        badgeContent={<label htmlFor="avatar-upload"><span>Edit Avatar</span></label>}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <Avatar uid={uid} />
      </Badge>
      <AvatarUploadForm />
    </div>
  )
}

export default AvatarSection;
