import { 
  doSetActiveImage 
} from '../../../redux/actions/modal';
import { 
  SET_ACTIVE_IMAGE 
} from '../../../redux/constants/actionTypes';

describe('doSetActiveImage', () => {
  it('returns the correct object', () => {
    const img = {};
    const expectedObject = {
      type: SET_ACTIVE_IMAGE,
      payload: img,
    };

    expect(doSetActiveImage(img)).toEqual(expectedObject);
  });
});