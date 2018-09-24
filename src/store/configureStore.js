/* eslint-disable no-undef */

import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import axiosMiddleware from 'redux-axios-middleware';
import { client as axiosClient } from './middlewares/axios'

import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';

export default function configureStore(initialState = {}) {
  const composerEnhancers = (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const middlewareList = [thunk, axiosMiddleware(axiosClient)];

  if(__DEV__) {
    const logger = createLogger();
    middlewareList.push(logger);
  }

  const middleware = applyMiddleware(...middlewareList);
  const store = createStore(rootReducer, initialState, composerEnhancers(middleware));

  // if(module.hot && __DEV__) {
  //   module.hot.accept('../reducers', () => {
  //     const nextRootReducer = require('../reducers/index').rootReducer;
  //     store.replaceReducer(nextRootReducer);
  //   });
  // }
  return store;
}
