import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image, Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { doFollowStatusRequest } from '../../redux/actions/user';

const Followers = () => {
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
              <Nav.Link as={Link} to={`/home/followers/${user.uid}`}>
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
