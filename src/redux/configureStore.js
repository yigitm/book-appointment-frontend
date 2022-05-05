import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import usersReducers from './users/authentication';

const reducer = combineReducers({
  usersReducers,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
