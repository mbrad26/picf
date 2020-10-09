import React from 'react';
import { Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import Overlay from './overlay';
import { doSetActiveImage } from '../../redux/actions/images';

const Images = ({ urls }) => {
  console.log('IMAGES');
  const dispatch = useDispatch();

  const setActiveImage = url => dispatch(doSetActiveImage(url));

  return (
    <>
      {urls && urls.map(data => 
        <div key={data.url} className='grid-item'>
          <Image 
            src={data.url} alt='img' 
            onClick={() => setActiveImage(data.url)} 
          />
          <Overlay url={data.url}/>
        </div>
      )}
    </>
  )
}

export default Images;
