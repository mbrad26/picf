import { 
  doSetUrls, 
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
});