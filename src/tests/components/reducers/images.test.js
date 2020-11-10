import { 
  doSetUrls, 
  doOverlayError,
  doSetLikeStatus, 
  doSetUploadProgress,
} from '../../../redux/actions/images';
import { doRequestError } from '../../../redux/actions/user';
import imagesReducer from '../../../redux/reducers/images';

describe('imagesReducer', () => {
  const state = { 
    uploadError: null, 
    overlayError: null, 
    uploadProgress: '', 
    imagesData: '', 
    likedStatus: null, 
  };

  it('returns error message', () => {
    const action = doRequestError({});
    const newState = imagesReducer(state, action);

    expect(newState).toEqual({ ...state, uploadError: {}});
  });

  it('returns upload progress', () => {
    const action = doSetUploadProgress({});
    const newState = imagesReducer(state, action);

    expect(newState).toEqual({ ...state, uploadProgress: {}});
  });

  it('returns images urls', () => {
    const action = doSetUrls({});
    const newState = imagesReducer(state, action);

    expect(newState).toEqual({ ...state, imagesData: {}});
  });

  it('returns like status', () => {
    const action = doSetLikeStatus({});
    const newState = imagesReducer(state, action);

    expect(newState).toEqual({ ...state, likedStatus: {}});
  });

  it('returns overlay error', () => {
    const action = doOverlayError({});
    const newState = imagesReducer(state, action);

    expect(newState).toEqual({ ...state, overlayError: {}});
  });

  it('returns initial state', () => {
    const action = {};
    const newState = imagesReducer(state, action);

    expect(newState).toEqual(state);
  });
});