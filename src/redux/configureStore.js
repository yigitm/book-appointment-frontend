import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import featuresReducers from './features';

const reducer = combineReducers({
  featuresReducers,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
