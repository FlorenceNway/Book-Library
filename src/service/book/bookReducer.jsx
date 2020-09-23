import { CREATE_BOOK } from './bookActionType';

const initialState = {
  isPending: false,
  error: false,
  data: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_BOOK:
      return {
        ...state,
        isPending: action.meta.isPending,
        error: action.meta.error,
      };
    default:
      return state;
  }
}
