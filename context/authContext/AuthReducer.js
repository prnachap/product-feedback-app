import { authActionTypes } from "./authActionTypes";

/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case authActionTypes.SET_USER:
      return { ...state, currentUser: payload };
    case authActionTypes.REMOVE_USER:
      return { ...state, currentUser: null };
    default:
      return state;
  }
};
