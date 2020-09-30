import React, { useState } from 'react';

const types = ['image/jpeg', 'image/png'];

const INITIAL_STATE = {
  file: null,
  error: null,
};

const UploadForm = () => {
  console.log('UPLOADFORM');
  const [state, setState] = useState(INITIAL_STATE);
  const { file, error } = state;

  const onChange = event => {
    const selected = event.target.files[0];
    if(selected && types.includes(selected.type)) {
      console.log(event.target.files);
      setState({ ...state, file: selected, error: null });
    } else {
      console.log('ERROR');
      setState({ ...state, error: 'Please select a png/jpeg file'});
    }
  }

  return (
    <form>
      <input 
        type='file'
        onChange={onChange}
      />

      {error && <p>{error}</p>}
    </form>
  );
};

export default UploadForm;
