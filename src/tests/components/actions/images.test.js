import { 
  doFileUploadRequest, 
  doSetUploadProgress,
  doUrlRequest,
  doSetUrls,
  doAddLikeRequest,
  doUnlikeRequest,
  doSetLikeStatus,
  doLikeStatusRequest,
  doDeleteRequest,
  doOverlayError,
} from '../../../redux/actions/images';
import { 
  ADD_LIKE_REQUEST,
  DELETE_REQUEST,
  FILE_UPLOAD_REQUEST, 
  LIKE_STATUS_REQUEST, 
  OVERLAY_ERROR, 
  SET_LIKE_STATUS, 
  SET_UPLOAD_PROGRESS,
  SET_URLS,
  UNLIKE_REQUEST,
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

describe('doAddLikeRequest', () => {
  it('returns the correct object', () => {
    const data = {};
    const expectedObject = {
      type: ADD_LIKE_REQUEST,
      payload: data,
    };

    expect(doAddLikeRequest(data)).toEqual(expectedObject);
  });
});

describe('doUnlikeRequest', () => {
  it('returns the correct object', () => {
    const data = {};
    const expectedObject = {
      type: UNLIKE_REQUEST,
      payload: data,
    };

    expect(doUnlikeRequest(data)).toEqual(expectedObject);
  });
});

describe('doSetLikeStatus', () => {
  it('returns the correct object', () => {
    const likes = {};
    const expectedObject = {
      type:SET_LIKE_STATUS,
      payload: likes,
    };

    expect(doSetLikeStatus(likes)).toEqual(expectedObject);
  });
});

describe('doLikeStatusRequest', () => {
  it('returns the correct object', () => {
    const expectedObject = {
      type: LIKE_STATUS_REQUEST,
    };

    expect(doLikeStatusRequest()).toEqual(expectedObject);
  });
});

describe('doDeleteRequest', () => {
  it('returns the correct object', () => {
    const name = {};
    const expectedObject = {
      type: DELETE_REQUEST,
      payload: name,
    };
    expect(doDeleteRequest(name)).toEqual(expectedObject);
  });
});

describe('doOverlayError', () => {
  it('returns the correct object', () => {
    const error = {};
    const expectedObject = {
      type: OVERLAY_ERROR,
      payload: error,
    };

    expect(doOverlayError(error)).toEqual(expectedObject);
  });
});
