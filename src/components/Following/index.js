import React, { useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { doFollowingStatusRequest } from '../../redux/actions/user';

const FollowedUser = lazy(() => import('./followedUser'));

const Following = () => {
  const dispatch = useDispatch();
  const { following } = useSelector(state => state.userState);

  useEffect(() => {
    dispatch(doFollowingStatusRequest());
  }, [dispatch]);

  return (
    <>
      <p className='titles'>Following</p>

      <Suspense fallback={<p>Loading...</p>}>
        {following && 
          following.map(user => 
            <div className='sidebar-avatars' key={user.uid}>
              <Nav.Link as={Link} to={`/home/following/${user.uid}`}>
                <FollowedUser user={user} />
              </Nav.Link>
            </div>
          )
        }
      </Suspense>
    </>
  );
};

export default Following;
