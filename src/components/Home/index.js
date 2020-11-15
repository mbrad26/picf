import React, { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import './style.css';
import * as ROUTES from '../constants/routes';
// import { doEmailVerificationRequest } from '../../redux/actions/user';

const Sidebar = lazy(() => import('../Sidebar'));
const User = lazy(() => import('../User'));
const Gallery = lazy(() => import('../Gallery'));

const Home = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector(state => state.userState);

  // const onClick = () => dispatch(doEmailVerificationRequest());

  if(!authUser) return <Redirect to={ROUTES.SIGN_IN} />

  // if(authUser && 
  //   !authUser.emailVerified &&
  //   authUser.providerData
  //           .map(provider => provider.providerId)
  //           .includes('password')
  // ) {
  //   return (
  //     <div>
  //       <p>
  //         Verify your E-Mail: Check you E-Mails (Spam folder 
  //         included) for a confirmation E-Mail or 
  //         send another confirmation E-Mail.
  //       </p>

  //       <button
  //         type="button" 
  //         onClick={onClick}
  //       >
  //         Send confirmation E-Mail
  //       </button>
  //     </div>
  //   );
  // };

  return (
    <div className='home-container'>
      <div className='sidebar'>
        <Suspense fallback={<div>Loading...</div>}>
          <Sidebar />
        </Suspense>
      </div>
      <div className='main'>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path={ROUTES.HOME} component={Gallery} />
            <Route exact path={ROUTES.HOME_TIMELINE} component={Gallery} />
            <Route path={ROUTES.FOLLOWERS} component={User} />
            <Route path={ROUTES.FOLLOWING} component={User} />
          </Suspense>
        </Switch>
      </div>
    </div>
  );
};

export default Home;
