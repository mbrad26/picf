import { doSetActiveImage, } from '../../../redux/actions/modal';
import modalReducer from '../../../redux/reducers/modal';

describe('modalReducer', () => {
  const state = {
    isOpen: false,
    activeImage: '',
  };

  it('returns the active image', () => {
    const action = doSetActiveImage({});
    const newState = modalReducer(state, action);

    expect(newState).toEqual({ ...state, isOpen: true, activeImage: {} });
  });
});