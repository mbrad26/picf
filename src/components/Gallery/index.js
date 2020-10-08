import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './style.css';
import Images from './images';
import ImageModal from '../Modal';
import { doUrlRequest } from '../../redux/actions/images';

const INITIAL_STATE = {
  urls: null,
  error: null,
};

const Gallery = () => {
  console.log('GALLERY: ');
  const dispatch = useDispatch();
  const { imagesUrls, isOpen } = useSelector(state => state.imagesState);
  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {
    dispatch(doUrlRequest());
  }, [dispatch]);

  useEffect(() =>  {
    if(imagesUrls) {
      setState(state => ({ ...state, urls: imagesUrls }));
    };
  }, [imagesUrls]);

  return (
    <div className='grid-container'>
      <Images urls={state.urls} />

      {isOpen && <ImageModal />}
    </div>
  );
};

export default Gallery;
