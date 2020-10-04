import { combineReducers } from 'redux';
import bookReducer from '../service/book/bookReducer';
import orderReducer from '../service/order/orderReducer';

const rootReducer = combineReducers({
  bookReducer,
  orderReducer,
});

export default rootReducer;
