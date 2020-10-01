import React, { useState, useEffect } from 'react';
import { storage, firestore } from '../../firebase/config';
import { useDispatch, useSelector } from 'react-redux';
import { doFileUploadRequest } from '../../redux/actions/images';

const types = ['image/jpeg', 'image/png'];

const INITIAL_STATE = {
  file: null,
  url: null,
  error: null,
  progress: '',
};

const UploadForm = () => {
  console.log('UPLOADFORM');
  const dispatch = useDispatch();
  const [state, setState] = useState(INITIAL_STATE);
  // const { authUser } = useSelector(state => state.userState);
  const { uploadProgress } = useSelector(state => state.imagesState);
  const { file, url, error, progress } = state;

  const onChange = event => {
    const selected = event.target.files[0];
    if(selected && types.includes(selected.type)) {
      dispatch(doFileUploadRequest(selected));

      // const ref = storage.ref(selected.name);
      
      // const store = firestore.collection('images').doc(authUser.uid);

      // ref.put(selected).on('state_changed', snapshot => {
      //   const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

      // });

      // ref.getDownloadURL();

    } else {
      console.log('ERROR');
      setState({ ...state, error: 'Please select a png/jpeg file'});
    }
  };

  useEffect(() => {
    setState(state => ({ ...state, progress: uploadProgress, error: null }))
  }, [uploadProgress]);

  return (
    <>
      <form>
        <input 
          type='file'
          onChange={onChange}
        />

        {file && <h4>{file}</h4>}
        {error && <p>{error}</p>}

        {url && <img src={url} />}

        {progress && <h4>Upload is <span>{progress}</span> % done</h4>}  
      </form>
    </>
  );
};

export default UploadForm;
