import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignUp from '../SignUp';
import LandingPage from '../Landing';
import Navigation from '../Navigation';
import * as ROUTES from '../constants/routes';

const App = () => {
  return (
      <Router>
        <div>
          <Navigation />

          <hr/>

          <Switch>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
          </Switch>
        </div>
      </Router>
  )
}

export default App;
