import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    dispatch(doUrlRequest())
  }, [dispatch]);

  useEffect(() =>  {
    if(imagesUrls) {
      setState(state => ({ ...state, urls: imagesUrls }))
    }
  }, [imagesUrls]);

  return (
    <div className='grid-container'>
      {urls && urls.map(data => 
        <div key={data.url} className='grid-item'>
          <Image src={data.url} alt='img' loading='lazy'/>
        </div>
      )}
    </div>
  );
};

export default Gallery;
