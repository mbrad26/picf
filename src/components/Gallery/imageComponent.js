import React from 'react';
import { Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import Overlay from './overlay';
import { 
  doSetActiveImage, 
} from '../../redux/actions/modal';

const ImageComponent = ({ img }) => {
  const dispatch = useDispatch();
  const { overlayError } = useSelector(state => state.imagesState);

  const setActiveImage = img => dispatch(doSetActiveImage(img));

  return (
    <>
      <Image 
        src={img.url} 
        alt={img.name} 
        onClick={() => setActiveImage(img)} 
      />
      {img && <Overlay data={img} />}
    </>
  )
}

export default ImageComponent;
