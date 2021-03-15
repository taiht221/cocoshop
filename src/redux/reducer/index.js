import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/rootSaga';
import cartReducer from './cartReducer.js';
import categoryReducer from './categoryReducer';
import productReducer from './productReducer';
import userReducer from './userReducer.js';
// import categoriReducer from 'pages/CategoryGrid/categorySlice';
// const middlewareSaga = createSagaMiddleware();
// // const thunk = createAsyncThunk()
// // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = configureStore(
//   {
//     reducer: combineReducers({
//       cart: cartReducer,
//       product: productReducer,
//       category: categoryReducer,
//       user: userReducer,
//       count: counterReducer,
//       // categori: categoriReducer,
//     }),
//     // middleware: applyMiddleware(middlewareSaga),
//     middleware: [middlewareSaga],
//   }

//   // compose(applyMiddleware(...[middleware]), composeEnhancers())
// );
// middlewareSaga.run(rootSaga);

// export default store;

// store.subscribe(()=> console.log(store.getState()))
const middleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    cart: cartReducer,
    product: productReducer,
    category: categoryReducer,
    user: userReducer,
  }),
  compose(applyMiddleware(...[middleware]), composeEnhancers())
);
middleware.run(rootSaga);

export default store;
