import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {applyMiddleware, createStore, combineReducers} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {Application} from './Application';
import {reducers as PostsReducers} from './posts/Posts';
import {reducers as PostDetailsReducers} from './post-details/PostDetails';

const middleware = applyMiddleware(promise(), thunk, logger);

const appReducers = {
  ...PostsReducers,
  ...PostDetailsReducers,
};

const store = createStore(
  combineReducers(appReducers),
  middleware
);

render(
  <Application store={store} />,
  document.getElementById('root')
);
