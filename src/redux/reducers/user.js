import {
  REQUEST_ERROR,
  SET_AVATAR_URL,
  SET_USER_SUCCESS,
  SET_AVATAR_UPLOAD_PROGRESS,
  SET_FOLLOWERS,
  SET_FOLLOWING,
  SET_SELECTED_USER,
  RESET_AUTHUSER,
} from '../constants/actionTypes';

const INITIAL_STATE = {
  authUser: JSON.parse(localStorage.getItem('authUser')),
  authError: null,
  uploadProgress: '',
  avatarUrl: '',
  followers: null,
  following: null,
  selectedUser: null,
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
      };
    case RESET_AUTHUSER:
      return {
        ...state,
        avatarUrl: '',
        authError: null,
        followers: null,
        following: null,
      };
    case SET_AVATAR_UPLOAD_PROGRESS:
      return {
        ...state,
        uploadProgress: action.payload,
      };
    case SET_AVATAR_URL:
      return {
        ...state,
        avatarUrl: action.payload,
      };
    case SET_FOLLOWERS: 
      return {
        ...state,
        followers: action.payload,
      };
    case SET_FOLLOWING:
      return {
        ...state,
        following: action.payload,
      };
    case SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload,
      };
    default: return state;
  };
};

export default userReducer;