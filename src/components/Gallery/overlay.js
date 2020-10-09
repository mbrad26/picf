import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';

import { doAddFavouriteRequest, doUnfavourRequest } from '../../redux/actions/images';

const Overlay = ({ data }) => {
  console.log('OVERLAY');
  const dispatch = useDispatch();
  const { authUser } = useSelector(state => state.userState);

  const handleFavourite = (url, name) => {
    dispatch(doAddFavouriteRequest({ url, name }));
  };

  const handleUnFavourite = name => {
    dispatch(doUnfavourRequest(name));
  };

  return (
    <div id='overlay'>
      <FavoriteTwoToneIcon onClick={() => handleUnFavourite(data.name)} />
      <FavoriteBorderTwoToneIcon onClick={() => handleFavourite(data.url, data.name)} />
      
      <p>by {authUser.username}</p>
    </div>
  );
};

export default Overlay;
