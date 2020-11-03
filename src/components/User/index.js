import React, { useState, useEffect } from 'react';
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
  const { followers } = useSelector(state => state.userState);
  const { imagesData } = useSelector(state => state.imagesState);
  const { isOpen } = useSelector(state => state.modalState);
  const userUid = props.match.params.uid;
  const [state, setState] = useState(followers.some(user => user.uid === userUid));

  const user = followers ? followers.filter(user => user.uid === userUid) : null;

  console.log('USER_FOLLOWERS: ', userUid);

  const handleFollowUnfollow = () => {
    if(followers.some(user => user.uid === userUid)) {
      dispatch(doUnfollowRequest(userUid));
    } else {
      dispatch(doFollowRequest(userUid));
    };
  };

  // useEffect(() => {
  //   dispatch(doFollowStatusRequest());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(doUrlRequest(`images/${userUid}/timeline`));
  }, [dispatch, userUid]);

  return (
    <>
      <div className='user-avatar'>
        {user && 
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
