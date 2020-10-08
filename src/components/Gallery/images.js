import React from 'react';
import { Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

// import './style.css';
import { doSetActiveImage } from '../../redux/actions/images';

const Images = ({ urls }) => {
  console.log('IMAGES');
  const dispatch = useDispatch();

  const setActiveImage = url => dispatch(doSetActiveImage(url));

  const renderOverlay = (props) => 
    <div id='overlay' { ...props }>
      Image
    </div>

  return (
    <>
      {urls && urls.map(data => 
        <div key={data.url} className='grid-item'>
          <Image 
            src={data.url} alt='img' 
            onClick={() => setActiveImage(data.url)} 
          />
          <div id='overlay'>
            Image
          </div>
        </div>
      )}
    </>
  )
}

export default Images;
