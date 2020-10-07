import { 
  REQUEST_ERROR, 
  SET_UPLOAD_PROGRESS, 
  SET_URLS,
} from '../constants/actionTypes';

const INITIAL_STATE = {
  uploadError: null,
  uploadProgress: '',
  imagesUrls: '',
  activeImage: '',
};

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
    case SET_URLS:
      return {
        ...state,
        imagesUrls: action.payload,
      };
    default: return state;
  };
};

export default imagesReducer;