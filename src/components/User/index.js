import React from 'react';
import { Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import './styles.css';

const User = (props) => {
  console.log('USER', props);
  const { followers } = useSelector(state => state.userState);
  const userUid = props.match.params.uid;
  const user = followers.filter(user => user.uid === userUid);

  console.log('USER_FOLLOWERS: ', user);

  return (
    <div className='user-container'>
      <div className='user-details'>
        <div className='user-avatar'>
          <Image id='avatar' src={user[0].avatarUrl} roundedCircle />
          <span> {user[0].username}</span>
        </div>
      </div>
    </div>
  );
};

export default User;
