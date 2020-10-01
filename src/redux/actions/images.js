import { 
  FILE_UPLOAD_REQUEST, 
  SET_UPLOAD_PROGRESS 
} from '../constants/actionTypes';

const doFileUploadRequest = file => ({
  type: FILE_UPLOAD_REQUEST,
  payload: file,
});

const doSetUploadProgress = progress => ({
  type: SET_UPLOAD_PROGRESS,
  payload: progress,
});

export { 
  doFileUploadRequest, 
  doSetUploadProgress,
};