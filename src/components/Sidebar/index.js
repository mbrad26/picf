import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import Followers from '../Followers';
import UploadForm from '../UploadForm';
import * as ROUTES from  '../constants/routes';

const Sidebar = () => {
  console.log('SIDEBAR');
  const history = useHistory();
  const isHome = history.location.pathname.includes('/home');

  return (
    <div className='container'>
      {isHome 
        ? <>
            <UploadForm />
            
            <Nav.Link as={Link} to={ROUTES.HOME}>Gallery</Nav.Link>
            <Nav.Link as={Link} to={ROUTES.HOME_TIMELINE}>Timeline</Nav.Link>

            <Followers />
          </>
        : <>
            <UploadForm />

            <Nav.Link as={Link} to={ROUTES.ACCOUNT}>Profile</Nav.Link>
            <Nav.Link as={Link} to={ROUTES.SETTINGS}>Settings</Nav.Link>
            <Nav.Link as={Link} to={ROUTES.TIMELINE}>Timeline</Nav.Link>

            <Followers />
          </>
      } 
    </div>
  );
};

export default Sidebar;
