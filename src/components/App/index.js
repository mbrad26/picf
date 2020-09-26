import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../Home';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import LandingPage from '../Landing';
import Navigation from '../Navigation';
import * as ROUTES from '../constants/routes';

const App = () => {
  const { currentUser } = useSelector(state => state.userState);

  console.log('APP CURRENT_USER: ', currentUser);

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
          </Switch>
        </div>
      </Router>
  );
};

export default App;
