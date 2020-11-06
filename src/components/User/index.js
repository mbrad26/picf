import React, { useState, useEffect, useRef } from 'react';
import { Image, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import './styles.css';
import Images from '../Gallery/images';
import { doUrlRequest } from '../../redux/actions/images';
import { 
  doFollowRequest, 
  doUnfollowRequest,
  doFollowStatusRequest, 
} from '../../redux/actions/user';
import ImageModal from '../Modal';

const User = (props) => {
  console.log('USER', props);
  const dispatch = useDispatch();
  const ref = useRef();
  const { followers, following } = useSelector(state => state.userState);
  const { imagesData } = useSelector(state => state.imagesState);
  const { isOpen } = useSelector(state => state.modalState);
  const userUid = props.match.params.uid;
  const users = props.history.location.pathname.includes('followers') 
                  ? followers
                  : following;
  const [state, setState] = useState(ref.current 
                                      ? ref.current.some(user => user.uid === userUid) 
                                      : null);

  const user = ref.current ? ref.current.filter(user => user.uid === userUid) : null;

  console.log('USER_FOLLOWERS: ', ref);
  // console.log('USER_UID: ', userUid);

  const handleFollowUnfollow = () => {
    if(users.some(user => user.uid === userUid)) {
      dispatch(doUnfollowRequest(userUid));
      setState(null);
    } else {
      dispatch(doFollowRequest(userUid));
      setState(user);
    };
  };

  // useEffect(() => {
  //   dispatch(doFollowStatusRequest());
  // }, [dispatch]);

  useEffect(() => {
    ref.current = users
    dispatch(doUrlRequest(`images/${userUid}/timeline`));
  }, [dispatch, users, userUid]);

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
              {state !== []
                ? 'Unfollow'
                : 'Follow'
              }
            </Button>
            <div>
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
