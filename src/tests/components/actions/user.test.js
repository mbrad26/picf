import { 
  doRequestError,
  doSigninRequest,
  doSignupRequest, 
  doSignoutRequest,
  doSetUserRequest,
  doSetUserSuccess,
  doResetPasswordRequest,
  doUpdatePasswordRequest,
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

describe('', () => {
  it('returns the correct object', () => {

  });
});

describe('', () => {
  it('returns the correct object', () => {

  });
});