import React from 'react';

import UploadForm from '../UploadForm';

const Sidebar = () => {
  return (
    <div className='container'>
      <UploadForm />
      <p>
        Following
      </p>
      <p>
        Followers
      </p>
    </div>
  );
};

export default Sidebar;
