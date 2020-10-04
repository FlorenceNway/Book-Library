import _ from 'lodash';
import { CREATE_BOOK, GET_BOOKS, SELECT_BOOKS } from './bookActionType';
import { ADD_TO_CART } from '../order/orderActionType';

const initialState = {
  isPending: false,
  error: false,
  data: [],
  filterData: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_BOOK:
      return {
        ...state,
        isPending: action.meta.isPending,
        error: action.meta.error,
      };
    case ADD_TO_CART: {
      // const getBook = _.find(state.data, { id: action.payload });
      // getBooks['quantity'] = parseInt(getBooks['quantity']) - 1;
      // const book = state.data[getBook.id];
      // const qty = _.parseInt(book.quantity) - 1;

      const getBook = _.map(state.data, (data) => {
        if (data.id === action.payload) {
          return {
            ...data,
            quantity: _.parseInt(data.quantity) - 1,
          };
        }
        return { ...data };
      });
      return { ...state, data: _.keyBy(getBook, 'id') };
    }
    case GET_BOOKS: {
      const getBooks = _.map(action.payload, (book, index) => {
        return {
          ...book,
          id: index,
        };
      });
      // console.log('here', getBooks);
      return {
        ...state,
        isPending: action.meta.isPending,
        error: action.meta.error,
        data: _.keyBy(getBooks, 'id'), // put id with each object id1:{}, id2:{}
        // data: action.payload,
        filterData: action.payload,
      };
    }
    case SELECT_BOOKS: {
      const value = action.payload;
      const filterValue = _.filter(state.filterData, { name: value });
      console.log('filterValue', filterValue);
      return {
        ...state,
        data: value === 'All' ? state.filterData : filterValue,
      };
    }

    default:
      return state;
  }
}
