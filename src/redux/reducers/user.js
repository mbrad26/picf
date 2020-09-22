import {
  SIGNUP_REQUEST,
  SET_CURRENT_USER,
  SIGNUP_REQUEST_ERROR,
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
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case SIGNUP_REQUEST_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default: return state;
  };
};

export default userReducer;