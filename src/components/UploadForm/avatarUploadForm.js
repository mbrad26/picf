import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { 
  Form,
  ProgressBar, 
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { types, INITIAL_STATE } from './utils';
import { doAvatarUploadRequest } from '../../redux/actions/images';

const AvatarUploadForm = () => {
  console.log('AVATAR_UPLOAD_FORM');
  const dispatch = useDispatch();
  const history = useHistory();
  const [state, setState] = useState(INITIAL_STATE);
  const { uploadProgress, uploadError } = useSelector(state => state.imagesState);
  const { error, progress } = state;

  console.log('PATHNAME: ', history.location.pathname);

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
    if(history.location.pathname === '/account') {
      setState(state => ({ ...state, progress: uploadProgress, error: null }));
    }
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
        />
      </Form.Group>
      
      {progress && <ProgressBar now={Math.floor(progress)} />} 
      {error && <p>{error}</p>}
    </Form> 
  );
};

export default AvatarUploadForm;
