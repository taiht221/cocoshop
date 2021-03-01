import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import cartReducer from './cartReducer.js';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/rootSaga';

const middleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    cart: cartReducer,
    product: productReducer,
    category: categoryReducer,
  }),
  compose(applyMiddleware(...[middleware]), composeEnhancers())
);
middleware.run(rootSaga);

export default store;
// store.subscribe(()=> console.log(store.getState()))
