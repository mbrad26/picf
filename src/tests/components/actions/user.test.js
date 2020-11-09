import { 
  doRequestError,
  doSigninRequest,
  doSignupRequest, 
} from '../../../redux/actions/user';
import { 
  REQUEST_ERROR,
  SIGNIN_REQUEST,
  SIGNUP_REQUEST, 
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