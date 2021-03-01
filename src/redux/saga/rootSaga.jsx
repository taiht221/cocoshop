import {all,fork} from 'redux-saga/effects';
import productSaga from './productSaga';
import categorySaga from './categorySaga';
export default function* rootSaga(){
    yield all([productSaga(),categorySaga()])
}