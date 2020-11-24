import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import EmailSection from './emailSection';
import AvatarSection from './avatarSection';
import UsernameSection from './usernameSection';
import { doUpdateEmailRequest, doUpdateUsernameRequest } from '../../redux/actions/user';

const INITIAL_STATE = {
  username: null,
  email: null,
};

const Profile = () => {
  const dispatch = useDispatch();
  const [state, setUsernameAndEmail] = useState(INITIAL_STATE);
  const { username, email } = state;

  useEffect(() => {
    if(username) {
      dispatch(doUpdateUsernameRequest(username));
    }

  }, [dispatch, username]);

  return (
    <div className='profile-container'>
      <h3>Edit profile details</h3>
      <hr />
      <div className='sections-container'>
        <AvatarSection />
        <UsernameSection setUsernameAndEmail={setUsernameAndEmail} />
        <EmailSection setUsernameAndEmail={setUsernameAndEmail} />
      </div>
    </div>
  );
};

export default Profile;
