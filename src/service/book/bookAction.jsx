import axios from 'axios';
import { CREATE_BOOK, GET_BOOKS, SELECT_BOOKS } from './bookActionType';

export const createBook = (data) => async (dispatch) => {
  try {
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

export const getAllBooks = (data) => async (dispatch) => {
  try {
    const url = 'https://book-library-4e468.firebaseio.com/book.json/';
    dispatch({
      type: GET_BOOKS,
      meta: {
        isPending: true,
        error: false,
      },
    });

    const response = await axios.get(url, data);
    console.log(response.data);
    dispatch({
      type: GET_BOOKS,
      meta: {
        isPending: false,
        error: false,
      },
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_BOOKS,
      meta: {
        isPending: false,
        error: true,
      },
    });
  }
};

export const selectBook = (data) => (dispatch) => {
  console.log('selectBook', data);
  dispatch({
    type: SELECT_BOOKS,
    payload: data,
  });
};
