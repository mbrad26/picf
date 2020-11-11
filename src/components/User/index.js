import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.css';
import ImageModal from '../Modal';
import UserImages from './userImages';
import UserAvatar from './userAvatar';
import UserDetails from './userDetails';
import { doUrlRequest } from '../../redux/actions/images';

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
  const user = ref.current ? ref.current.filter(user => user.uid === userUid) : null;
  const photos = imagesData.length;

  useEffect(() => {
    ref.current = users;
    dispatch(doUrlRequest(`images/${userUid}/timeline`));
  }, [dispatch, users, userUid]);

  return (
    <>
      <div className='user-avatar'>
        {user && user[0] && 
          <>
            <UserAvatar url={user[0].avatarUrl} />
            <UserDetails 
              user={user} 
              photos={photos}
              userUid={userUid} 
              following={following}
              selectedUser={selectedUser} 
            />
          </>
        }
      </div>
      <hr />
      <UserImages imagesData={imagesData} />

      {isOpen && <ImageModal />}
    </>
  );
};

export default User;
