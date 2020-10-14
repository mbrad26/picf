import { 
  REQUEST_ERROR, 
  SET_LIKE_ERROR, 
  SET_LIKE_STATUS, 
  SET_UPLOAD_PROGRESS, 
  SET_URLS,
} from '../constants/actionTypes';

const INITIAL_STATE = {
  uploadError: null,
  likeError: null,
  uploadProgress: '',
  imagesData: '',
  likes: null,
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
        likes: action.payload,
      };
    case SET_LIKE_ERROR:
      return {
        ...state,
        likeError: action.payload,
      };
    default: return state;
  };
};

export default imagesReducer;