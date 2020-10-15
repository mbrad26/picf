import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';

import { 
  doAddLikeRequest, 
  doLikeStatusRequest, 
  doUnlikeRequest, 
  doLikesRequest,
} from '../../redux/actions/images';

const Overlay = ({ data }) => {
  console.log('OVERLAY');
  const dispatch = useDispatch();
  const { likedStatus, likes} = useSelector(state => state.imagesState);
  const { name, url } = data;

  console.log('LIKES_OVERLAY: ', likes);

  const handleLike = () => {
    dispatch(doAddLikeRequest({ url, name }));
  };

  const handleUnlike = () => {
    dispatch(doUnlikeRequest(name));
  };
  
  useEffect(() => {
    dispatch(doLikeStatusRequest());
    dispatch(doLikesRequest(name));
  }, [dispatch]);

  return (
    <div id='overlay'>
      {likedStatus && likedStatus.includes(name)
        ? <FavoriteTwoToneIcon fontSize='large' onClick={handleUnlike} />
        : <FavoriteBorderTwoToneIcon  onClick={handleLike} />
      } 
      <span>{likes}</span>
      <p>by {data.username}</p>
    </div>
  );
};

export default Overlay;
