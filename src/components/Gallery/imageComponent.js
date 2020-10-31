import React from 'react';
import { Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import Overlay from './overlay';
import { 
  doSetActiveImage, 
} from '../../redux/actions/modal';

const ImageComponent = ({ img }) => {
  console.log('IMAGE_COMPONENT');
  const dispatch = useDispatch();
  
  const setActiveImage = image => dispatch(doSetActiveImage(image));

  return (
    <>
      <Image 
        src={img.url} 
        alt={img.name} 
        onClick={() => setActiveImage(img)} 
      />
      {img && <Overlay data={img} />}
    </>
  );
};

export default React.memo(ImageComponent);
