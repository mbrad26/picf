import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './style.css';
import Images from './images';
import ImageModal from '../Modal';
import { doUrlRequest } from '../../redux/actions/images';

const Gallery = () => {
  console.log('GALLERY: ');
  const dispatch = useDispatch();
  const { isOpen } = useSelector(state => state.modalState);

  useEffect(() => {
    dispatch(doUrlRequest());
  }, [dispatch]);

  return (
    <div className='grid-container'>
      <Images />

      {isOpen && <ImageModal />}
    </div>
  );
};

export default Gallery;
