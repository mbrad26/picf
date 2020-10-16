import { 
  SET_URLS,
  REQUEST_ERROR, 
  SET_LIKE_ERROR, 
  SET_LIKE_STATUS, 
  SET_UPLOAD_PROGRESS,
  DELETE_ERROR,
} from '../constants/actionTypes';

const INITIAL_STATE = {
  uploadError: null,
  likeError: null,
  deleteError: null,
  uploadProgress: '',
  imagesData: '',
  likedStatus: null,
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
    case SET_LIKE_ERROR:
      return {
        ...state,
        likeError: action.payload,
      };
    case DELETE_ERROR:
      return {
        ...state,
        deleteError: action.payload,
      };
    default: return state;
  };
};

export default imagesReducer;