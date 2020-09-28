import _ from 'lodash';
import { CREATE_BOOK, GET_BOOKS, SELECT_BOOKS } from './bookActionType';

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
    case GET_BOOKS:
      return {
        ...state,
        isPending: action.meta.isPending,
        error: action.meta.error,
        data: action.payload,
        filterData: action.payload,
      };
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
