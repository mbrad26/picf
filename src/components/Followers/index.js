import React from 'react';
import { Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Followers = () => {
  const { followers } = useSelector(state => state.imagesState);

  console.log('FOLLOWERS: ', followers)

  return (
    <>
      <p className='titles'>Followers</p>
      {followers &&
        followers.map(user => 
          <div key={user.uid}>
            <div className='sidebar-avatars'>
              {console.log('FOLLOWER_UID: ', user.uid)}
              <Image id='avatar' src={user.avatarUrl} roundedCircle/>
              <span> {user.username}</span>
            </div>
          </div>
        )
      }
    </>
  );
};

export default Followers;
