import { all, fork } from 'redux-saga/effects';
import productSaga from './productSaga';
import categorySaga from './categorySaga';
import userSaga from './userSaga';
export default function* rootSaga() {
  yield all([productSaga(), categorySaga(), userSaga()]);
}
