import React, { useState, useEffect, useRef } from 'react';
import { Image, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import './styles.css';
import Images from '../Gallery/images';
import { doUrlRequest } from '../../redux/actions/images';
import { 
  doFollowRequest, 
  doUnfollowRequest,
  doSelectedUserRequest,
} from '../../redux/actions/user';
import ImageModal from '../Modal';

const User = (props) => {
  const dispatch = useDispatch();
  const ref = useRef();
  const { followers, following, selectedUser } = useSelector(state => state.userState);
  const { imagesData } = useSelector(state => state.imagesState);
  const { isOpen } = useSelector(state => state.modalState);
  const userUid = props.match.params.uid;
  const users = props.history.location.pathname.includes('followers') 
                      ? followers
                      : following;
  const isFollowing = following && following.some(user => user.uid === userUid);
  const [state, setState] = useState(isFollowing);

  const user = ref.current ? ref.current.filter(user => user.uid === userUid) : null;

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
    ref.current = users;
    dispatch(doSelectedUserRequest(userUid));
    dispatch(doUrlRequest(`images/${userUid}/timeline`));
    setState(isFollowing);
  }, [dispatch, users, following, userUid, isFollowing]);

  return (
    <>
      <div className='user-avatar'>
        {user && user[0] && 
          <>
            <div className='avatar-container'>
              <Image id='avatar' src={user[0].avatarUrl} roundedCircle />
            </div>
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
                  <span> * {selectedUser && selectedUser.following.length} Following</span>
                </div>
                <div className='photos-joined'>
                  <span id='photos'>{imagesData.length} Photos </span>
                  <span>  Joined {year}</span>
                </div>
              </div>
            </div>
          </>
        }
      </div>
      <hr />
      <div className='grid-container'>
        <Images imagesData={imagesData} />
      </div>

      {isOpen && <ImageModal />}
    </>
  );
};

export default User;
