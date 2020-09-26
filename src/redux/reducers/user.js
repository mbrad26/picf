import {
  REQUEST_ERROR,
  SIGNIN_REQUEST_SUCCESS,
  SIGNOUT_REQUEST_SUCCESS,
} from '../constants/actionTypes';

const INITIAL_STATE = {
  currentUser: null,
  authError: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REQUEST_ERROR:
      return {
        ...state,
        authError: action.payload,
      };
    case SIGNIN_REQUEST_SUCCESS: 
      return {
        ...state,
        authError: null,
        currentUser: action.payload,
      };
    case SIGNOUT_REQUEST_SUCCESS:
      return {
        ...state,
        authError: null,
        currentUser: null,
      };
    default: return state;
  };
};

export default userReducer;