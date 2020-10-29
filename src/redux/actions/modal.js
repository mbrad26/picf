import { 
  SET_ACTIVE_IMAGE, 
  UPDATE_ACTIVE_IMAGE,
} from '../constants/actionTypes';

const doSetActiveImage = img => ({
  type: SET_ACTIVE_IMAGE,
  payload: img,
});

const doUpdateActiveImage = data => ({
  type: UPDATE_ACTIVE_IMAGE,
  payload: data,
});

export { 
  doSetActiveImage,
  doUpdateActiveImage,
};