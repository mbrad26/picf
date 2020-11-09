import { 
  doFileUploadRequest, 
  doSetUploadProgress,
  doUrlRequest,
  doSetUrls,
  doCloseModal,
} from '../../../redux/actions/images';
import { 
  CLOSE_MODAL,
  FILE_UPLOAD_REQUEST, 
  SET_UPLOAD_PROGRESS,
  SET_URLS,
  URL_REQUEST,
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

describe('doUrlRequest', () => {
  it('returns the correct object', () => {
    const collection = {};
    const expectedObject = {
      type: URL_REQUEST,
      payload: collection,
    };

    expect(doUrlRequest(collection)).toEqual(expectedObject);
  });
});

describe('doSetUrls', () => {
  it('returns the correct object', () => {
    const urls = {};
    const expectedObject = {
      type: SET_URLS,
      payload: urls,
    };

    expect(doSetUrls(urls)).toEqual(expectedObject);
  });
});

describe('doCloseModal', () => {
  it('returns the correct object', () => {
    const expectedObject = {
      type: CLOSE_MODAL,
    };

    expect(doCloseModal()).toEqual(expectedObject);
  });
});

describe('', () => {
  it('returns the correct object', () => {

  });
});

describe('', () => {
  it('returns the correct object', () => {

  });
});

describe('', () => {
  it('returns the correct object', () => {

  });
});

describe('', () => {
  it('returns the correct object', () => {

  });
});
describe('', () => {
  it('returns the correct object', () => {

  });
});

describe('', () => {
  it('returns the correct object', () => {

  });
});

describe('', () => {
  it('returns the correct object', () => {

  });
});