import { 
  doFileUploadRequest, 
  doSetUploadProgress,
} from '../../../redux/actions/images';
import { FILE_UPLOAD_REQUEST, 
  SET_UPLOAD_PROGRESS,
 } from '../../../redux/constants/actionTypes';

describe('doFileUploadRequest', () => {
  it('returns the correct object', () => {
    const file = {};
    const expectedObject = {
      type: FILE_UPLOAD_REQUEST,
      payload: file,
    };

    expect(doFileUploadRequest(file)).toEqual(expectedObject);
  });
});

describe('doSetUploadProgress', () => {
  it('returns the correct object', () => {
    const progress = {};
    const expectedObject = {
      type: SET_UPLOAD_PROGRESS,
      payload: progress,
    };

    expect(doSetUploadProgress(progress)).toEqual(expectedObject);
  });
});