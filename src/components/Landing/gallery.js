import React, { useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { doUrlRequest } from '../../redux/actions/images';

const LandingPageGallery = () => {
  const dispatch = useDispatch();
  const { imagesData } = useSelector(state => state.imagesState);

  useEffect(() => {
    dispatch(doUrlRequest('timeline'));
  }, [dispatch]);

  return (
    <>
      {imagesData &&
        imagesData.map(obj => 
          <div className='landing-page-gallery-item' key={obj.url}>
            <Image src={obj.url} />
          </div>
      )}
    </>
  );
};

export default LandingPageGallery;
