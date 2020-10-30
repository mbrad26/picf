import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import Overlay from './overlay';
import { 
  doSetActiveImage, 
  // doUpdateActiveImageLikes, 
} from '../../redux/actions/modal';

const INITIAL_STATE = {
  data: null,
  error: null,
};

const Images = ({ imagesData }) => {
  console.log('IMAGES');
  const dispatch = useDispatch();
  const { overlayError } = useSelector(state => state.imagesState);
  // const { isOpen } = useSelector(state => state.modalState);
  const [state, setState] = useState(INITIAL_STATE);
  const { data, error } = state;
  // const 

  const setActiveImage = img => {

    dispatch(doSetActiveImage(img));
    // dispatch(doUpdateActiveImageLikes(img.likes));
  } 

  useEffect(() =>  {
    if(imagesData) {
      setState(state => ({ ...state, data: imagesData }));
    };

    // if(isOpen) {
    //   dispatch(doSetActiveImage(img));
    // }
  }, [imagesData]);

  useEffect(() => {
    setState(state => ({ ...state, error: overlayError }));
  }, [overlayError]);

  return (
    <>
      {error && <p>{error.message}</p>}

      {data && data.map(img => 
        <div key={img.url} className='grid-item'>
          <Image 
            src={img.url} 
            alt={img.name} 
            onClick={() => setActiveImage(img)} 
          />
          {img && <Overlay data={img} />}
        </div>
      )}
    </>
  );
};

export default Images;
