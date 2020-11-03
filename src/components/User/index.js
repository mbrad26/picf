import React, { useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import './styles.css';
import Images from '../Gallery/images';
import { doUrlRequest } from '../../redux/actions/images';
import ImageModal from '../Modal';

const User = (props) => {
  console.log('USER', props);
  const dispatch = useDispatch();
  const { followers } = useSelector(state => state.userState);
  const { imagesData } = useSelector(state => state.imagesState);
  const { isOpen } = useSelector(state => state.modalState);
  const userUid = props.match.params.uid;
  const user = followers ? followers.filter(user => user.uid === userUid) : null;

  // console.log('USER_FOLLOWERS: ', user);

  useEffect(() => {
    dispatch(doUrlRequest(`images/${userUid}/timeline`));
  }, [dispatch, userUid]);

  return (
    <>
      <div className='user-avatar'>
        {user && 
          <>
            <Image id='avatar' src={user[0].avatarUrl} roundedCircle />
            <span> {user[0].username}</span>
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
