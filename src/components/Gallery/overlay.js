import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import { doAddFavouriteRequest } from '../../redux/actions/images';

const Overlay = ({ data }) => {
  console.log('OVERLAY');
  const dispatch = useDispatch();
  const { authUser } = useSelector(state => state.userState);

  // console.log('AUTHUSER: ', data);

  const handleFavourite = url => dispatch(doAddFavouriteRequest(url));

  return (
    <div id='overlay'>
      <StarBorderIcon onClick={() => handleFavourite(data.url)} />
      <p>by {authUser.username}</p>
    </div>
  );
};

export default Overlay;
