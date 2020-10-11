import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';

import { doAddFavouriteRequest, doUnfavourRequest } from '../../redux/actions/images';

const Overlay = ({ data }) => {
  console.log('OVERLAY');
  const dispatch = useDispatch();
  const { authUser } = useSelector(state => state.userState);
  const { isFav } = useSelector(state => state.imagesState);
  const [fav, setFav] = useState(false);
  const { name, url } = data;

  console.log('ISFAV: ', fav);

  const handleFavourite = () => {
    dispatch(doAddFavouriteRequest({ url, name }));
    // localStorage.setItem('favourite', name);
  };

  const handleUnFavourite = () => {
    dispatch(doUnfavourRequest(name));
    // localStorage.removeItem('favourite');
  };

  
  useEffect(() => {
    if(isFav.includes(name)) {
      setFav(true)
    } else {
      setFav(false)
    }
  }, [isFav, name]);

  return (
    <div id='overlay'>
      {fav
       ? <FavoriteTwoToneIcon onClick={handleUnFavourite} />
       : <FavoriteBorderTwoToneIcon onClick={handleFavourite} />
      } 

      <p>by {authUser.username}</p>
    </div>
  );
};

export default Overlay;
