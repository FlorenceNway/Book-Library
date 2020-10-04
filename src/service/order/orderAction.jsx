import { ADD_TO_CART } from './orderActionType';

export const addToCart = (data) => async (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    meta: {
      isPending: true,
      error: false,
    },
    payload: data,
  });
};
