import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';

import { 
  doAddLikeRequest, 
  doLikeStatusRequest, 
  doUnlikeRequest, 
} from '../../redux/actions/images';

const LikeStatus = ({ data }) => {
  const dispatch = useDispatch();
  const { likedStatus } = useSelector(state => state.imagesState);
  const { url, name, userUid, likes } = data;

  const handleLike = () => dispatch(doAddLikeRequest({ url, name, userUid }));

  const handleUnlike = () => dispatch(doUnlikeRequest({ name, userUid }));
  
  useEffect(() => {
    dispatch(doLikeStatusRequest());
  }, [dispatch]);

  return (
    <em>
      {likedStatus && likedStatus.includes(name)
        ? <FavoriteTwoToneIcon className='icon' onClick={handleUnlike} />
        : <FavoriteBorderTwoToneIcon className='icon' onClick={handleLike} />
      } 
      <span> {likes && likes.length}</span>
    </em>
  );
};

export default LikeStatus;
