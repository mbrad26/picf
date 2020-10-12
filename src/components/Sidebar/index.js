import React from 'react';
import { useHistory } from 'react-router-dom';

import Followers from '../Followers';
import UploadForm from '../UploadForm';

const Sidebar = () => {
  const history = useHistory();
  const isHome = history.location.pathname === '/home';

  console.log('HISTORY_LOCATION: ', history.location);

  return (
    <div className='container'>
      {isHome 
        ? <>
            <UploadForm />
            <Followers />
          </>
        : <>
            <UploadForm />
            <p>Pictures Wall</p>
            <Followers />
          </>
      }
    </div>
  );
};

export default Sidebar;
