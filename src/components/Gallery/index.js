import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './styles.css';
import Images from './images';
import ImageModal from '../Modal';
import { doUrlRequest } from '../../redux/actions/images';

const Gallery = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(state => state.modalState);
  const { authUser } = useSelector(state => state.userState);
  const { imagesData } = useSelector(state => state.imagesState);
  const history = useHistory();
  const path = history.location.pathname;
  const uid = authUser.uid;

  useEffect(() => {
    if(path.includes('/timeline')) {
      dispatch(doUrlRequest(`images/${uid}/timeline`));
    } else {
      dispatch(doUrlRequest('timeline'));
    }
  }, [dispatch, path, uid]);

  return (
    <div className='grid-container'>
      <Images imagesData={imagesData} />

      {isOpen && <ImageModal />}
    </div>
  );
};

export default Gallery;
