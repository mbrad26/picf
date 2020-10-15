import { 
  ADD_LIKE_REQUEST,
  CLOSE_MODAL,
  LIKE_STATUS_REQUEST,
  FILE_UPLOAD_REQUEST, 
  SET_ACTIVE_IMAGE, 
  SET_LIKE_ERROR, 
  SET_LIKE_STATUS, 
  SET_UPLOAD_PROGRESS,
  SET_URLS,
  UNLIKE_REQUEST,
  URL_REQUEST,
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

const doUnlikeRequest = name => ({
  type: UNLIKE_REQUEST,
  payload: name,
});

const doSetLikeStatus = likes => ({
  type: SET_LIKE_STATUS,
  payload: likes,
});

const doLikeStatusRequest = () => ({
  type: LIKE_STATUS_REQUEST,
});

const doSetLikeError = error => ({
  type: SET_LIKE_ERROR,
  payload: error,
});

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
  doSetLikeError,
};