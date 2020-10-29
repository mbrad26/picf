import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';

import { 
  doAddLikeRequest, 
  doLikeStatusRequest, 
  doUnlikeRequest, 
} from '../../redux/actions/images';
// import { doUpdateActiveImageLikes } from '../../redux/actions/modal';

const LikeStatus = ({ data }) => {
  const dispatch = useDispatch();
  const { likedStatus } = useSelector(state => state.imagesState);
  const { isOpen, likesActiveImage } = useSelector(state => state.modalState);
  const { url, name, userUid, likes } = data;

  console.log('LIKES: ', likesActiveImage);

  const handleLike = () => {
    dispatch(doAddLikeRequest({ url, name, userUid }));
    
  };

  const handleUnlike = () => {
    dispatch(doUnlikeRequest({ name, userUid }));
  };
  
  useEffect(() => {
    // const updateActiveImage = async () => 
    //   await dispatch(doUpdateActiveImage(data));
    
    dispatch(doLikeStatusRequest());
    // if(isOpen) {
    //   dispatch(doUpdateActiveImageLikes(likes));
    // };
  }, [dispatch, isOpen, data]);

  return (
    <em>
      {likedStatus && likedStatus.includes(name)
        ? <FavoriteTwoToneIcon className='icon' onClick={handleUnlike} />
        : <FavoriteBorderTwoToneIcon className='icon' onClick={handleLike} />
      }
      {isOpen 
        ? <span className='numbers'> {likesActiveImage && likesActiveImage.length}</span>
        : likes 
        ? <span className='numbers'> {likes && likes.length}</span>
        : null
      }
    </em>
  );
};

export default LikeStatus;
