import { 
  ADD_FAVOURITE_REQUEST,
  CLOSE_MODAL,
  FILE_UPLOAD_REQUEST, 
  SET_ACTIVE_IMAGE, 
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

const doUrlRequest = () => ({
  type: URL_REQUEST,
});

const doSetUrls = urls => ({
  type: SET_URLS,
  payload: urls,
});

const doSetActiveImage = url => ({
  type: SET_ACTIVE_IMAGE,
  payload: url,
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

export { 
  doFileUploadRequest, 
  doSetUploadProgress,
  doUrlRequest,
  doSetUrls,
  doSetActiveImage,
  doCloseModal,
  doAddFavouriteRequest,
  doUnfavourRequest,
};