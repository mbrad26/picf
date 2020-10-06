import React, { useState, useEffect } from 'react';
import { 
  Form,
  ProgressBar, 
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { doFileUploadRequest } from '../../redux/actions/images';

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

  useEffect(() => {
    setState(state => ({ ...state, progress: uploadProgress, error: null }));
  }, [uploadProgress]);

  useEffect(() => {
    setState(state => ({ ...state, error: uploadError }));
  }, [uploadError]);

  return (
    <Form>
      <Form.Group>
        <Form.File
          type='file'
          onChange={onUpload}
          multiple
        />
      </Form.Group>
      
      {error && <p>{error}</p>}
      {progress && <ProgressBar now={Math.floor(progress)} />} 
    </Form> 
  );
};

export default UploadForm;
