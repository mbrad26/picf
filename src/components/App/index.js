import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './style.css';
import Navigation from '../Navigation';
import * as ROUTES from '../constants/routes';
import { doSetUserRequest } from '../../redux/actions/user';

const Home = lazy(() => import('../Home'));
const SignUp = lazy(() => import('../SignUp'));
const Account = lazy(() => import('../Account'));
const LandingPage = lazy(() => import('../Landing'));
const PasswordReset = lazy(() => import('../PasswordForget'));

const App = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector(state => state.userState);

  useEffect(() => {
    dispatch(doSetUserRequest());
  }, [dispatch]);

  return (
    <Router>
      <div>
        {authUser && <Navigation />}

        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.ACCOUNT} component={Account} />
            <Route path={ROUTES.PASSWORD_RESET} component={PasswordReset} />
          </Suspense>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
