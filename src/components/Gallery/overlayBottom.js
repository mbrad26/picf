import React from 'react';
import { Image } from 'react-bootstrap';

import LikeStatus from './likeStatus';
import FollowStatus from './followStatus';

const OverlayBottom = ({ data }) => 
    <div className='overlay-bottom'>
      <div className='user-avatar-username'>
        <Image loading='eager' id='avatar' src={data.avatarUrl} roundedCircle />
        <p id='user'>{data.username}</p> 
      </div>

      <div id='details'>
        <FollowStatus data={data} />
        <LikeStatus data={data} />
      </div>
    </div>

export default React.memo(OverlayBottom);
