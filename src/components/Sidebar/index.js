import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import './style.css';
import Followers from '../Followers';
import UploadForm from '../UploadForm/uploadForm';
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
            
            <Nav.Link as={Link} to={ROUTES.HOME}><span className='titles'>Gallery</span></Nav.Link>
            <Nav.Link as={Link} to={ROUTES.HOME_TIMELINE}><span className='titles'>Timeline</span></Nav.Link>

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
