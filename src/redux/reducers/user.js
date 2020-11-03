import {
  REQUEST_ERROR,
  SET_AVATAR_URL,
  SET_USER_SUCCESS,
  SET_AVATAR_UPLOAD_PROGRESS,
  SET_FOLLOWERS,
  SET_FOLLOWING
} from '../constants/actionTypes';

const INITIAL_STATE = {
  authUser: JSON.parse(localStorage.getItem('authUser')),
  authError: null,
  uploadProgress: '',
  avatarUrl: '',
  followers: null,
  following: null,
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
    default: return state;
  };
};

export default userReducer;