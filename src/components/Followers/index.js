import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Followers = () => {
  const dispatch = useDispatch();
  const { followers } = useSelector(state => state.imagesState);

  console.log('AUTH_USER: ', JSON.parse(localStorage.getItem('authUser')))

  useEffect(() => {
    // dispatch(doGetGollowersData());
  }, [dispatch]);

  return (
    <div>
      Followers
      {followers &&
        followers.map(user => 
          <p>
            {user.uid}
          </p>
        )
      }
    </div>
  );
};

export default Followers;
