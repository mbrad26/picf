import  { REQUEST_ERROR } from '../constants/actionTypes';

const INITIAL_STATE = {
  file: null,
  uploadError: null,
}

const picturesReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REQUEST_ERROR: 
      return {
        ...state,
        uploadError: action.payload,
      };
    default: return state;
  };
};

export default picturesReducer;