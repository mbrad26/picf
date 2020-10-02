import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doFileUploadRequest } from '../../redux/actions/images';

const types = ['image/jpeg', 'image/png'];

const INITIAL_STATE = {
  error: null,
  progress: null,
  album: '',
};

const UploadForm = () => {
  console.log('UPLOADFORM');
  const dispatch = useDispatch();
  const [state, setState] = useState(INITIAL_STATE);
  const { uploadProgress, uploadError } = useSelector(state => state.imagesState);
  const { error, progress, album } = state;

  const onSubmit = event => null;

  const onChange = event => 
    setState({ ...state, album: event.target.value });

  const onUpload = event => {
    const images = event.target.files;
    console.log('IMAGES: ', images);
    for (const selected in images) {
      if(images[selected] && types.includes(images[selected].type)) {
        dispatch(doFileUploadRequest(images[selected]));
        setState({ ...state, error: null});
      } else {
        setState({ ...state, error: 'Please select a png/jpeg file', progress: null });
      };
    };
  };

  useEffect(() => {
    setState(state => ({ ...state, progress: uploadProgress, error: null }));
  }, [uploadProgress]);

  useEffect(() => {
    setState(state => ({ ...state, error: uploadError }));
  }, [uploadError]);

  return (
    <form onSubmit={onSubmit}>
      <input 
        type='text'
        name='album'
        value={album}
        onChange={onChange}
        placeholder='Album title'
      />
      <input 
        type='file'
        onChange={onUpload}
        multiple
      />
      <button type='submit'>Create album</button>

      {error && <p>{error}</p>}
      {progress && <h4>Upload is <span>{Math.floor(progress)}</span> % done</h4>} 
    </form> 
  );
};

export default UploadForm;
