import {
  REQUEST_ERROR,
  SET_USER_SUCCESS,
  SET_AVATAR_UPLOAD_PROGRESS,
} from '../constants/actionTypes';

const INITIAL_STATE = {
  authUser: JSON.parse(localStorage.getItem('authUser')),
  authError: null,
  uploadProgress: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REQUEST_ERROR:
      return {
        ...state,
        authError: action.payload,
      };
    case SET_USER_SUCCESS:
      return {
        ...state,
        authError: null,
        authUser: action.payload,
      }
    case SET_AVATAR_UPLOAD_PROGRESS:
      return {
        ...state,
        uploadProgress: action.payload,
      };
    default: return state;
  };
};

export default userReducer;