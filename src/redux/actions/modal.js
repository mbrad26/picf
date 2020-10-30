import { 
  SET_ACTIVE_IMAGE, 
} from '../constants/actionTypes';

const doSetActiveImage = img => ({
  type: SET_ACTIVE_IMAGE,
  payload: img,
});

export { 
  doSetActiveImage,
};