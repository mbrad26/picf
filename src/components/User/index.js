import React from 'react';

const User = (props) => {
  console.log('USER', props);

  return (
    <>
      <h1 style={{ 'color': 'red' }}>User</h1>
      <p>{props.match.params.uid}</p>
    </>
  );
};

export default User;
