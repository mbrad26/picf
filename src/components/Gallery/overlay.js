import React from 'react';
import { useDispatch } from 'react-redux';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import { doAddFavouriteRequest } from '../../redux/actions/images';

const Overlay = ({ url }) => {
  const dispatch = useDispatch();

  const handleFavourite = url => dispatch(doAddFavouriteRequest(url));

  return (
    <div id='overlay'>
      <StarBorderIcon onClick={() => handleFavourite(url)} />
    </div>
  );
};

export default Overlay;
