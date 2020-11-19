import React from 'react';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';

const LandingPageOverlay = ({ data }) => {
  return (
    <div className='landing-page-overlay'>
      <div className="user-avatar-username">
        <p id='user'>{data.username}</p>
      </div>

      <div id="details">
        <em>
          <span><PeopleAltIcon className='icon' /> </span>
          <span className='numbers'>{data.ownerFollowers && data.ownerFollowers.length} </span>
          <span> < FavoriteTwoToneIcon className='icon' /> </span>
          <span className='numbers'>{data.likes.length}</span>
        </em>
      </div>
    </div>
  );
};

export default LandingPageOverlay;
