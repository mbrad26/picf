import React from 'react';

import SignUpForm from './signUpForm';

const SignUp = () => {
  console.log('SIGN_UP');

  return (
    <div className='component-container'>
      <h1>Sign Up</h1>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
