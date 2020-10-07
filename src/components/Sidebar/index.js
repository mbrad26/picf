import React from 'react';

import Followers from '../Followers';
import UploadForm from '../UploadForm';

const Sidebar = () => {
  return (
    <div className='container'>
      <UploadForm />
      <Followers />
    </div>
  );
};

export default Sidebar;
