import React from 'react';

import './styles.css';
import LandingPageGallery from './gallery';

const LandingPage = () => {
  return (
    <div className='landing-page-container'>
      <div className="landing-page-gallery">
        <LandingPageGallery />
      </div>
      <div className="landing-page-signup">
        sign-up
      </div>
    </div>
  );
};

export default LandingPage;
