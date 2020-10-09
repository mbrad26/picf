import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import Overlay from './overlay';
import { doSetActiveImage } from '../../redux/actions/images';

const INITIAL_STATE = {
  data: null,
  error: null,
};

const Images = () => {
  console.log('IMAGES');
  const dispatch = useDispatch();
  const { imagesData } = useSelector(state => state.imagesState);
  const [state, setState] = useState(INITIAL_STATE);
  const { data } = state;

  const setActiveImage = url => dispatch(doSetActiveImage(url));

  useEffect(() =>  {
    if(imagesData) {
      setState(state => ({ ...state, data: imagesData }));
    };
  }, [imagesData]);

  return (
    <>
      {data && data.map(img => 
        <div key={img.url} className='grid-item'>
          <Image 
            src={img.url} 
            alt={img.name} 
            onClick={() => setActiveImage(img.url)} 
          />
          {img && <Overlay data={img}/>}
        </div>
      )}
    </>
  )
}

export default Images;
