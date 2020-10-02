import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doFileUploadRequest, doImageUrlRequest } from '../../redux/actions/images';

const types = ['image/jpeg', 'image/png'];

const INITIAL_STATE = {
  error: null,
  progress: null,
};

const UploadForm = () => {
  console.log('UPLOADFORM');
  const dispatch = useDispatch();
  const [state, setState] = useState(INITIAL_STATE);
  const { uploadProgress, uploadError } = useSelector(state => state.imagesState);
  const { error, progress } = state;

  const onChange = event => {
    const selected = event.target.files[0];
    if(selected && types.includes(selected.type)) {
      dispatch(doFileUploadRequest(selected));
      setState({ ...state, error: null});
    } else {
      setState({ ...state, error: 'Please select a png/jpeg file', progress: null });
    };
  };

  useEffect(() => {
    setState(state => ({ ...state, progress: uploadProgress, error: null }));
  }, [uploadProgress]);

  useEffect(() => {
    setState(state => ({ ...state, error: uploadError }));
  }, [uploadError]);

  return (
    <form>
      <input 
        type='file'
        onChange={onChange}
      />

      {error && <p>{error}</p>}
      {progress && <h4>Upload is <span>{Math.floor(progress)}</span> % done</h4>}  
    </form>
  );
};

export default UploadForm;
