import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './style.css';
import Images from './images';
import ImageModal from '../Modal';
import { doUrlRequest } from '../../redux/actions/images';

const Gallery = () => {
  console.log('GALLERY: ');
  const dispatch = useDispatch();
  const { isOpen } = useSelector(state => state.modalState);
  const { authUser } = useSelector(state => state.userState);
  const { imagesData } = useSelector(state => state.imagesState);
  const history = useHistory();
  const path = history.location.pathname;

  console.log('LOCATION: ', path);

  useEffect(() => {
    if(path.includes('/timeline')) {
      dispatch(doUrlRequest(`images/${authUser.uid}/timeline`));
    } else {

      dispatch(doUrlRequest('timeline'));
    }
  }, [dispatch, path]);

  return (
    <div className='grid-container'>
      <Images imagesData={imagesData} />

      {isOpen && <ImageModal />}
    </div>
  );
};

export default Gallery;
