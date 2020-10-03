import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doUrlRequest } from '../../redux/actions/images';

const INITIAL_STATE = {
  urls: null,
  error: null,
};

const Gallery = () => {
  console.log('GALLERY: ');
  const dispatch = useDispatch();
  const { imagesUrls } = useSelector(state => state.imagesState);
  const [state, setState] = useState(INITIAL_STATE);
  const { urls } = state;

  useEffect(() =>  {
    dispatch(doUrlRequest());
  }, [dispatch]);

  useEffect(() => {
    if(imagesUrls) {
      setState(state => ({ ...state, urls: imagesUrls }))
    }
  }, [imagesUrls]);

  return (
    <div>
      Gallery

      {urls && urls.map(url => <img src={url} />)}
    </div>
  );
};

export default Gallery;
