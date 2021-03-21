import { callItem } from '../../Apis/index';
import { call, put, takeLatest } from 'redux-saga/effects';

import { GET_PRODUCT, GET_PRODUCT_FAIL, GET_PRODUCT_SUCCESS } from '../actions/type';
// import { callItem } from "./../../Apis";
function* logicProduct(query) {
  try {
    // If `fetch()` fails, redux-saga will throw a catchable error
    const res = yield call(callItem, query.payload);
    // const user = yield call(callUser, action.payload);
    yield put({ type: GET_PRODUCT_SUCCESS, payload: res.data });
  } catch (error) {
    alert(error);
    yield put({ type: GET_PRODUCT_FAIL, payload: error });
  }
}

export default function* productSaga() {
  yield takeLatest(GET_PRODUCT, logicProduct);
}
