import { 
  REQUEST_ERROR, 
  SET_FAVOURITE_STATUS, 
  SET_UPLOAD_PROGRESS, 
  SET_URLS,
} from '../constants/actionTypes';

const INITIAL_STATE = {
  uploadError: null,
  uploadProgress: '',
  imagesData: '',
  favourites: null,
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
        imagesData: action.payload,
      };
    case SET_FAVOURITE_STATUS:
      return {
        ...state,
        favourites: action.payload,
      };
    default: return state;
  };
};

export default imagesReducer;