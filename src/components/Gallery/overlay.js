import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';

import { 
  doAddLikeRequest, 
  doLikeStatusRequest, 
  doUnlikeRequest, 
} from '../../redux/actions/images';

const Overlay = ({ data }) => {
  console.log('OVERLAY');
  const dispatch = useDispatch();
  const { likes } = useSelector(state => state.imagesState);
  const { name, url } = data;

  console.log('IMAGE_DATA: ', data )

  const handleLike = () => {
    dispatch(doAddLikeRequest({ url, name }));
  };

  const handleUnlike = () => {
    dispatch(doUnlikeRequest(name));
  };
  
  useEffect(() => {
    dispatch(doLikeStatusRequest());
  }, [dispatch]);

  return (
    <div id='overlay'>
      {likes && likes.includes(name)
        ? <FavoriteTwoToneIcon fontSize='large' onClick={handleUnlike} />
        : <FavoriteBorderTwoToneIcon  onClick={handleLike} />
      } 

      <p>by {data.username}</p>
    </div>
  );
};

export default Overlay;
