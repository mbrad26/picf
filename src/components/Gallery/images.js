import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import Overlay from './overlay';
import { doSetActiveImage } from '../../redux/actions/images';

const INITIAL_STATE = {
  data: null,
  error: null,
};

const Images = ({ imagesData }) => {
  console.log('IMAGES');
  const dispatch = useDispatch();
  const { likeError, deleteError } = useSelector(state => state.imagesState);
  const [state, setState] = useState(INITIAL_STATE);
  const { data, error } = state;

  const setActiveImage = img => dispatch(doSetActiveImage(img));

  useEffect(() =>  {
    if(imagesData) {
      setState(state => ({ ...state, data: imagesData }));
    };
  }, [imagesData]);

  useEffect(() => {
    setState(state => ({ ...state, error: likeError }));
  }, [likeError]);

  useEffect(() => {
    setState(state => ({ ...state, error: deleteError }));
  }, [deleteError]);

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
          {img && <Overlay data={img}/>}
        </div>
      )}
    </>
  );
};

export default Images;
