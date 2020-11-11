import React from 'react';

import Images from '../Gallery/images';

const UserImages = ({ imagesData }) => 
  <div className='grid-container'>
      <Images imagesData={imagesData} />
  </div>

export default UserImages;
