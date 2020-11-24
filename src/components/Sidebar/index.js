import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import Followers from '../Followers';
import Following from '../Following';
import UploadForm from '../UploadForm/uploadForm';
import * as ROUTES from  '../constants/routes';

const Sidebar = () => {
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
            <Following />
          </>
        : <>
            <UploadForm />

            <Nav.Link as={Link} to={ROUTES.ACCOUNT}>Profile</Nav.Link>
            <Nav.Link as={Link} to={ROUTES.SETTINGS}>Settings</Nav.Link>
            <Nav.Link as={Link} to={ROUTES.TIMELINE}>Timeline</Nav.Link>

            <Followers />
            <Following />
          </>
      } 
    </div>
  );
};

export default Sidebar;
