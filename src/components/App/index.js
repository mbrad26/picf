import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './style.css';
import User from '../User';
import Home from '../Home';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import Account from '../Account';
import LandingPage from '../Landing';
import Navigation from '../Navigation';
import PasswordReset from '../PasswordForget';
import * as ROUTES from '../constants/routes';
import { doSetUserRequest } from '../../redux/actions/user';

const App = () => {
  console.log('APP');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(doSetUserRequest());
  }, [dispatch]);
  
  // <Route path={ROUTES.FOLLOWERS} component={User} />
  // <Route path={ROUTES.FOLLOWING} component={User} />
  
  return (
    <Router>
      <div>
        <Navigation />

        <Switch>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route path={ROUTES.SIGN_IN} component={SignIn} />
          <Route path={ROUTES.ACCOUNT} component={Account} />
          <Route path={ROUTES.PASSWORD_RESET} component={PasswordReset} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
