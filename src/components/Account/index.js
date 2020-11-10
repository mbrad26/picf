import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import './style.css';
import Profile from './profile';
import Sidebar from '../Sidebar';
import Gallery from '../Gallery';
import Settings from './settings';
import * as ROUTES from '../constants/routes';
import { doEmailVerificationRequest } from '../../redux/actions/user';

const Account = () => {
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
          Verify your E-Mail: Check your E-Mails (Spam folder 
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
    <div className='component-container'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='main'>
        <Switch>
          <Route exact path={ROUTES.ACCOUNT} component={Profile} />
          <Route path={ROUTES.SETTINGS} component={Settings} />
          <Route path={ROUTES.TIMELINE} component={Gallery} />
        </Switch>
      </div>
    </div>
  );
};

export default Account;
