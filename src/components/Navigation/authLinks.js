import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core'

import SignOut from '../SignOut';
import * as ROUTES from '../constants/routes';

const AuthLinks = () => 
  <div>
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>
          <Typography align='right'>LANDING</Typography>
        </Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <SignOut />
      </li>
    </ul>
  </div>

export default AuthLinks;
