import { 
  CLOSE_MODAL,
  REQUEST_ERROR, 
  SET_ACTIVE_IMAGE, 
  SET_UPLOAD_PROGRESS, 
  SET_URLS,
} from '../constants/actionTypes';

const INITIAL_STATE = {
  uploadError: null,
  uploadProgress: '',
  imagesUrls: '',
  activeImage: '',
  isOpen: false,
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
    case SET_ACTIVE_IMAGE:
      return {
        ...state,
        isOpen: true,
        activeImage: action.payload,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
        activeImage: '',
      };
    default: return state;
  };
};

export default imagesReducer;