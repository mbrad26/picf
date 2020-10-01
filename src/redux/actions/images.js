import { 
  SET_IMAGE_URL, 
  IMAGE_URL_REQUEST, 
  FILE_UPLOAD_REQUEST, 
  SET_UPLOAD_PROGRESS,
} from '../constants/actionTypes';

const doFileUploadRequest = file => ({
  type: FILE_UPLOAD_REQUEST,
  payload: file,
});

const doSetUploadProgress = progress => ({
  type: SET_UPLOAD_PROGRESS,
  payload: progress,
});

const doImageUrlRequest = file => ({
  type: IMAGE_URL_REQUEST,
  payload: file,
});

const doSetImageUrl = url => ({
  type: SET_IMAGE_URL,
  payload: url,
});

export { 
  doFileUploadRequest, 
  doSetUploadProgress,
  doImageUrlRequest,
  doSetImageUrl,
};