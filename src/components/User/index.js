import React from 'react';
import { Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const User = (props) => {
  console.log('USER', props);
  const { followers } = useSelector(state => state.userState);
  const userUid = props.match.params.uid;
  const user = followers.filter(user => user.uid === userUid);

  console.log('USER_FOLLOWERS: ', user);

  return (
    <>
      <h1 style={{ 'color': 'red' }}>User</h1>
      <div>
        <Image id='avatar' src={user[0].avatarUrl} roundedCircle/>
        <p>{user[0].username}</p>
      </div>

    </>
  );
};

export default User;
