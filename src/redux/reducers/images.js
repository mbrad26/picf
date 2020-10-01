import  { REQUEST_ERROR, SET_IMAGE_URL, SET_UPLOAD_PROGRESS } from '../constants/actionTypes';

const INITIAL_STATE = {
  file: null,
  uploadError: null,
  uploadProgress: '',
  imageUrl: '',
}

const imagesReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REQUEST_ERROR: 
      return {
        ...state,
        uploadError: action.payload,
      };
    case SET_UPLOAD_PROGRESS:
      return {
        ...state,
        uploadProgress: action.payload,
      };
    case SET_IMAGE_URL:
      return {
        ...state,
        imageUrl: action.payload,
      };
    default: return state;
  };
};

export default imagesReducer;