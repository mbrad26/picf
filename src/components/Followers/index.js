import React, { useEffect } from 'react';
import { Image, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { doFollowStatusRequest } from '../../redux/actions/user';

const Followers = () => {
  console.log('FOLLOWERS');
  const dispatch = useDispatch();
  const { followers } = useSelector(state => state.userState);

  useEffect(() => {
    dispatch(doFollowStatusRequest());
  }, [dispatch]);

  return (
    <>
      <p className='titles'>Followers</p>
      {followers &&
        followers.map(user => 
          <div key={user.uid}>
            <div className='sidebar-avatars'>
              <Nav.Link as={Link} to={`/home/users/${user.uid}`}>
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

export default Followers;
