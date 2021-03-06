import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { doSigninWithGoogleRequest } from '../../redux/actions/user';

const SignInWithGoogle = () => {
  const dispatch = useDispatch();
  const { authError } = useSelector(state => state.userState);
  const [error, setError] = useState(null);

  const onSubmit = event => {
    event.preventDefault();
    dispatch(doSigninWithGoogleRequest());
  };

  useEffect(() => {
    if(authError) {
      setError(authError);
    };
  }, [authError]);

  return (
    <form onSubmit={onSubmit}>
      <button type='submit'><i className="fab fa-google-plus-g"></i> Sign in with Google</button>

      {error && <p className='error'>{error.message}</p>}
    </form>
  );
};

export default SignInWithGoogle;
