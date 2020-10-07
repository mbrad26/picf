import React, { useState, useEffect, useCallback } from 'react';
import { 
  Image,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import './style.css';
import { doUrlRequest } from '../../redux/actions/images';

const INITIAL_STATE = {
  urls: null,
  error: null,
};

const Gallery = () => {
  console.log('GALLERY: ');
  const dispatch = useDispatch();
  const { imagesUrls } = useSelector(state => state.imagesState);
  const [state, setState] = useState(INITIAL_STATE);
  const { urls } = state;

  const setImages = useCallback(() => {
    if(imagesUrls) {
      setState(state => ({ ...state, urls: imagesUrls }))
    }
  }, [imagesUrls]);

  const urlRequest = useCallback(() => {
    dispatch(doUrlRequest())
  }, [dispatch]);

  useEffect(() => {
    urlRequest()
  }, [urlRequest]);

  useEffect(() =>  {
    setImages()
  }, [setImages]);

  return (
    <div className='grid-container'>
      {urls && urls.map(data => 
        <div key={data.url} className='grid-item'>
          <Image src={data.url} alt='img' />
        </div>
      )}
    </div>
  );
};

export default Gallery;
// export default React.memo(Gallery);
