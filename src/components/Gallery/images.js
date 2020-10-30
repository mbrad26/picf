import React, { useState, useEffect } from 'react';

import ImageComponent from './imageComponent';

const Images = ({ imagesData }) => {
  console.log('IMAGES');
  const [images, setImages] = useState();

  useEffect(() =>  {
    if(imagesData) {
      setImages(imagesData);
    };
  }, [imagesData]);

  return (
    <>
      {images && images.map(img => 
        <div key={img.url} className='grid-item'>
          <ImageComponent img={img} />
        </div>
      )}
    </>
  );
};

export default Images;
