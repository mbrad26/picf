import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from '../Landing';
import * as ROUTES from '../../constants/routes';
import Navigation from '../Navigation';

const App = () => {
  return (
      <Router>
        <div>
          <Navigation />

          <hr/>

          <Switch>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
          </Switch>
        </div>
      </Router>
  )
}

export default App;
