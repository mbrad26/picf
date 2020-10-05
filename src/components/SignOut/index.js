import React, { Children } from 'react';
import { useDispatch } from 'react-redux';

import { doSignoutRequest } from '../../redux/actions/user';

const SignOut = (props, ref) => {
  const dispatch = useDispatch();

  const onClick = () => dispatch(doSignoutRequest());

  console.log('SIGN_OUT');
  
  return (
    <div ref={ref} {...props}>
      <div id='signout-link' onClick={onClick}>
        Sign Out
        {Children.props}
      </div>
    </div>
  )
};

export default React.forwardRef(SignOut);
