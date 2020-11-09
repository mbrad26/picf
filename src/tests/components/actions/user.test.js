import { 
  doRequestError,
  doSigninRequest,
  doSignupRequest, 
  doSignoutRequest,
  doSetUserRequest,
  doSetUserSuccess,
  doResetPasswordRequest,
  doUpdatePasswordRequest,
  doSigninWithGoogleRequest,
  doEmailVerificationRequest,
  doAvatarUploadRequest,
  doSetAvatarUploadProgress,
  doSetAvatarUrl,
  doGetAvatarUrl,
} from '../../../redux/actions/user';
import { 
  REQUEST_ERROR,
  SET_USER_REQUEST,
  SIGNIN_REQUEST,
  SIGNOUT_REQUEST,
  SIGNUP_REQUEST, 
  SET_USER_SUCCESS,
  RESET_PASSWORD_REQUEST,
  UPDATE_PASSWORD_REQUEST,
  SIGNIN_WITH_GOOGLE_REQUEST,
  EMAIL_VERIFICATION_REQUEST,
  AVATAR_UPLOAD_REQUEST,
  SET_AVATAR_UPLOAD_PROGRESS,
  SET_AVATAR_URL,
  AVATAR_REQUEST,
} from '../../../redux/constants/actionTypes';

describe('doSignupRequest', () => {
  it('returns the correct object', () => {
    const credentials = {};
    const expectedObject = {
      type: SIGNUP_REQUEST,
      payload: credentials,
    };

    expect(doSignupRequest(credentials)).toEqual(expectedObject);
  });
});

describe('doRequestError', () => {
  it('returns the correct object', () => {
    const error = {};
    const expectedObject = {
      type: REQUEST_ERROR,
      payload: error,
    };

    expect(doRequestError(error)).toEqual(expectedObject);
  });
});

describe('doSigninRequest', () => {
  it('returns the correct object', () => {
    const credentials = {};
    const expectedObject = {
      type: SIGNIN_REQUEST,
      payload: credentials,
    };

    expect(doSigninRequest(credentials)).toEqual(expectedObject);
  });
});

describe('doSignoutRequest', () => {
  it('returns the correct object', () => {
    const expectedObject = {
      type: SIGNOUT_REQUEST,
    };

    expect(doSignoutRequest()).toEqual(expectedObject);
  });
});

describe('doSetUserRequest', () => {
  it('returns the correct object', () => {
    const expectedObject = {
      type: SET_USER_REQUEST,
    };

    expect(doSetUserRequest()).toEqual(expectedObject);
  });
});

describe('doSetUserSuccess', () => {
  it('returns the correct object', () => {
    const user = {};
    const expectedObject = {
      type: SET_USER_SUCCESS,
      payload: user,
    };

    expect(doSetUserSuccess(user)).toEqual(expectedObject);
  });
});

describe('doResetPasswordRequest', () => {
  it('returns the correct object', () => {
    const email = {};
    const expectedObject = {
      type: RESET_PASSWORD_REQUEST,
      payload: email,
    };

    expect(doResetPasswordRequest(email)).toEqual(expectedObject);
  });
});

describe('doUpdatePasswordRequest', () => {
  it('returns the correct object', () => {
    const password = {};
    const expectedObject = {
      type: UPDATE_PASSWORD_REQUEST,
      payload: password,
    };

    expect(doUpdatePasswordRequest(password)).toEqual(expectedObject);
  });
});

describe('doSigninWithGoogleRequest', () => {
  it('returns the correct object', () => {
    const expectedObject = {
      type: SIGNIN_WITH_GOOGLE_REQUEST,
    };

    expect(doSigninWithGoogleRequest()).toEqual(expectedObject);
  });
});

describe('doEmailVerificationRequest', () => {
  it('returns the correct object', () => {
    const expectedObject = {
      type: EMAIL_VERIFICATION_REQUEST,
    };

    expect(doEmailVerificationRequest()).toEqual(expectedObject);
  });
});

describe('doAvatarUploadRequest', () => {
  it('returns the correct object', () => {
    const file = {};
    const expectedObject = {
      type: AVATAR_UPLOAD_REQUEST,
      payload: file,
    };

    expect(doAvatarUploadRequest(file)).toEqual(expectedObject);
  });
});

describe('doSetAvatarUploadProgress', () => {
  it('returns the correct object', () => {
    const progress = {};
    const expectedObject = {
      type: SET_AVATAR_UPLOAD_PROGRESS,
      payload: progress,
    };

    expect(doSetAvatarUploadProgress(progress)).toEqual(expectedObject);
  });
});

describe('doSetAvatarUrl', () => {
  it('returns the correct object', () => {
    const url = {};
    const expectedObject = {
      type: SET_AVATAR_URL,
      payload: url,
    };

    expect(doSetAvatarUrl(url)).toEqual(expectedObject);
  });
});

describe('doGetAvatarUrl', () => {
  it('returns the correct object', () => {
    const uid = {};
    const expectedObject = {
      type: AVATAR_REQUEST,
      payload: uid,
    };

    expect(doGetAvatarUrl(uid)).toEqual(expectedObject);
  });
});

describe('', () => {
  it('returns the correct object', () => {

  });
});

describe('', () => {
  it('returns the correct object', () => {

  });
});

describe('', () => {
  it('returns the correct object', () => {

  });
});

describe('', () => {
  it('returns the correct object', () => {

  });
});