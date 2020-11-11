import React, { useState, useEffect } from 'react';

import ImageComponent from './imageComponent';

const Images = ({ imagesData }) => {
  const [images, setImages] = useState();

  console.log('IMAGES_DATA: ', imagesData);
  
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
