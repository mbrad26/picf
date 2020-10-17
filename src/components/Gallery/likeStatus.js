import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';

import { 
  doAddLikeRequest, 
  doLikeStatusRequest, 
  doUnlikeRequest, 
} from '../../redux/actions/images';

const LikeStatus = ({ name, url, likes, uid }) => {
  const dispatch = useDispatch();
  const { likedStatus } = useSelector(state => state.imagesState);

  const handleLike = () => dispatch(doAddLikeRequest({ url, name, uid }));

  const handleUnlike = () => dispatch(doUnlikeRequest({ name, uid }));
  
  useEffect(() => {
    dispatch(doLikeStatusRequest());
  }, [dispatch]);

  return (
    <>
      {likedStatus && likedStatus.includes(name)
        ? <FavoriteTwoToneIcon className='icon' onClick={handleUnlike} />
        : <FavoriteBorderTwoToneIcon className='icon' onClick={handleLike} />
      } 
      <span> {likes && likes.length}</span>
    </>
  );
};

export default LikeStatus;
