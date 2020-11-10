import { doRequestError } from '../../../redux/actions/user';
import imagesReducer from '../../../redux/reducers/images';

describe('imagesReducer', () => {
  it('returns error message', () => {
    const state =  { uploadError: null, overlayError: null, uploadProgress: '', imagesData: '', likedStatus: null };
    const action = doRequestError({});
    const newState = imagesReducer(state, action);

    expect(newState).toEqual({ ...state, uploadError: {}});
  });
});