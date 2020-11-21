import React from 'react';

import './styles.css';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import LandingPageGallery from './gallery';
import * as ROUTES from '../constants/routes';

const LandingPage = () => {
  return (
    <div className='landing-page-container'>
      <div className="landing-page-gallery">
        <LandingPageGallery />
      </div>
      <div className="landing-page-signup">
        <SignIn />
      </div>
    </div>
  );
};

export default LandingPage;
