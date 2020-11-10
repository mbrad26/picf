import { 
  doCloseModal,
  doSetActiveImage, 
} from '../../../redux/actions/modal';
import { 
  CLOSE_MODAL,
  SET_ACTIVE_IMAGE, 
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

describe('doCloseModal', () => {
  it('returns the correct object', () => {
    const expectedObject = {
      type: CLOSE_MODAL,
    };

    expect(doCloseModal()).toEqual(expectedObject);
  });
});
