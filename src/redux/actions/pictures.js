import { FILE_UPLOAD_REQUEST } from '../constants/actionTypes';

const doFileUploadRequest = file => ({
  type: FILE_UPLOAD_REQUEST,
  payload: file
});

export { doFileUploadRequest };