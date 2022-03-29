import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import authReducer from "./AuthReducer";

const AuthState = ({ children }) => {
  const INITIAL_STATE = {
    currentUser: null,
  };

  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
