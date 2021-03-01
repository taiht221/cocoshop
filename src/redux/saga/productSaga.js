import { call, put, takeLatest } from 'redux-saga/effects';
import { callItem } from '../../Apis';

import { GET_PRODUCT, GET_PRODUCT_SUCCESS } from '../actions/type';
// import { callItem } from "./../../Apis";
function* logicProduct(query) {
  const res = yield call(callItem, query.payload);

  if (res) {
    yield put({ type: GET_PRODUCT_SUCCESS, payload: res.data });
  }
}

export default function* productSaga() {
  yield takeLatest(GET_PRODUCT, logicProduct);
}
