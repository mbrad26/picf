import {
  // SIGNUP_REQUEST,
  SIGNUP_REQUEST_ERROR,
  // SIGNIN_REQUEST,
  SIGNIN_REQUEST_SUCCESS,
  SIGNIN_REQUEST_ERROR,
  // SIGNOUT_REQUEST,
  SIGNOUT_REQUEST_SUCCESS,
  SIGNOUT_REQUEST_ERROR,
} from '../constants/actionTypes';

const INITIAL_STATE = {
  currentUser: null,
  authError: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    // case SIGNUP_REQUEST:
    //   return {
    //     ...state,
    //   };
    case SIGNUP_REQUEST_ERROR:
      return {
        ...state,
        authError: action.payload,
      };
    // case SIGNIN_REQUEST:
    //   return {
    //     ...state,
    //   };
    case SIGNIN_REQUEST_SUCCESS: 
      return {
        ...state,
        authError: null,
        currentUser: action.payload,
      };
    case SIGNIN_REQUEST_ERROR:
      return {
        ...state,
        authError: action.payload,
      };
    case SIGNOUT_REQUEST_SUCCESS:
      return {
        ...state,
        authError: null,
        currentUser: null,
      };
    case SIGNOUT_REQUEST_ERROR:
      return {
        ...state,
        authError: action.payload,
      };
    default: return state;
  };
};

export default userReducer;