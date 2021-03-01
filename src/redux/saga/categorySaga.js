import { callCategory } from '../../Apis';
import { call, put, takeLatest } from 'redux-saga/effects';

import { GET_CATEGORY, GET_CATEGORY_SUCCESS } from '../actions/type';

function* logicCategory() {
  const res = yield call(callCategory);
  if (res) {
    yield put({ type: GET_CATEGORY_SUCCESS, payload: res.data });
  }
}

export default function* categorySaga() {
  yield takeLatest(GET_CATEGORY, logicCategory);
}
