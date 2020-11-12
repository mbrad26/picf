import { 
  doSetFollowers,
  doSetAvatarUrl,
  doRequestError, 
  doSetUserSuccess,
  doSetAvatarUploadProgress,
  doSetFollowing,
  doSetSelectedUser,
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
    selectedUser: null,
  };

  it('returns auth error', () => {
    const action = doRequestError({});
    const newState = userReducer(state, action);

    expect(newState).toEqual({ ...state, authError: {} });
  });

  it('sets auth user', () => {
    const action = doSetUserSuccess({});
    const newState = userReducer(state, action);

    expect(newState).toEqual({ ...state, authError: null, authUser: {} });
  });

  it('returns user avatar upload progress', () => {
    const action = doSetAvatarUploadProgress({});
    const newState = userReducer(state, action);

    expect(newState).toEqual({ ...state, uploadProgress: {} });
  });

  it('returns user avatar url', () => {
    const action = doSetAvatarUrl({});
    const newState = userReducer(state, action);

    expect(newState).toEqual({ ...state, avatarUrl: {} });
  });

  it('returns user followers', () => {
    const action = doSetFollowers({});
    const newState = userReducer(state, action);

    expect(newState).toEqual({ ...state, followers: {} });
  });

  it('returns user following', () => {
    const action = doSetFollowing({});
    const newState = userReducer(state, action);

    expect(newState).toEqual({ ...state, following: {} });
  });

  it('returns selected user', () => {
    const action = doSetSelectedUser({});
    const newState = userReducer(state, action);

    expect(newState).toEqual({ ...state, selectedUser: {} });
  });

  it('returns initial state', () => {
    const action = {};
    const newState = userReducer(state, action);

    expect(newState).toEqual(state);
  });
});