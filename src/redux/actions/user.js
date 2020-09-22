import  { SET_USER } from '../constants/actionTypes';

const doSetUser = user => ({
  type: SET_USER,
  payload: user,
});

export { doSetUser };