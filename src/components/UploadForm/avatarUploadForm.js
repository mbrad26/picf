import React, { useState, useEffect, useCallback } from 'react';
import { Form, ProgressBar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { types, INITIAL_STATE } from './utils';
import { doAvatarUploadRequest } from '../../redux/actions/user';

const AvatarUploadForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(INITIAL_STATE);
  const { uploadProgress, authError } = useSelector(state => state.userState);
  const { error, progress } = state;

  const onUpload = event => {
    const image = event.target.files[0];
    if(image && types.includes(image.type)) {
      dispatch(doAvatarUploadRequest(image));
      setState({ ...state, error: null});
    } else {
      setState({ ...state, error: 'Please select a png/jpeg file', progress: null });
    };
  };

  const setUploadProgress = useCallback(() => {
    setState(state => ({ ...state, progress: uploadProgress, error: null }));
  }, [uploadProgress]);
  
  const setError = useCallback(() => {
    setState(state => ({ ...state, error: authError }));
  }, [authError]);
  
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
          id="avatar-upload"
          hidden
        />
      </Form.Group>
      
      {progress && <ProgressBar now={Math.floor(progress)} />} 
      {error && <p>{error}</p>}
    </Form> 
  );
};

export default AvatarUploadForm;
