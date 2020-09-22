import axios from 'axios';
import { CREATE_BOOK } from './bookActionType';

export const createBook = (data) => async (dispatch) => {
  try {
    console.log('data', data);
    const url = 'https://book-library-4e468.firebaseio.com/book.json/';
    dispatch({
      type: CREATE_BOOK,
      meta: {
        isPending: true,
        error: false,
      },
      // payload: null,
    });

    await axios.post(url, data); // data == object pass from booklist dispatch(createBook({}))
    dispatch({
      type: CREATE_BOOK,
      meta: {
        isPending: false,
        error: false,
      },
    });
  } catch (error) {
    dispatch({
      type: CREATE_BOOK,
      meta: {
        isPending: false,
        error: true,
      },
    });
  }
};
