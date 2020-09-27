import {
  REQUEST_ERROR,
  SET_USER_SUCCESS,
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
    case SET_USER_SUCCESS:
      return {
        ...state,
        authError: null,
        currentUser: action.payload,
      }
    default: return state;
  };
};

export default userReducer;