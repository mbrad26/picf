import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import { doAddFavouriteRequest } from '../../redux/actions/images';

const Overlay = ({ data }) => {
  console.log('OVERLAY');
  const dispatch = useDispatch();
  const { authUser } = useSelector(state => state.userState);

  const handleFavourite = (url, name) => dispatch(doAddFavouriteRequest({ url, name }));

  return (
    <div id='overlay'>
      <StarBorderIcon onClick={() => handleFavourite(data.url, data.name)} />
      <p>by {authUser.username}</p>
    </div>
  );
};

export default Overlay;
