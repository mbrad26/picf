import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as ROUTES from '../constants/routes';

const Home = () => {
  console.log('HOME');
  const { authUser } = useSelector(state => state.userState);

  if(!authUser) return <Redirect to={ROUTES.SIGN_IN}/>

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default Home;
