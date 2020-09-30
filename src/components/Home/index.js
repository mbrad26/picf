import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import UploadForm from '../UploadForm';
import * as ROUTES from '../constants/routes';
import { doEmailVerificationRequest } from '../../redux/actions/user';

const Home = () => {
  console.log('HOME');
  const dispatch = useDispatch();
  const { authUser } = useSelector(state => state.userState);

  const onClick = () => dispatch(doEmailVerificationRequest());

  if(!authUser) return <Redirect to={ROUTES.SIGN_IN}/>

  if(authUser && 
    !authUser.emailVerified &&
    authUser.providerData
            .map(provider => provider.providerId)
            .includes('password')
  ) {
    return (
      <div>
        <p>
          Verify your E-Mail: Check you E-Mails (Spam folder 
          included) for a confirmation E-Mail or 
          send another confirmation E-Mail.
        </p>

        <button
          type="button" 
          onClick={onClick}
        >
          Send confirmation E-Mail
        </button>
      </div>
    );
  };

  return (
    <div>
      <h1>Home Page</h1>
      <UploadForm />
    </div>
  )
}

export default Home;
