import { 
  FILE_UPLOAD_REQUEST, 
  SET_UPLOAD_PROGRESS,
  SET_URLS,
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

export { 
  doFileUploadRequest, 
  doSetUploadProgress,
  doUrlRequest,
  doSetUrls,
};