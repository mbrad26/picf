import { 
  SET_URLS,
  REQUEST_ERROR, 
  SET_LIKE_STATUS, 
  SET_UPLOAD_PROGRESS,
  OVERLAY_ERROR,
  SET_FOLLOWERS,
} from '../constants/actionTypes';

const INITIAL_STATE = {
  uploadError: null,
  overlayError: null,
  uploadProgress: '',
  imagesData: '',
  likedStatus: null,
  followers: null,
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
    case SET_LIKE_STATUS:
      return {
        ...state,
        likedStatus: action.payload,
      };
    case OVERLAY_ERROR:
      return {
        ...state,
        overlayError: action.payload,
      };
    case SET_FOLLOWERS: 
      return {
        ...state,
        followers: action.payload,
      };
    default: return state;
  };
};

export default imagesReducer;