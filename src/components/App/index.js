import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../Home';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import LandingPage from '../Landing';
import Navigation from '../Navigation';
import PasswordReset from '../PasswordForget';
import * as ROUTES from '../constants/routes';
import { doSetUserRequest } from '../../redux/actions/user';

const App = () => {
  const { authUser } = useSelector(state => state.userState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(doSetUserRequest());
  }, [dispatch]);

  console.log('APP', authUser);

  return (
      <Router>
        <div>
          <Navigation />

          <hr/>

          <Switch>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.SIGN_IN} component={SignIn} />
            <Route path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.PASSWORD_RESET} component={PasswordReset} />
          </Switch>
        </div>
      </Router>
  );
};

export default App;
