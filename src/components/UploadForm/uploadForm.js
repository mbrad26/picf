import React, { useState, useEffect, useCallback } from 'react';
import { 
  Form,
  ProgressBar, 
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { types, INITIAL_STATE } from './utils';
import { doFileUploadRequest } from '../../redux/actions/images';

const UploadForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(INITIAL_STATE);
  const { uploadProgress, uploadError } = useSelector(state => state.imagesState);
  const { error, progress } = state;

  const onUpload = event => {
    const images = event.target.files;
    for (const selected in images) {
      if(images[selected] && types.includes(images[selected].type)) {
        dispatch(doFileUploadRequest(images[selected]));
        setState({ ...state, error: null});
      } else {
        setState({ ...state, error: 'Please select a png/jpeg file', progress: null });
      };
    };
  };

  const setUploadProgress = useCallback(() => {
    setState(state => ({ ...state, progress: uploadProgress, error: null }));
  }, [uploadProgress]);
  
  const setError = useCallback(() => {
    setState(state => ({ ...state, error: uploadError }));
  }, [uploadError]);
  
  useEffect(() => {
    setUploadProgress();
    if(uploadProgress === 100) {
      setState(state => ({ ...state, progress: null }));
    };
  }, [setUploadProgress, uploadProgress]);

  useEffect(() => {
    setError();
  }, [setError]);

  return (
    <Form>
      <Form.Group>
        <Form.File
          type='file'
          onChange={onUpload}
          multiple
        />
      </Form.Group>
      
      {progress && <ProgressBar now={Math.floor(progress)} />} 
      {error && <p>{error}</p>}
    </Form> 
  );
};

export default React.memo(UploadForm);
