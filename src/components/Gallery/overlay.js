import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { 
  doAddLikeRequest, 
  doLikeStatusRequest, 
  doUnlikeRequest, 
} from '../../redux/actions/images';

import { 
  storage, 
} from '../../firebase/config';

const Overlay = ({ data }) => {
  console.log('OVERLAY');
  const dispatch = useDispatch();
  const { likedStatus } = useSelector(state => state.imagesState);
  const { name, url } = data;

  const ref = storage.ref(name).name

  console.log('IMAGES_DATA_REF: ', ref);

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
      {likedStatus && likedStatus.includes(name)
        ? <FavoriteTwoToneIcon id='icon' onClick={handleUnlike} />
        : <FavoriteBorderTwoToneIcon id='icon' onClick={handleLike} />
      } 
      <span> {data.likes.length}</span>
      <p>by {data.username}</p>

      <HighlightOffIcon id='icon' />
    </div>
  );
};

export default Overlay;
