import { doSetUploadProgress } from '../../../redux/actions/images';
import { doRequestError } from '../../../redux/actions/user';
import imagesReducer from '../../../redux/reducers/images';

describe('imagesReducer', () => {
  const initialState = { 
    uploadError: null, 
    overlayError: null, 
    uploadProgress: '', 
    imagesData: '', 
    likedStatus: null, 
  };

  it('returns error message', () => {
    const state =  initialState;
    const action = doRequestError({});
    const newState = imagesReducer(state, action);

    expect(newState).toEqual({ ...state, uploadError: {}});
  });

  it('returns upload progress', () => {
    const state = initialState;
    const action = doSetUploadProgress({});
    const newState = imagesReducer(state, action);

    expect(newState).toEqual({ ...state, uploadProgress: {}});
  });
});