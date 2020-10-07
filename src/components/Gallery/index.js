import React, { useState, useEffect } from 'react';
import { 
  Image,
  Button, 
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import './style.css';
import ImageModal from '../Modal';
import { doSetActiveImage, doUrlRequest } from '../../redux/actions/images';

const INITIAL_STATE = {
  urls: null,
  error: null,
};

const Gallery = () => {
  console.log('GALLERY: ');
  const dispatch = useDispatch();
  const { imagesUrls, isOpen } = useSelector(state => state.imagesState);
  const [state, setState] = useState(INITIAL_STATE);
  const { urls } = state;

  const setActiveImage = url => dispatch(doSetActiveImage(url));

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
      {urls && urls.map(data => 
        <div key={data.url} className='grid-item'>
          <Image src={data.url} alt='img' loading='lazy'/>
          <Button onClick={() => setActiveImage(data.url)}>
            Open
          </Button>
        </div>
      )}

      {isOpen && <ImageModal />}
    </div>
  );
};

export default Gallery;
