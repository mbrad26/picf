import React from 'react';

import OverlayTop from './overlayTop';
import LikeStatus from './likeStatus';
import FollowStatus from './followStatus';

const OverlayBottom = ({ data }) => {
  return (
    <div className='overlay-bottom'>
      <p id='user'>{data.username}</p> 

      <div id='details'>
        <FollowStatus data={data} />
        <LikeStatus data={data} />
      </div>
    </div>
  );
};

export default OverlayBottom;
