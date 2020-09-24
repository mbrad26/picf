import {
  SIGNUP_REQUEST,
  SIGNUP_REQUEST_ERROR,
  SIGNIN_REQUEST_SUCCESS,
} from '../constants/actionTypes';

const INITIAL_STATE = {
  currentUser: null,
  credentials: {},
  error: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        credentials: action.payload,
      };
    case SIGNUP_REQUEST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SIGNIN_REQUEST_SUCCESS: 
      return {
        ...state,
        error: null,
        currentUser: action.payload,
      };
    default: return state;
  };
};

export default userReducer;