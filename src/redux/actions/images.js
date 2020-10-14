import { 
  ADD_FAVOURITE_REQUEST,
  CLOSE_MODAL,
  FAVOURITE_STATUS_REQUEST,
  FILE_UPLOAD_REQUEST, 
  SET_ACTIVE_IMAGE, 
  SET_FAVOURITE_ERROR, 
  SET_FAVOURITE_STATUS, 
  SET_UPLOAD_PROGRESS,
  SET_URLS,
  UNFAVOUR_REQUEST,
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

const doAddFavouriteRequest = data => ({
  type: ADD_FAVOURITE_REQUEST,
  payload: data,
});

const doUnfavourRequest = name => ({
  type: UNFAVOUR_REQUEST,
  payload: name,
});

const doSetFavouriteStatus = favourites => ({
  type: SET_FAVOURITE_STATUS,
  payload: favourites,
});

const doFavouriteStatusRequest = () => ({
  type: FAVOURITE_STATUS_REQUEST,
});

const doSetFavouriteError = error => ({
  type: SET_FAVOURITE_ERROR,
  payload: error,
});

export { 
  doFileUploadRequest, 
  doSetUploadProgress,
  doUrlRequest,
  doSetUrls,
  doSetActiveImage,
  doCloseModal,
  doAddFavouriteRequest,
  doUnfavourRequest,
  doSetFavouriteStatus,
  doFavouriteStatusRequest,
  doSetFavouriteError,
};