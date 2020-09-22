import { combineReducers } from 'redux';
import bookReducer from '../service/book/bookReducer';

const rootReducer = combineReducers({
  bookReducer,
});

export default rootReducer;
