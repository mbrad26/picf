import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Avatar from '../Account/avatar';

const Followers = () => {
  const dispatch = useDispatch();
  const { followers } = useSelector(state => state.imagesState);

  console.log('FOLLOWERS: ', followers)

  useEffect(() => {
    // dispatch(doGetFollowersData());
  }, [dispatch]);

  return (
    <>
      <p className='titles'>Followers</p>
      {followers &&
        followers.map(user => 
          <div>
            <div className='sidebar-avatars'>
              {console.log('FOLLOWER_UID: ', user.uid)}
              <Avatar uid={user.uid} />
              <span> {user.username}</span>
            </div>
          </div>
        )
      }
    </>
  );
};

export default Followers;
