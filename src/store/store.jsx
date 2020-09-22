import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './combineReducer';

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger'); // eslint-disable-line global-require

  const logger = createLogger({
    level: 'log',
    collapsed: true,
    // predicate: (getState, action) => !includes(action.type, '@@redux-form')
  });
  middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

// export const store = createStoreWithMiddleware(persistedReducer);
const store = createStoreWithMiddleware(
  reducers,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_()
);
// eslint-enable //

export default store;
