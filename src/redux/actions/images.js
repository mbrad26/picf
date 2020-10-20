import { 
  ADD_LIKE_REQUEST,
  CLOSE_MODAL,
  LIKE_STATUS_REQUEST,
  FILE_UPLOAD_REQUEST, 
  SET_ACTIVE_IMAGE, 
  SET_LIKE_STATUS, 
  SET_UPLOAD_PROGRESS,
  SET_URLS,
  UNLIKE_REQUEST,
  URL_REQUEST,
  DELETE_REQUEST,
  OVERLAY_ERROR,
  FOLLOW_REQUEST,
  // FOLLOW_STATUS_REQUEST,
  // SET_FOLLOWERS,
} from '../constants/actionTypes';

const doFileUploadRequest = file => ({
  type: FILE_UPLOAD_REQUEST,
  payload: file,
});

const doSetUploadProgress = progress => ({
  type: SET_UPLOAD_PROGRESS,
  payload: progress,
});

const doUrlRequest = collection => ({
  type: URL_REQUEST,
  payload: collection,
});

const doSetUrls = urls => ({
  type: SET_URLS,
  payload: urls,
});

const doSetActiveImage = img => ({
  type: SET_ACTIVE_IMAGE,
  payload: img,
});

const doCloseModal = () => ({
  type: CLOSE_MODAL,
});

const doAddLikeRequest = data => ({
  type: ADD_LIKE_REQUEST,
  payload: data,
});

const doUnlikeRequest = data => ({
  type: UNLIKE_REQUEST,
  payload: data,
});

const doSetLikeStatus = likes => ({
  type: SET_LIKE_STATUS,
  payload: likes,
});

const doLikeStatusRequest = () => ({
  type: LIKE_STATUS_REQUEST,
});

const doDeleteRequest = name => ({
  type: DELETE_REQUEST,
  payload: name,
});

const doFollowRequest = data => ({
  type: FOLLOW_REQUEST,
  payload: data,
});

const doOverlayError = error => ({
  type: OVERLAY_ERROR,
  payload: error,
});

// const doFollowStatusRequest = uid => ({
//   type: FOLLOW_STATUS_REQUEST,
//   payload: uid,
// });

// const doSetFollowers = followers => ({
//   type: SET_FOLLOWERS,
//   payload: followers,
// });

export { 
  doFileUploadRequest, 
  doSetUploadProgress,
  doUrlRequest,
  doSetUrls,
  doSetActiveImage,
  doCloseModal,
  doAddLikeRequest,
  doUnlikeRequest,
  doSetLikeStatus,
  doLikeStatusRequest,
  doDeleteRequest,
  doOverlayError,
  doFollowRequest,
  // doFollowStatusRequest,
  // doSetFollowers,
};