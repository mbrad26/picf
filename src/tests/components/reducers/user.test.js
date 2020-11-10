import { 
  doRequestError,
} from '../../../redux/actions/user';
import userReducer from '../../../redux/reducers/user';

describe('userReducer', () => {
  const state = {
    authUser: JSON.parse(localStorage.getItem('authUser')),
    authError: null,
    uploadProgress: '',
    avatarUrl: '',
    followers: null,
    following: null,
  };

  it('returns auth error', () => {
    const action = doRequestError({});
    const newState = userReducer(state, action);

    expect(newState).toEqual({ ...state, authError: {} });
  });
});