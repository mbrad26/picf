import { 
  SET_ACTIVE_IMAGE, 
  UPDATE_ACTIVE_IMAGE_LIKES,
  UPDATE_ACTIVE_IMAGE_FOLLOWERS, 
} from '../constants/actionTypes';

const doSetActiveImage = img => ({
  type: SET_ACTIVE_IMAGE,
  payload: img,
});

const doUpdateActiveImageLikes = likes => ({
  type: UPDATE_ACTIVE_IMAGE_LIKES,
  payload: likes,
});

const doUpdateActiveImageFollowers = followers => ({
  type: UPDATE_ACTIVE_IMAGE_FOLLOWERS,
  payload: followers,
});

export { 
  doSetActiveImage,
  doUpdateActiveImageLikes,
  doUpdateActiveImageFollowers,
};