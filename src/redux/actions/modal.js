import { 
  CLOSE_MODAL, 
  SET_ACTIVE_IMAGE,
} from '../constants/actionTypes';

const doSetActiveImage = img => ({
  type: SET_ACTIVE_IMAGE,
  payload: img,
});

const doCloseModal = () => ({
  type: CLOSE_MODAL,
});

export { 
  doCloseModal,
  doSetActiveImage,
};