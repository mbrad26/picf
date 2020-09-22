import { takeEvery, all } from 'redux-saga/effects';

function* watchAll() {
  yield all([
    takeEvery(),
  ]);
};

export default watchAll;