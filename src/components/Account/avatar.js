import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Avatar = () => {
  const { avatarUrl } = useSelector(state => state.userState);
  const [state, setState] = useState(avatarUrl);

  useEffect(() => {
    setState(avatarUrl);
  }, [avatarUrl]);

  return (
    <div>
      <Image id='avatar' src={state} roundedCircle/>
    </div>
  );
};

export default Avatar;
