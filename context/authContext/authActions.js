import { authActionTypes } from "./authActionTypes";

export const setCurrentUser = (dispatch, userData) =>
  dispatch({
    type: authActionTypes.SET_USER,
    payload: userData,
  });

export const removeCurrentUser = (dispatch) =>
  dispatch({ type: authActionTypes.REMOVE_USER });
