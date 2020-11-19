import React, { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import './style.css';
import * as ROUTES from '../constants/routes';
import { doEmailVerificationRequest } from '../../redux/actions/user';

const Sidebar = lazy(() => import('../Sidebar'));
const Profile = lazy(() => import('./profile'));
const Settings = lazy(() => import('./settings'));
const Gallery = lazy(() => import('../Gallery'));

const Account = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector(state => state.userState);

  const onClick = () => dispatch(doEmailVerificationRequest());

  if(!authUser) return <Redirect to={ROUTES.LANDING} />

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
        <Suspense fallback={<div>Loading...</div>}>
          <Sidebar />
        </Suspense>
      </div>
      <div className='main'>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path={ROUTES.ACCOUNT} component={Profile} />
            <Route path={ROUTES.SETTINGS} component={Settings} />
            <Route path={ROUTES.TIMELINE} component={Gallery} />
          </Suspense>
        </Switch>
      </div>
    </div>
  );
};

export default Account;
