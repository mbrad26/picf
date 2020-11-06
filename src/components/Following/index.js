import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image, Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { doFollowingStatusRequest } from '../../redux/actions/user';

const Following = () => {
  console.log('FOLLOWING');
  const dispatch = useDispatch();
  const { following } = useSelector(state => state.userState);

  useEffect(() => {
    dispatch(doFollowingStatusRequest());
  }, [dispatch]);

  return (
    <>
      <p className='titles'>Following</p>
      {following && 
        following.map(user => 
          <div key={user.uid}>
            <div className='sidebar-avatars'>
              <Nav.Link as={Link} to={`/home/following/${user.uid}`}>
                <Image id='avatar' src={user.avatarUrl} roundedCircle />
                <span> {user.username}</span>
              </Nav.Link>
            </div>
          </div>
        )
      }
    </>
  );
};

export default Following;
