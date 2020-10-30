import { 
  CLOSE_MODAL, 
  SET_ACTIVE_IMAGE, 
} from '../constants/actionTypes';

const INITIAL_STATE = {
  isOpen: false,
  activeImage: '',
}

const modalReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
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

export default modalReducer;