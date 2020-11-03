import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image, Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const Following = () => {
  console.log('FOLLOWING');
  const dispatch = useDispatch();
  const { following } = useSelector(state => state.userState);

  useEffect(() => {

  }, []);

  return (
    <>
      <p className='titles'>Following</p>
      {following && 
        following.map(user => 
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
  )
}

export default Following;
