import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';

import { 
  doAddFavouriteRequest, 
  doFavouriteStatusRequest, 
  doUnfavourRequest, 
} from '../../redux/actions/images';

const Overlay = ({ data }) => {
  console.log('OVERLAY');
  const dispatch = useDispatch();
  const { authUser } = useSelector(state => state.userState);
  const { favourites } = useSelector(state => state.imagesState);
  const { name, url } = data;

  const handleFavourite = () => {
    dispatch(doAddFavouriteRequest({ url, name }));
  };

  const handleUnFavourite = () => {
    dispatch(doUnfavourRequest(name));
  };
  
  useEffect(() => {
    dispatch(doFavouriteStatusRequest());
  }, [dispatch]);

  return (
    <div id='overlay'>
      {favourites && favourites.includes(name)
        ? <FavoriteTwoToneIcon fontSize='large' onClick={handleUnFavourite} />
        : <FavoriteBorderTwoToneIcon  onClick={handleFavourite} />
      } 

      <p>by {authUser.username}</p>
    </div>
  );
};

export default Overlay;
