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
  const { followers, following } = useSelector(state => state.userState);
  const { imagesData } = useSelector(state => state.imagesState);
  const { isOpen } = useSelector(state => state.modalState);
  const userUid = props.match.params.uid;
  
  const users = props.history.location.pathname.includes('followers') 
                      ? followers
                      : following;

  const isFollowing = following && following.some(user => user.uid === userUid);
  const [state, setState] = useState(isFollowing);
  
  const user = ref.current ? ref.current.filter(user => user.uid === userUid) : null;

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
  }, [dispatch, userUid]);

  useEffect(() => {
    ref.current = users;
    dispatch(doUrlRequest(`images/${userUid}/timeline`));
    setState(isFollowing);
  }, [dispatch, users, following, userUid, isFollowing]);

  return (
    <>
      <div className='user-avatar'>
        {user && user[0] && 
          <>
            <Image id='avatar' src={user[0].avatarUrl} roundedCircle />
            <span id='username'> {user[0].username} </span>
            <Button 
              type='submit'
              variant='light' 
              onClick={handleFollowUnfollow}
            >
              {state
                ? 'Unfollow'  
                : 'Follow'
              }
            </Button>
            <div className='user-details'>
              <span>   Nr of followers</span>
              <span>     Following</span>

              <span>     Nr of pictures</span>
              <span>       Joined date</span>
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
