import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import './styles.css';
import { 
  doFollowRequest, 
  doUnfollowRequest,
  doSelectedUserRequest,
} from '../../redux/actions/user';

const UserDetails = ({ 
  user, 
  photos, 
  userUid,
  following, 
  selectedUser 
}) => {
  const dispatch = useDispatch();
  const isFollowing = following && following.some(user => user.uid === userUid);
  const [state, setState] = useState(isFollowing);
  
  const year = selectedUser ? new Date(selectedUser.joined.seconds * 1000).getFullYear() : null;

  const handleFollowUnfollow = () => {
    if(state) {
      dispatch(doUnfollowRequest(userUid));
    };
    if(!state) {
      dispatch(doFollowRequest(userUid));
    };
  };

  useEffect(() => {
    dispatch(doSelectedUserRequest(userUid));
    setState(isFollowing);
  }, [dispatch, userUid, isFollowing]);

  return (
    <div className='details-container'>
      <div className='username-button'>
        <span id='username'> {user[0].username}</span>
        <Button 
          type='submit'
          variant='light' 
          onClick={handleFollowUnfollow}
        >
          {state
            ? <span>Unfollow</span>
            : <span>Follow</span>
          }
        </Button>
      </div>
      <div className='user-details'>
        <div className='followers-following'>
          <span>{selectedUser && selectedUser.followers.length} Followers</span>
          <span> * {selectedUser && selectedUser.following && selectedUser.following.length} Following</span>
        </div>
        <div className='photos-joined'>
          <span id='photos'>{photos} Photos </span>
          <span>  Joined {year}</span>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
