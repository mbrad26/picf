import React, { useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { doFollowStatusRequest } from '../../redux/actions/user';

const FollowerUser = lazy(() => import('./followerUser'));

const Followers = () => {
  const dispatch = useDispatch();
  const { followers } = useSelector(state => state.userState);

  useEffect(() => {
    dispatch(doFollowStatusRequest());
  }, [dispatch]);

  return (
    <>
      <p className='titles'>Followers</p>

      <Suspense fallback={<p>Loading...</p>}>
        {followers &&
          followers.map(user => 
            <div key={user.uid}>
              <div className='sidebar-avatars'>
                <Nav.Link as={Link} to={`/home/followers/${user.uid}`}>
                  <FollowerUser user={user} />
                </Nav.Link>
              </div>
            </div>
          )
        }
      </Suspense>
    </>
  );
};

export default Followers;
